const errors = (err, req, res, next) => {
  const { message } = err;
  res.status(500).json({ message });
  console.error('Error: ', message);
};

export default errors;
