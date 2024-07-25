FROM node:20-alpine

ARG VERDACCIO_TOKEN

ENV VERDACCIO_TOKEN=${VERDACCIO_TOKEN}

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/

# set Yarn version to stable
RUN yarn set version 4.1.0

# Set Python interpreter for `node-gyp` to use
ENV PYTHON /usr/bin/python3

# install python for scss, node-gyp
RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*

# install packages
RUN yarn install --immutable

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN yarn build
