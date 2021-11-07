const express = require("express");
const app = express();
const port = 8000;
const apiRouter = require("./routes");
const db = require("./lib/db") // importa la conexión de la base de datos en .lib/db.js
const { logErrors, errorHandler } = require("./middlewares/errorHandlers");
const User = require("../../models/users");
const encrypt = require("../../lib/encrypt");

app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello World!");
});

apiRouter(app);
app.use(logErrors);
app.use(errorHandler);




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

const create = async (userData) => {
  const { firstName, lastName, username, password, email, role } = userData;

  const hash = await encrypt.hashPassword(password);

  const user = new User.model({
    firstName,
    lastName,
    username,
    password: hash,
    email,
    role,
  });
  return await user.save();
};

const getByUsername = async (username) => {
  return await User.model.findOne({ username }).exec();
};

const authenticate = async (user, password) => {
  const hash = user.password;

  return await encrypt.verifyPassword(password, hash);
};


module.exports = {
  create,
  getByUsername,
  authenticate,
};