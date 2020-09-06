import '../../styles/main.scss';

const root = document.getElementById('root');

const fragment = document.createDocumentFragment();
const title = document.createElement('h1');
const titleText = document.createTextNode('Class practice page');
const sub = document.createElement('p');
const subText = document.createTextNode('ongoing');
const homeLink = document.createElement('a');
const homeLinkText = document.createTextNode('home');
homeLink.href = '../index.html';
homeLink.className = 'home-link';

title.appendChild(titleText);
sub.appendChild(subText);
homeLink.appendChild(homeLinkText);
fragment.appendChild(title);
fragment.appendChild(sub);
fragment.appendChild(homeLink);
root.appendChild(fragment);
