FROM node:18-alpine
WORKDIR /app

# Install deps
COPY package.json package-lock.json* ./
RUN npm ci --only=production || npm install --production

COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
