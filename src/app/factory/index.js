import 'sanitize.css';
import '../../styles/main.scss';

import Header from './components/Header';
import ListBlock from './components/ListBlock';
import Footer from './components/Footer';
import Home from './components/Home';

const root = document.getElementById('root');
const fragment = document.createDocumentFragment();

const factoryHeader = Header('Factory function');

const refData = [
  {
    url:
      'https://medium.com/javascript-scene/javascript-factory-functions-with-es6-4d224591a8b1',
    title: 'JavaScript Factory Functions with ES6+',
  },
  {
    url:
      'https://www.theodinproject.com/courses/javascript/lessons/factory-functions-and-the-module-pattern',
    title: 'FACTORY FUNCTIONS AND THE MODULE PATTERN',
  },
  {
    url:
      'https://www.freecodecamp.org/news/playing-around-with-closures-currying-and-cool-abstractions/',
    title: 'Closures, Curried Functions, and Cool Abstractions in JavaScript',
  },
  {
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures',
    title: 'Closures - JavaScript | MDN',
  },
];

const refs = ListBlock(refData);

const factoryFooter = Footer();
// invoke home function immedietly
factoryFooter.footer.appendChild(Home()());

fragment.appendChild(factoryHeader.fragment);
fragment.appendChild(refs.fragment);
fragment.appendChild(factoryFooter.footer);

root.appendChild(fragment);
