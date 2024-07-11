# Kenya's Health Facilities

![Screenshot from 2024-07-11 11-24-30](https://github.com/Morvin-Ian/kenyan-health-facilities/assets/78966128/5a4dc9a9-a997-45db-8875-0f0fa4ceb265)


## Setup
    1. git clone 'git@github.com:OluochIan/kenya-counties-borders.git'
    
### Run Application
    - make build
    - make makemigrations
    - make migrate
    - make superuser
    - make shell
      to load the boundaries data run these commands in the shell
        >>> from facilities.data import load_layer
        >>> load_layer.run()
        >>> quit()



