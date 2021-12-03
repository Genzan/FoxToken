# User a Docker image as a base
FROM node:alpine
WORKDIR "/app"

# Download and Install dependencies
COPY ./package.json ./
RUN npm install
COPY . .
EXPOSE 4080
CMD ["npm", "run", "dev"]