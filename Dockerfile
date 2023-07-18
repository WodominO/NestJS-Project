# Base image
ARG FROM_IMAGE=18-alpine

# BUILD FOR LOCAL DEVELOPMENT

FROM node:${FROM_IMAGE} As development

ENV DIR /var/www
WORKDIR $DIR

COPY app/package*.json app/yarn.* $DIR/
RUN yarn install --check-files

COPY ./app $DIR

RUN yarn run build
