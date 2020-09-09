import Header from './components/Header';
import References from './components/References';
import '../../styles/main.scss';

const root = document.getElementById('root');

// Header
const headerData = {
  title: 'class',
  text: 'class function',
};

const classHeader = new Header(headerData);

// References
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

const classReferences = new References(refData[1]);

root.innerHTML = classHeader.render() + classReferences.render();

const homeLink = document.createElement('a');
const homeLinkText = document.createTextNode('Home🏠');
homeLink.href = '../index.html';
homeLink.className = 'home-link';

homeLink.appendChild(homeLinkText);
root.appendChild(homeLink);

// class Component {
//   constructor() {
//     this.element = document.createElement('p');
//     this.element.textContent = 'Umm, class is hard...!';
//   }
// }

// const use = new Component();
// root.appendChild(use.element);
