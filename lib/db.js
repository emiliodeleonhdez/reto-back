const mongoose = require("mongoose");  // Habilita el uso mongoose 
const config = require("dotenv").config()

const connect = () =>
  new Promise((resolve, reject) => {
    mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`,
       // Aquí se conecta a la base de datos Connect to Cluster()
      {
        useNewUrlParser: true,
      }
    );
    const db = mongoose.connection;

    db.on("open", () => { // Valida si la conexión se hizo bien 
      console.warn("Connection successful");
      resolve(mongoose);
    });

    db.on("error", (error) => {// Valida si la conexión no se realizó
      console.error("Connection failed", error);
      reject(error);
    });
  });

module.exports = { // Export el modulo al index en raíz
  connect,
};
//