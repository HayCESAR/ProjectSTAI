const routes = require("express").Router();

const datasetRoute = require("./routes/dataset");
const predictionRoute = require("./routes/prediction");
const dashboardRoute = require("./routes/dashboard");
const usersRoute = require("./routes/users");

routes.use("/dataset", datasetRoute);
routes.use("/prediction", predictionRoute);
routes.use("/dashboard", dashboardRoute);
routes.use("/users", usersRoute);

//CONFIGURAR FIREBASE AUTHENTICATION (LOGIN/LOGOUT)
//AUTENTICAR DB

//CRIAR BD RELACIONAL SQL

//TRABALHAR NO FRONT-END
//MOCKAR DADOS DA IA PARA O DASHBOARD

//FAZER DEPLOY DA APLICAÇÃO NO FIREBASE HOSTING

module.exports = routes;