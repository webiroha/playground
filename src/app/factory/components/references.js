import reference from './reference';

const references = (refs) => {
  const fragment = document.createDocumentFragment();
  const title = document.createElement('h2');
  const titleText = document.createTextNode('references');
  title.appendChild(titleText);
  fragment.appendChild(title);
  refs.map((item) => {
    const { refTitle } = reference(item.title, item.url);
    fragment.appendChild(refTitle);
  });

  return { fragment };
};

export default references;
