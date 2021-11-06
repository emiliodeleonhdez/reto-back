const logErrors = (err, req, res, next) => {
    console.error(err.message, err);
    next(err);
  };
  
  const errorHandler = (err, req, res, next) => {
    jsonResponse = {
      ok: false,
      message: err.message,
    };
  
    res.status(500).json(jsonResponse);
  };
  
  module.exports = { logErrors, errorHandler };