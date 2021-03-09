FROM node:alpine
ENV PORT=5000
ENV HOST=host.docker.internal
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD npm run start
EXPOSE 5000