# Kenya's Health Facilities
## Setup
    1. git clone 'https://github.com/OluochIan/kenyan-health-facilities.git'
    3. pip install -r requirements.txt
    4. cd frontend && npm i

### Run
    1. python manage.py makemigrations
    2. python manage.py migrate
    3. python manage.py shell
        >> from facilities.data import load_layer
        >> load_layer.run()
    4. python manage.py runserver
    3. On another terminal - cd frontend && npm run dev 
