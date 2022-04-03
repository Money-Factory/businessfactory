FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:16

RUN apt-get update && apt-get install --assume-yes python3-pip
ENV PATH="/home/node/.local/bin:${PATH}"

USER node

RUN mkdir --parents /home/node/app
COPY --chown=node:node . /home/node/app
WORKDIR /home/node/app

RUN pip3 install --user pre-commit \
    && npm install --global expo-cli markdownlint-cli \
    && pre-commit install \
    && yarn

EXPOSE 19000-19006

CMD yarn start
