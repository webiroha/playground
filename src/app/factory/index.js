import '../../styles/main.scss';

import header from './components/header';

const factoryHeader = header('Factory function');

const root = document.getElementById('root');

const fragment = document.createDocumentFragment();

const factoryTitle = document.createElement('h1');
factoryTitle.appendChild(document.createTextNode(factoryHeader.name));

const factoryText = document.createElement('p');
factoryText.appendChild(document.createTextNode(factoryHeader.text()));

fragment.appendChild(factoryTitle);
fragment.appendChild(factoryText);

root.appendChild(fragment);
