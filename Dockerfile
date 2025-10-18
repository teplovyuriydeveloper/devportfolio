FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy only dependency files first (for caching)
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy rest of the project
COPY . .

# Expose default Nuxt dev port
EXPOSE 3000

CMD ["yarn", "dev", "--host", "0.0.0.0"]
