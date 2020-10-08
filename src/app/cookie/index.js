import 'sanitize.css';
import '../../styles/main.scss';

import Header from '../factory/components/Header';
import Button from './components/Button';
import Status from './components/Status';
import Home from '../factory/components/Home';
import Footer from '../factory/components/Footer';

const root = document.getElementById('root');
const fragment = document.createDocumentFragment();

const cookieHeader = Header('cookie');

const addButton = Button('add');
const expireButton = Button('delete(expire)');
const removeButton = Button('delete(max-age)');

const cookieStatus = Status();

const cookieFooter = Footer();
cookieFooter.footer.appendChild(Home()());

fragment.appendChild(cookieHeader.fragment);
fragment.appendChild(addButton.button);
fragment.appendChild(expireButton.button);
fragment.appendChild(removeButton.button);
fragment.appendChild(cookieStatus.status);
fragment.appendChild(cookieFooter.footer);

root.appendChild(fragment);
