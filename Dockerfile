


FROM node:20

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 8000

CMD ["npx", "nodemon", "app.js"]
