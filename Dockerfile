# Use the official Node.js 22 image as a base
FROM node:22.13.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Define the command to run the application
CMD ["npm", "start"]