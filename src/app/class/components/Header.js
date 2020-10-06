import Element from './Element';
import ElementText from './ElementText';
class Header {
  constructor(props) {
    this.headerBlock = new Element({ elem: 'header', class: 'header' });
    this.title = new ElementText({
      elem: 'h1',
      class: 'h1',
      text: `${props.title} practice page`,
    });
    this.headerBlock.element.appendChild(this.title.element);
  }
}

export default Header;
