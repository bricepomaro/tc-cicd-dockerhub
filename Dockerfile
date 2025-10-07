# Dockerfile
# Étape build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production && cp -r node_modules prod_node_modules
RUN npm ci
COPY . .
RUN npm test
# Étape runtime
FROM node:20-alpine
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/prod_node_modules ./node_modules
COPY src ./src
COPY package*.json ./
EXPOSE 3000
CMD ["npm", "start"]
