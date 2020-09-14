const header = (name) => {
  const text = () => `This is a ${name} practice!`;

  return { name, text };
};

export default header;
