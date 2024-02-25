# Use the official Node.js 14 image as a base
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port the app runs on
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

# Serve the app
CMD ["npm", "start"]



