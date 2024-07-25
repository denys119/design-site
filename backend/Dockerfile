# base image
FROM node:20-alpine

# Set up working directory
WORKDIR /app

# Copy package.json to root directory
COPY package.json .

# Copy yarn.lock to root directory
COPY yarn.lock .

COPY .yarnrc.yml .

COPY .yarn/ .yarn/

# Set up yarn version
RUN yarn set version 4.1.0

# Install dependencies, but not generate a yarn.lock file and fail if an update is needed
RUN yarn --immutable

# Copy strapi project files
# COPY tsconfig.json ./tsconfig.json
COPY favicon.png ./favicon.png
COPY src/ src/
COPY public/ public/
COPY database/ database/
COPY config/ config/
# ...

# Build admin panel
RUN yarn build

# Start strapi server
CMD ["yarn", "develop"]
