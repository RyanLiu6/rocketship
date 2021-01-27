FROM node:alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

ARG folder_path

# install app dependencies
COPY ${folder_path}/package.json ./
COPY ${folder_path}/package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts -g

# add app
COPY ${folder_path} ./

# start app
CMD ["npm", "start"]
