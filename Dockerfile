FROM node:14

WORKDIR /app

COPY package.json /app

ARG NODE_ENV
RUN if ["$NODE_ENV" = "production"]; then npm install --only=production; else npm install; fi

COPY . /app

EXPOSE 2000

CMD ["npm", "run", "start-dev"]
