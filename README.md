# Kenya's Health Facilities

![Screenshot from 2024-07-04 06-12-39](https://github.com/OluochIan/kenyan-health-facilities/assets/100572229/40a4fd86-8108-4b41-a8da-a9708fd5e0c1)


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
