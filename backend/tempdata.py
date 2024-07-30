from sqlite3 import *
connection = connect("temp.db")
cursor = connection.cursor()

try:
    cursor.execute("create table rasberryTemperatureData (Temperature integer)") #Format - (Temp Int)

except:
    pass

finally:
    with open("FakeTempData.txt", "r") as inFile:
        for temperature in inFile:
            cursor.execute("INSERT INTO rasberryTemperatureData (Temperature) VALUES (?)", [temperature])

    #printting the Values in the database
    cursor.execute("Select * from rasberryTemperatureData")
    items = cursor.fetchall()
    print(items)

    connection.commit()
    connection.close()