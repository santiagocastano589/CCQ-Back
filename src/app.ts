import express, { Application, Request, Response } from "express";
import sequelize from "./db/connection";

const app: Application = express();
// const port: string | number = process.env.PORT || 3000;
const port = 3000;

app.listen(port, () =>{
    async function testConnection() {
        try {
          await sequelize.authenticate();
          console.log('Conexión establecida correctamente.');
        } catch (error) {
          console.error('No se pudo conectar a la base de datos:', error);
        }
      }
      testConnection();
    
      console.log(`Server running on port ${port}`);
})
