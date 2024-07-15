import sqlite3

connection = sqlite3.connect("temp.db")
cursor = connection.cursor()

cursor.execute("create table Temperature (rasberry_pi text, rasberry_temperature integer)") #Format - Temperature: (Temp Int)

#if needed I can add more text if we want to display time and date
#next step is to take the data from MoistureDisplay.js and input it into the db once I have real data

connection.close()