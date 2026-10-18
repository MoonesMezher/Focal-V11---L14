1- Create folder
2- CMD: npm init -y
3- CMD: npm i express nodemon
4- Update package.json => scripts
5- Create src Folder => { controllers, models, middlewares, routes, app.js }
6- Setup Express:
const express = require("express");
const app = express();
app.use(express.json());
app.listen(5000, () => console.log("...."))
7- Create Models
8- Create Routes
9- Call Routes in app.js
10- Create Controllers

app.js => routes => controllers => models