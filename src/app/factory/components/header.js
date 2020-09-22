const header = (name) => {
  const fragment = document.createDocumentFragment();
  const title = document.createElement('h1');
  title.appendChild(document.createTextNode(name));

  const text = document.createElement('p');
  text.appendChild(document.createTextNode(`This is a ${name} practice!`));

  fragment.appendChild(title);
  fragment.appendChild(text);

  return { fragment };
};

export default header;
