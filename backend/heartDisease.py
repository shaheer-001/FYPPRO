import pandas as pd
from keras.models import load_model

class HeartDiseaseModel:
    def __init__(self):
         self.model = load_model('health-care-model.h5')
    
    def make_dataframe(self, data):
       
        # ADDING GENDER
        if data['gender'].lower() == 'male':
            gender = 1
        elif data['gender'].lower() == 'female':
            gender = 0
        else:
            gender = 2

        # ADDING AGE
        age = int(data['age'])

        # ADDING hypertension
        hypertension = data['hypertension']

        # ADDING HEART DISEASE
        heart_disease = data['heart_disease']

        # ADDING EVER MARRIED
        ever_married = 1 if data['ever_married'].lower() == 'yes' else 0

        # ADDING WORK TYPE
        work_type = data['work_type'].lower()
        if work_type == "children":
            work_type = 0
        elif work_type == "govt_job":
            work_type = 1
        elif work_type == "self-employed":
            work_type = 2
        elif work_type == "private":
            work_type = 3
        elif work_type == "never_worked":
            work_type = 4
        else:
            work_type = 5

        # ADDING RESIDENCE TYPE
        residence_type = data['residence_type'].lower()
        if residence_type == "urban":
            residence_type = 0
        elif residence_type == "rural":
            residence_type = 1
        else:
            residence_type = 2


        # ADDING BLOOD GLUCOSE
        avg_glucose_level = data['avg_glucose_level']

        # ADDING BLOOD PRESSURE
        bmi = data['bmi']

        # ADDING SMOKING STATUS
        smoking_status = data['smoking_status'].lower()
        if smoking_status == "never smoked":
            smoking_status = 0
        elif smoking_status == "formerly smoked":
            smoking_status = 1
        elif smoking_status == "smokes":
            smoking_status = 2
        elif smoking_status == "unknown":
            smoking_status = 3

        df = pd.DataFrame({
            'gender': [gender],
            'age': [age],
            'hypertension': [hypertension],
            'heart_disease': [heart_disease],
            'ever_married': [ever_married],
            'work_type': [work_type],
            'Residence_type': [residence_type],
            'avg_glucose_level': [avg_glucose_level],
            'bmi': [bmi],
            'smoking_status': [smoking_status]
        })

        return df


    def predict(self, data):
        return self.model.predict(data)[0] == 1
    

if __name__ == '__main__':
    model = HeartDiseaseModel()
    data = {
        'age': 67,
        'gender': 'male',
        'hypertension': 0,
        'heart_disease': 1,
        'ever_married': 'yes',
        'work_type': 'private',
        'residence_type': 'urban',
        'smoking_status': 'formerly smoked',
        'avg_glucose_level': 228.69,
        'bmi': 36.6
    }

    df = model.make_dataframe(data)
    print(model.predict(df))