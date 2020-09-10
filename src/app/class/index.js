import Header from './components/Header';
import References from './components/References';
import '../../styles/main.scss';

const root = document.getElementById('root');

const fragment = document.createDocumentFragment();

// Header
const headerData = {
  title: 'class',
  text: 'class function',
};
const classHeader = new Header(headerData);
fragment.appendChild(classHeader.fragment);

// References
const refTitle = document.createElement('h2');
refTitle.textContent = 'References';
fragment.appendChild(refTitle);

const refData = [
  {
    url:
      'https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/',
    title: 'Reactive UI’s with VanillaJS – Part 2: Class Based Components',
  },
  {
    url:
      'https://stackoverflow.com/questions/41894492/how-is-object-oriented-javascript-used-for-dom-manipulation/41896245',
    title: 'How is Object Oriented Javascript used for DOM manipulation',
  },
];
const ref = new References(refData);
fragment.appendChild(ref.links);

// back home
const homeLink = document.createElement('a');
const homeLinkText = document.createTextNode('Home🏠');
homeLink.href = '../index.html';
homeLink.className = 'home-link';

homeLink.appendChild(homeLinkText);
fragment.appendChild(homeLink);

// add all fragments
root.appendChild(fragment);
