FROM node:16

USER node

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

ARG PORT=19000
ENV PORT $PORT
EXPOSE $PORT 19001 19002

WORKDIR /app

COPY package.json yarn.lock app.json ./

RUN yarn

ENTRYPOINT ["yarn"]
CMD ["web"]
