from flask import Flask, render_template
import mysql.connector

app = Flask(__name__)

# Replace the following with your MySQL/MariaDB connection details
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="mysql"
)

cursor = db.cursor()

@app.route('/')
def index():
    # Define table names
    table_name='transactions'
    # Fetch data from each table

    cursor.execute(f"SELECT * FROM {table_name}")
    rows = cursor.fetchall()
    table_data={
        'columns':['tid','towallet','fromwallet','age','stakeholdername'],
        'rows':rows
    }

    return render_template('index.html',table_data=table_data)

if __name__ == '__main__':
    app.run(debug=True)
