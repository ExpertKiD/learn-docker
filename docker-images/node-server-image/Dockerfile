# Select base image
FROM node:alpine

# Add dependencies
COPY ./ ./

RUN npm install

# Create a startup command
CMD ["npm","start"]