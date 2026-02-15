# --- Stage 1: Build Stage ---
FROM node:20-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
# Vite requires Node 18+ to handle the optional chaining syntax in its binaries
RUN npm run build

# --- Stage 2: Production Stage ---
FROM nginx:stable-alpine

# Remove default assets
RUN rm -rf /usr/share/nginx/html/*

# Copy build output from 'dist'
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
