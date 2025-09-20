# Use an official Node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Expose the port the app runs on (Vite default is 5173)
EXPOSE 5173

# Start the app
CMD ["npm", "run", "preview", "--", "--host", "--port", "5173"]
