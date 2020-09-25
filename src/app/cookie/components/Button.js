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

  const reload = (f) => () => {
    f();
    location.reload();
  };

  switch (name) {
    case 'add':
      button.addEventListener('click', reload(addCookie), false);
      break;
    case 'delete(expire)':
      button.addEventListener('click', reload(expireCookie), false);
      break;
    case 'delete(max-age)':
      button.addEventListener('click', reload(maxCookie), false);
      break;
    default:
  }

  return { button };
};

export default Button;
