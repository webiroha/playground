import count from './count';

const button = () => {
  let number = 0;

  const fragment = document.createDocumentFragment();
  const button = document.createElement('button');
  const buttonText = document.createTextNode('count');
  const currentNumber = document.createElement('p');
  const currentNumberText = document.createTextNode(number);

  button.appendChild(buttonText);
  currentNumber.appendChild(currentNumberText);
  fragment.appendChild(button);
  fragment.appendChild(currentNumber);

  // const event = count();
  // button.addEventListener('click', () => event);

  return { fragment };
};

export default button;
