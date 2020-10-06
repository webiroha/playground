class Element {
  constructor(props) {
    this.element = document.createElement(props.elem);
    this.element.className = props.class;
  }
}

export default Element;
