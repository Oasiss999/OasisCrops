import sqlite3
from time import sleep
import board
from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS
from adafruit_seesaw.seesaw import Seesaw

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

i2c_bus = board.I2C()
ss = Seesaw(i2c_bus, addr=0x36)

@app.route('/Moisture')
def get_Moisture():
    try:
        _moisture = ss.moisture_read()
        return jsonify({"moisture": _moisture})  # Use jsonify to return JSON response
    except Exception as e:
        return jsonify({"error": str(e)}), 500  # Return JSON error with status code

@app.route('/Ping')
def PingTest():
    return jsonify({"message":"Connected"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, threaded= True)

connection = sqlite3.connect("moisture.db")
cursor = connection.cursor()

while(True):
    try:
        cursor.execute("create table rasberryMoistureData (Moisture integer)") #Format - (Temp Int)

    #if needed I can add more text if we want to display time and date
    except:
        moisture = get_Moisture()
        cursor.execute("INSERT INTO rasberryMoistureData (Moisture) VALUES (?)", [moisture])
        sleep(5)


"""#printting the Values in the database
cursor.execute("Select * from rasberryMoistureData")
items = cursor.fetchall()
print(items)"""

connection.commit()
connection.close()