import { Sequelize } from "sequelize";

const opciones = {
    serverName: "172.30.0.2",
    dataBaseName: "HOSVITAL",
    userId: "HOSVITAL",
    userPassword: "CCQ2019Clinica"
}


const sequelize = new Sequelize(opciones.dataBaseName, opciones.userId, opciones.userPassword, { 
    host: opciones.serverName,
  });

export default sequelize;