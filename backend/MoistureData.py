import sqlite3
from time import sleep
from backendCalls import *


connection = sqlite3.connect("moisture.db")
cursor = connection.cursor()

while(True):
    try:
        cursor.execute("create table rasberryMoistureData (Moisture integer)") #Format - (Temp Int)

    #if needed I can add more text if we want to display time and date
    except:
        moisture = get_moisture()
        cursor.execute("INSERT INTO rasberryMoistureData (Moisture) VALUES (?)", [moisture])
        sleep(5)


"""#printting the Values in the database
cursor.execute("Select * from rasberryMoistureData")
items = cursor.fetchall()
print(items)"""

connection.commit()
connection.close()