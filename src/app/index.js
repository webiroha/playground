import '../styles/main.scss';

const root = document.getElementById('root');

const fragment = document.createDocumentFragment();
const title = document.createElement('h1');
const titleText = document.createTextNode('JavaScript Playground');
const sub = document.createElement('p');
const subText = document.createTextNode(
  'This is a personal playground for strengthening basic JavaScript skills.'
);

const githubLink = document.createElement('a');
const githubLinkText = document.createTextNode('See code');
githubLink.href = 'https://github.com/webiroha/playground';
githubLink.className = 'github-link button';

const classLink = document.createElement('a');
const classLinkText = document.createTextNode('Class practice page');
classLink.href = 'class/index.html';
classLink.className = 'class-link button';

title.appendChild(titleText);
sub.appendChild(subText);
githubLink.appendChild(githubLinkText);
classLink.appendChild(classLinkText);
fragment.appendChild(title);
fragment.appendChild(sub);
fragment.appendChild(githubLink);
fragment.appendChild(classLink);
root.appendChild(fragment);
