const errors = (err, req, res, next) => {
  const { message } = err;
  res.status(500).json({ message });
  console.error('Error (MW): ', err.stack);
};

export default errors;
