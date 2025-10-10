import email
from click import password_option
from flask import Blueprint, jsonify, request

user_bp = Blueprint ('user',__name__)

@user_bp.route('/user')
def user_home():
    return 'User route works!'

# Creating temporary db for users
users = []

@user_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

# Sign in with no email or password
    if not email or not password:
        return jsonify({'error':'Email and password are required'}), 400

# Does this user exist?
    if any (e['email']== email for e in users):
        return jsonify ({'error': 'User already exists'}), 400

# User registered successfully    
    users.append({'email': email, 'password': password})
    return jsonify({'message':'User registered successfully'}), 201
    

@user_bp.route('/login', methods = ['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify ({'error':'Email and password are required'}), 400
    
    user = next((u for u in users if u['email']== email), None)
    if not user or user['password'] != password:
        return jsonify({'error': 'Invalid email or password'}), 401
    
    return jsonify ({'message':'Login successful'}), 200
