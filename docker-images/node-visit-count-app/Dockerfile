# Select base image
FROM node:alpine

# Add dependencies
WORKDIR /peuconomia/node-server

COPY package.json .
RUN npm install
COPY . .

# Create a startup command
CMD ["npm","start"]