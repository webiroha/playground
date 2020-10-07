import Element from './Element';
import ElementText from './ElementText';
class Header {
  constructor(props) {
    this.headerBlock = new Element({ elem: 'header', class: 'header' });
    this.title = new ElementText({
      elem: 'h1',
      class: 'title',
      text: `${props.title} function`,
    });
    this.text = new ElementText({
      elem: 'p',
      class: 'copy',
      text: `This is a ${props.title} function practice!`,
    });
    this.headerBlock.element.appendChild(this.title.element);
    this.headerBlock.element.appendChild(this.text.element);
  }
}

export default Header;
