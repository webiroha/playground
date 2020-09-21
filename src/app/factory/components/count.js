const count = () => {
  let number = 0;

  return () => {
    console.log(number);
    number++;
  };
};

export default count;
