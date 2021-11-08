const Auth = require("../filters/auth")

const auth = app => {
    app.post("/posts", Auth.createPosts)
    app.patch("/posts/:id", Auth.modifyPosts)
    app.delete("/posts/:id", Auth.modifyPosts)
    app.get("/users/:id", Auth.isLogged)
    app.patch("/users/:id", Auth.modifyUser)
}

module.exports = auth
