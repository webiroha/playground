const Button = (name) => {
  const button = document.createElement('button');
  button.appendChild(document.createTextNode(name));
  button.type = 'button';

  const addCookie = () => {
    document.cookie = 'value=trialcookie';
  };

  const removeCookie = () => {
    document.cookie = `value=; max-age=0;`;
  };

  switch (name) {
    case 'add':
      button.addEventListener('click', addCookie, false);
      break;
    case 'remove':
      button.addEventListener('click', removeCookie, false);
      break;
  }

  return { button };
};

export default Button;
