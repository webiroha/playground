import Element from './Element';

class ElementText extends Element {
  constructor(props) {
    super(props);
    this.element.textContent = props.text;
  }
}

export default ElementText;
