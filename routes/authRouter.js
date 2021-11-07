const express = require("express");
const jwt = require("../lib/jwt");
const users = require("../usecases/users");

const router = express.Router();

router.post("/", async (req, res, next) => {
  const { username, password } = req.body;

  const user = await users.getByUsername(username);

  const isMatch = await users.authenticate(user, password);

  if (isMatch) {
    const payload = {
      sub: user._id,
      role: user.role,
    };

    const token = await jwt.sign(payload);

    res.status(200).json({
      ok: true,
      message: "Sign in successful!",
      payload: {
        token,
      },
    });
  } else {
    res.status(401).json({
      ok: false,
      message: "Password missmatch",
    });
  }
});

module.exports = router;