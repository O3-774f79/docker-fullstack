FROM node:6.9.1 //base image ที่ pull มาจาก  docker hub
LABEL trainer "Moo_O3-774f79" //คน ทำไฟร์
WORKDIR /nodeapp
COPY app /nodeapp
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]