FROM node:argon

# Create app directory
RUN mkdir -p /stv_app
WORKDIR /stv_app
# Install app dependencies
COPY package.json /stv_app
RUN npm install

# Bundle app source
COPY . /stv_app

# Port to Expose
EXPOSE 8080

CMD [ "npm", "start" ]
