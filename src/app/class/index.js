import 'sanitize.css';
import '../../styles/main.scss';

import Header from './components/Header';
import ElementText from './components/ElementText';
import ListLinkItem from './components/ListLinkItem';
import Footer from './components/Footer';

const root = document.getElementById('root');
const fragment = document.createDocumentFragment();

// Header
const headerData = { title: 'class' };
const classHeader = new Header(headerData);
fragment.appendChild(classHeader.headerBlock.element);

// References title
const refTitle = new ElementText({
  elem: 'h2',
  class: 'ref-title',
  text: 'References',
});
fragment.appendChild(refTitle.element);

// References list
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

const ref = new ListLinkItem(refData);
fragment.appendChild(ref.list);

// footer
const footer = new Footer();
fragment.appendChild(footer.footerBlock.element);

// add all fragments
root.appendChild(fragment);
