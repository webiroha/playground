import '../../styles/main.scss';

import header from './components/header';
import references from './components/references';
import countButton from './components/countButton';
import footer from './components/footer';
import home from './components/home';

const factoryHeader = header('Factory function');

const root = document.getElementById('root');

const fragment = document.createDocumentFragment();

const factoryTitle = document.createElement('h1');
factoryTitle.appendChild(document.createTextNode(factoryHeader.name));

const factoryText = document.createElement('p');
factoryText.appendChild(document.createTextNode(factoryHeader.text()));

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
];

const refs = references(refData);

// count button by closure
const button = countButton();

const factoryFooter = footer();
// invoke home function immedietly
factoryFooter.footerBlock.appendChild(home()());

fragment.appendChild(factoryTitle);
fragment.appendChild(factoryText);
fragment.appendChild(refs.fragment);
// fragment.appendChild(button.fragment);
fragment.appendChild(factoryFooter.footerBlock);

root.appendChild(fragment);
