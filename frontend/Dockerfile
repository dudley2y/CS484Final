FROM node:alpine
# Install app dependencies

RUN mkdir -p /client
WORKDIR /client
 
COPY package.json /client 
COPY yarn.lock /client

RUN yarn install

# Bundle app source
COPY . ./
COPY . /src
COPY . /public
ENTRYPOINT ["/bin/frontend"]

# EXPOSE 3000
CMD ["yarn", "start"]
