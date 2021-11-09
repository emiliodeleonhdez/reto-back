const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./routes");
const db = require("./lib/db") // importa la conexión de la base de datos en .lib/db.js
const { logErrors, errorHandler } = require("./middlewares/errorHandlers");
const auth = require("./middlewares/auth")

app.use(express.json());
auth(app)
app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.use(logErrors);
app.use(errorHandler);
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

