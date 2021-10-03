FROM node:alpine
# Install app dependencies

RUN mkdir -p /server
 
WORKDIR /server

# Bundle app source
COPY package.json /server
COPY yarn.lock /server

RUN yarn install

COPY . /server

# EXPOSE 3001
CMD ["yarn", "start"]
