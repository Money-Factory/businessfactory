FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:16

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app

COPY package.json yarn.lock app.json ./

RUN yarn

USER node

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

ENTRYPOINT ["yarn", "start"]
