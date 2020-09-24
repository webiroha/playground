import '../../styles/main.scss';

import header from '../factory/components/header';
import Button from './components/Button';

const root = document.getElementById('root');
const fragment = document.createDocumentFragment();

const cookieHeader = header('cookie');

const addButton = Button('add');
const expireButton = Button('expire');
const removeButton = Button('max');

fragment.appendChild(cookieHeader.fragment);
fragment.appendChild(addButton.button);
fragment.appendChild(expireButton.button);
fragment.appendChild(removeButton.button);

root.appendChild(fragment);
