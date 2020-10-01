import Header from './components/Header';
import ListLinkItems from './components/ListLinkItems';
import Footer from './components/Footer';
import Home from './components/Home';
import '../../styles/main.scss';

const root = document.getElementById('root');

const fragment = document.createDocumentFragment();

// Header
const headerData = {
  title: 'class',
};
const classHeader = new Header(headerData);
fragment.appendChild(classHeader.headerBlock);

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
const ref = new ListLinkItems(refData);
fragment.appendChild(ref.lists);

// footer
const footer = new Footer();
const home = new Home();
footer.footerBlock.appendChild(home.homeLink);
fragment.appendChild(footer.footerBlock);

// add all fragments
root.appendChild(fragment);
