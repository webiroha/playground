const Status = () => {
  const status = document.createElement('p');
  const text = document.cookie || 'none';
  status.appendChild(document.createTextNode(text));

  return { status };
};

export default Status;
