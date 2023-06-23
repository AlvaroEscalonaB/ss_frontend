FROM node:16-alpine3.11
WORKDIR /app
COPY package.json .
RUN yarn install
COPY . .
EXPOSE 5173
CMD ["yarn", "dev"]