const List = (title, url) => {
  const listItem = document.createElement('li');
  const link = document.createElement('a');
  const text = document.createTextNode(title);
  link.href = url;
  link.target = '_blank';

  link.appendChild(text);
  listItem.appendChild(link);

  return { listItem };
};

export default List;
