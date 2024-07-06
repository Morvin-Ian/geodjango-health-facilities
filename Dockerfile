# Backend Dockerfile
FROM python:3.12


RUN apt-get update \
   && apt-get -y install gcc postgresql \
   && apt-get clean

# Install system dependencies
RUN apt-get update && apt-get install -y \ 
    binutils \
    libproj-dev \
    gdal-bin \
    python3-gdal

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]