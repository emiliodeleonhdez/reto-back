const userRouter = require("./userRouter");
const authRouter = require("./authRouter");
const postRouter = require("./postRouter");

const apiRouter = (app) => {
  app.use("/users", userRouter);
/*   app.use("/auth", authRouter);
  app.use("/posts", postRouter); */
};

module.exports = apiRouter;
