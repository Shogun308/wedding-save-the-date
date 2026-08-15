FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package configurations
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy application files
COPY . .

# Environment defaults
ENV PORT=8080
ENV NODE_ENV=production

# Expose application port
EXPOSE 8080

# Start application
CMD ["node", "server.js"]
