FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
# dev mode
CMD ["npm","run", "dev"] 
