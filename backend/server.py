import os
from flask import Flask, request, jsonify
from heartDisease import HeartDiseaseModel
from model import db, UserCredentials

app = Flask(__name__)

# Loading the Flask app configuration with the database URI
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///heartstrokeprediction.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False  # Disable SQLAlchemy event tracking
db.init_app(app)

# Route to register a new user
@app.route('/signup', methods=['POST'])
def register_user():
    data = request.get_json()  # Get JSON data from the request
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Check if username or email already exists in the database
    if UserCredentials.query.filter_by(username=username).first() is not None:
        return jsonify({'error': 'Username already exists'}), 400
    if UserCredentials.query.filter_by(email=email).first() is not None:
        return jsonify({'error': 'Email already exists'}), 400

    # Create a new User object and add it to the database
    new_user = UserCredentials(username=username, email=email, password=password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User registered successfully'}), 201

# Route to login a user
@app.route('/login', methods=['POST'])
def login_user():
    data = request.get_json()  # Get JSON data from the request
    username = data.get('username')
    password = data.get('password')

    # Find the user in the database by username
    user = UserCredentials.query.filter_by(username=username).first()

    if user and user.password == password:
        return jsonify({'message': 'Login successful'}), 200
    else:
        return jsonify({'error': 'Invalid credentials'}), 401


#Code for Stroke Prediction
@app.route("/predict", methods=['POST'])
def predict_heart_disease():
    data = request.get_json()

    ready_data = {
        'age': int(data['age']),
        'gender': data['gender'],
        'hypertension': int(data['hypertension']),
        'heart_disease': int(data['heart_disease']),
        'ever_married': data['ever_married'],
        'work_type': data['work_type'],
        'residence_type': data['residence_type'],
        'smoking_status': data['smoking_status'],
        'avg_glucose_level': float(data['avg_glucose_level']),
        'bmi': float(data['bmi'])
    }

    model = HeartDiseaseModel()
    df = model.make_dataframe(ready_data)

    stroke_prob = model.predict(df)[0]
    stroke = "Yes" if stroke_prob > 0.5 else "No"

    return jsonify({
        "stroke": stroke
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
