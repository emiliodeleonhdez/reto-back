const jwt = require("../../lib/jwt")
const Posts = require("../../model/posts").model

const auth = {
    isLogged: async (req, res, next) => {
        try {
            const { token } = req.headers
            await jwt.verify(token)
            next()
        } catch (err) {
            res.status(403).json({
                ok: false,
                message: err.message
            })
        }
    },
    createPosts: async (req, res, next) => {
        try {
            const { token } = req.headers
            const tokenPayload = await jwt.verify(token)
            req.body.userId = tokenPayload.sub
            next()
        } catch (err) {
            res.status(403).json({
                ok: false,
                message: err.message
            })
        }
    },
    modifyPosts: async (req, res, next) => {
        try {
            const { token } = req.headers
            const { id } = req.params
            const tokenPayload = await jwt.verify(token)
            const posts = await Posts.getById(id)
            if (posts.userId != tokenPayload.sub) throw new Error("No permissions")
            next()
        } catch (err) {
            res.status(403).json({
                ok: false,
                message: err.message
            })
        }
    },
    modifyUser: async (req, res, next) => {
        try {
            const { token } = req.headers
            const { id } = req.params
            const tokenPayload = await jwt.verify(token)
            if (id != tokenPayload.sub) throw new Error("No permissions")
            next()
        } catch (err) {
            res.status(403).json({
                ok: false,
                message: err.message
            })
        }
    }
}

module.exports = auth
