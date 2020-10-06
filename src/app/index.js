import 'sanitize.css';
import '../styles/main.scss';

const root = document.getElementById('root');
const fragment = document.createDocumentFragment();

// title and subtitle
const title = document.createElement('h1');
const titleText = document.createTextNode('JavaScript Playground');
const sub = document.createElement('p');
const subText = document.createTextNode(
  'This is a personal playground for strengthening basic JavaScript skills.'
);

title.appendChild(titleText);
sub.appendChild(subText);

fragment.appendChild(title);
fragment.appendChild(sub);

// for nav buttons
const practiceItems = ['class', 'factory', 'cookie'];

const nav = document.createElement('nav');
nav.className = `nav`;
const navList = document.createElement('ul');
navList.className = `nav__list`;
const navListFragment = document.createDocumentFragment();
practiceItems.map((item) => {
  const navItem = document.createElement('li');
  navItem.className = `nav__item`;
  const link = document.createElement('a');
  const linkText = document.createTextNode(`${item} practice page`);
  link.href = `${item}/index.html`;
  link.className = `button button--black`;
  link.appendChild(linkText);
  navItem.appendChild(link);
  navListFragment.appendChild(navItem);
});

navList.appendChild(navListFragment);
nav.appendChild(navList);
fragment.appendChild(navList);

// github link
const githubLink = document.createElement('a');
const githubLinkText = document.createTextNode('See code');
githubLink.href = 'https://github.com/webiroha/playground';
githubLink.className = 'button button--line';

githubLink.appendChild(githubLinkText);
fragment.appendChild(githubLink);

// add all elements to root
root.appendChild(fragment);
