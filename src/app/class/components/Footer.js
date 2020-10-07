import Element from './Element';
import Home from './Home';

class Footer {
  constructor() {
    this.footerBlock = new Element({ elem: 'footer', class: 'footer' });
    this.home = new Home();
    this.footerBlock.element.appendChild(this.home.link);
  }
}

export default Footer;
