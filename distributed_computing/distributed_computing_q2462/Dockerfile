FROM python:3

RUN mkdir -p /myApp
WORKDIR /myApp
COPY requirements.txt ./
RUN pip3 install -r requirements.txt
COPY . .

CMD [ "python3", "./app.py"]
