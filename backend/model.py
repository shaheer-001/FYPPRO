from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///heartstrokeprediction.db'  # SQLite database path
db = SQLAlchemy(app)

class UserCredentials(db.Model):
    __tablename__ = "UserCredentials"
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(100), nullable=False)

    def __repr__(self):
        return f'<UserCredentials {self.username}>'
    
# class User(db.Model):
#     __tablename__ = "User"
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(50), unique=True, nullable=False)
#     weight = db.Column(db.String(120), unique=True, nullable=False)
#     medicalhistory = db.Column(db.STring(100), nullable=False)

#     def __repr__(self):
#         return f'<User {self.name}>'