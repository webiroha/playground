const Button = (name) => {
  const button = document.createElement('button');
  button.appendChild(document.createTextNode(name));
  button.type = 'button';
  button.className = 'button button--black cookie';

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

  const event = {
    add: reload(addCookie),
    'delete(expire)': reload(expireCookie),
    'delete(max-age)': reload(maxCookie),
  };

  button.addEventListener('click', event[name], false);

  return { button };
};

export default Button;
