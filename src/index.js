import './styles/style.css';

const root = document.getElementById('root');

const fragment = document.createDocumentFragment();
const title = document.createElement('h1');
const titleText = document.createTextNode('JavaScript Playground');
const sub = document.createElement('p');
const subText = document.createTextNode(
  'This is a playground for strengthening basic JavaScript skills.'
);

title.appendChild(titleText);
sub.appendChild(subText);
fragment.appendChild(title);
fragment.appendChild(sub);
root.appendChild(fragment);
