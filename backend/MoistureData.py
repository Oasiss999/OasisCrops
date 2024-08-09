import sqlite3
from time import sleep

from flask import Flask, jsonify
from flask_cors import CORS  # Import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route('/Moisture')
def get_Moisture():
    try:
        _moisture = 10
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