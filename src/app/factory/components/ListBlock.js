import reference from './List';

const ListBlock = (refs) => {
  const fragment = document.createDocumentFragment();
  const title = document.createElement('h2');
  const titleText = document.createTextNode('references');

  const list = document.createElement('ul');
  list.className = 'list';

  title.appendChild(titleText);
  fragment.appendChild(title);
  refs.map((item) => {
    const { listItem } = reference(item.title, item.url);
    list.appendChild(listItem);
  });
  fragment.appendChild(list);

  return { fragment };
};

export default ListBlock;
