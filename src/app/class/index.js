import Header from './components/Header';
import ListLinkItems from './components/ListLinkItems';
import Home from './components/Home';
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
refTitle.className = 'sub-title';
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
const ref = new ListLinkItems(refData);
fragment.appendChild(ref.lists);

// back home
const home = new Home();
fragment.appendChild(home.homeLink);

// add all fragments
root.appendChild(fragment);
