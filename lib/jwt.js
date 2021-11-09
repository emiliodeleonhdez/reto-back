const jsonwebtoken = require("jsonwebtoken");

const sign = async (payload) => {
  const secret = process.env.SECRET;

  return await jsonwebtoken.sign(payload, secret);
};

const verify = async (token) => {
  const secret = process.env.SECRET;
  return await jsonwebtoken.verify(token, secret);
};

module.exports = {
  sign,
  verify,
};
