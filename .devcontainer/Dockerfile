FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:16

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

USER node

RUN mkdir --parents /home/node/app
COPY --chown=node:node . /home/node/app
WORKDIR /home/node/app

RUN npm install --global expo-cli && yarn

EXPOSE 19000
EXPOSE 19001
EXPOSE 19002

CMD yarn start