import '../../styles/main.scss';

import header from '../factory/components/header';
import Button from './components/Button';
import Status from './components/Status';
import home from '../factory/components/home';
import footer from '../factory/components/footer';

const root = document.getElementById('root');
const fragment = document.createDocumentFragment();

const cookieHeader = header('cookie');

const addButton = Button('add');
const expireButton = Button('delete(expire)');
const removeButton = Button('delete(max-age)');

const cookieStatus = Status();

const cookieFooter = footer();
cookieFooter.footerBlock.appendChild(home()());

fragment.appendChild(cookieHeader.fragment);
fragment.appendChild(addButton.button);
fragment.appendChild(expireButton.button);
fragment.appendChild(removeButton.button);
fragment.appendChild(cookieStatus.status);
fragment.appendChild(cookieFooter.footerBlock);

root.appendChild(fragment);
