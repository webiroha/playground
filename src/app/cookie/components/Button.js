const Button = (name) => {
  const button = document.createElement('button');
  button.appendChild(document.createTextNode(name));
  button.type = 'button';

  const addCookie = () => {
    document.cookie = 'key=trialcookie;';
  };

  const expireCookie = () => {
    document.cookie = 'key=; expires=Thu, 01 Jan 2000 00:00:00 GMT;';
  };

  const maxCookie = () => {
    document.cookie = 'key=; max-age=0;';
  };

  switch (name) {
    case 'add':
      button.addEventListener('click', addCookie, false);
      break;
    case 'expire':
      button.addEventListener('click', expireCookie, false);
      break;
    case 'max':
      button.addEventListener('click', maxCookie, false);
      break;
  }

  return { button };
};

export default Button;
