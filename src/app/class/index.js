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
const refData = {
  url:
    'https://css-tricks.com/reactive-uis-vanillajs-part-2-class-based-components/',
  title: 'Reactive UI’s with VanillaJS – Part 2: Class Based Components',
};

const classReferences = new References(refData);

root.innerHTML = classHeader.render() + classReferences.render();

const homeLink = document.createElement('a');
const homeLinkText = document.createTextNode('Home🏠');
homeLink.href = '../index.html';
homeLink.className = 'home-link';

homeLink.appendChild(homeLinkText);
root.appendChild(homeLink);
