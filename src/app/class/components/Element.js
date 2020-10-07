class Element {
  constructor(props) {
    this.element = document.createElement(props.elem);
    if (props.class) this.element.className = props.class;
  }
}

export default Element;
