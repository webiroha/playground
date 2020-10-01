import reference from './reference';

const references = (refs) => {
  const fragment = document.createDocumentFragment();
  const title = document.createElement('h2');
  const titleText = document.createTextNode('references');

  const lists = document.createElement('ul');
  lists.className = 'list';

  title.appendChild(titleText);
  fragment.appendChild(title);
  refs.map((item) => {
    const { refTitle } = reference(item.title, item.url);
    lists.appendChild(refTitle);
  });
  fragment.appendChild(lists);

  return { fragment };
};

export default references;
