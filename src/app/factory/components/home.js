// this is a pattern of return function inside home components
const home = () => {
  const link = document.createElement('a');
  const linkText = document.createTextNode('Home🏠');
  link.href = '../index.html';
  link.className = 'home';
  link.appendChild(linkText);

  return () => link;
};

export default home;
