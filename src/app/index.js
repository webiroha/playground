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

title.appendChild(titleText);
sub.appendChild(subText);
githubLink.appendChild(githubLinkText);

fragment.appendChild(title);
fragment.appendChild(sub);
fragment.appendChild(githubLink);

const practiceItems = ['class', 'factory', 'cookie'];

const links = document.createElement('ul');
const linksFragment = document.createDocumentFragment();
practiceItems.map((item) => {
  const list = document.createElement('li');
  const link = document.createElement('a');
  const linkText = document.createTextNode(`${item} practice page`);
  link.href = `${item}/index.html`;
  link.className = `${item}-link button`;
  link.appendChild(linkText);
  list.appendChild(link);
  linksFragment.appendChild(list);
});

links.appendChild(linksFragment);
fragment.appendChild(links);

root.appendChild(fragment);
