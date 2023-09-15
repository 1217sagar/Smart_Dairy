const notFound = (req, res, next) => {
  const error = new Error(`Not Found-${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let messsage = err.messsage;

  if(err.name === 'CastError' && err.kind === 'ObjectId'){
    messsage = `Resource not found`;
    statusCode = 404;
  }

  res.status(statusCode).json({
    messsage, 
    stack: process.env.NODE_ENV === 'production' ? 'Sorry!!' : err.stack
  });
};

export { notFound, errorHandler};