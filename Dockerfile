FROM node:14 as base

FROM base as development

WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
EXPOSE 2000
CMD ["npm", "run", "start-dev"]

FROM base as production

WORKDIR /app
COPY package.json /app
RUN npm install --only=production
COPY . .
EXPOSE 2000
CMD ["npm", "start"]
