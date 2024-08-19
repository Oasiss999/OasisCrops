from sqlite3 import *
from time import sleep
from backendCalls import *

connection = connect("temp.db")
cursor = connection.cursor()

while(True):
    try:
        cursor.execute("create table rasberryTemperatureData (Temperature integer)") #Format - (Temp Int)

    except:
        temperature = get_temp()
        cursor.execute("INSERT INTO rasberryTemperatureData (Temperature) VALUES (?)", [temperature])
        sleep(5)

"""#printing the Values in the database
cursor.execute("Select * from rasberryTemperatureData")
items = cursor.fetchall()
print(items)"""

connection.commit()
connection.close()