const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./routes");
const db = require("./lib/db") // importa la conexión de la base de datos en .lib/db.js

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

apiRouter(app);


app.listen(port, () => {
  console.log(`Listening on port: http://localhost:${port}`);
  db.connect() // Aquí se establece la conexión con la base de datos
    .then(()=>{
      console.log("Data Base Connection stablished")
    })
    .catch((error)=>{ //
      console.error("Connection refused", error)
    })
});
