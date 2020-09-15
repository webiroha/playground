const reference = (title, url) => {
  const refTitle = document.createElement('li');
  const refLink = document.createElement('a');
  const refLinkText = document.createTextNode(title);
  refLink.href = url;
  refLink.target = '_blank';

  refLink.appendChild(refLinkText);
  refTitle.appendChild(refLink);

  return { refTitle };
};

export default reference;
