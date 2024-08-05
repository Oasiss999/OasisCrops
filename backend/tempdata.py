from sqlite3 import *
from time import sleep
import board
from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS
from adafruit_seesaw.seesaw import Seesaw

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

i2c_bus = board.I2C()
ss = Seesaw(i2c_bus, addr=0x36)

@app.route('/Temp')
def get_Temp():
    try:
        _temp = ss.get_temp()
        _f = (_temp * (9/5)) + 32
        return jsonify({"temperature": _f})  # Use jsonify to return JSON response
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return JSON error with status code
        
@app.route('/Ping')
def PingTest():
    return jsonify({"message":"Connected"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, threaded= True)

connection = connect("temp.db")
cursor = connection.cursor()

while(True):
    try:
        cursor.execute("create table rasberryTemperatureData (Temperature integer)") #Format - (Temp Int)

    except:
        temperature = get_Temp()
        cursor.execute("INSERT INTO rasberryTemperatureData (Temperature) VALUES (?)", [temperature])
        sleep(5)

"""#printing the Values in the database
cursor.execute("Select * from rasberryTemperatureData")
items = cursor.fetchall()
print(items)"""

connection.commit()
connection.close()