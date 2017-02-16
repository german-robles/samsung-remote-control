# Tested on < 2016 Samsung TV's
# Setup:
### Create config.js as sample:
```javascript
//configuration Samsung TV api
module.exports = {
    'port' : 8080,
    'ip_address' : '127.0.0.1' //You must provide here your TV IP
};

```
# Docker installation:

#### Build docker image
```sh
docker build -t <your username>/stv-frontend .
```
#### Running docker app
```sh
docker run -p 8080:8080 -d <your username>/stv-frontend
```


# Installation:

### NodeJS:

####Ubuntu 14.04 Example
```sh
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Optional: Install compiling tools
```sh
sudo apt-get install -y build-essential
```
#### More doc on [NodeJS page].

### Running STV Frontend

#### Installing dependencies with npm
· Run the following command where package.json is located
```sh
npm install
```

### Running app:

```sh
node server.js
```

#### (Optional) You can use nodemon:

· Installation
```sh
npm install -g nodemon
```
· Running App
```sh
nodemon server.js
```
### Fire up a Web Browser:
  http://localhost:8080 or your server IP

   [NodeJS page]: <https://nodejs.org/en/download/package-manager/>
