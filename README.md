# Kenya's Health Facilities

![Screenshot from 2024-07-04 06-12-39](https://github.com/OluochIan/kenyan-health-facilities/assets/100572229/40a4fd86-8108-4b41-a8da-a9708fd5e0c1)


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



