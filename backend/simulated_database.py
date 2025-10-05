import sqlite3
import random
import os
import datetime

conn = sqlite3.connect('canvas_simulator.db')

DATABASE_NAME = 'canvas_simulator.db'
# NUM_COURSES = 6
# NUM_STUDENTS = 20
# ASSIGNMENTS = 8 



# initializes the database 
def init__db(conn):
    print("Initializing simulated Canvas database...")
    c = conn.cursor()

    #users table
    c.execute("""CREATE TABLE IF NOT EXISTS users(
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL)""")

    #courses table
    c.execute("""CREATE TABLE IF NOT EXISTS courses (
        course_id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        teacher TEXT)""")
    
    conn.commit()
    print("Database tables created successfully.")


def main():
    print("Initializing database setup...")
    init__db(conn)
    conn.close()
    print("Database connection closed.")


if __name__ == '__main__':
    main() 






