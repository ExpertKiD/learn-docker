# Select base image
FROM node:alpine

# Add dependencies
WORKDIR /peuconomia/node-server

COPY ./ ./

#WORKDIR ./code
RUN npm install

# Create a startup command
CMD ["npm","start"]