# Use a Node.js runtime as the base image
FROM node:18.13.0

# Create and set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Build your NestJS application (you can adjust the build command as needed)
RUN npm run build

# Expose the port your NestJS application is listening on (adjust if necessary)
EXPOSE 3000

# Command to start your NestJS application (adjust as needed)
CMD [ "npm", "run", "start:prod" ]
