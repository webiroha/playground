// this is a pattern of return function inside home components
const Home = () => {
  const link = document.createElement('a');
  const text = document.createTextNode('Home🏠');
  link.href = '../index.html';
  link.className = 'home';
  link.appendChild(text);

  return () => link;
};

export default Home;
