class Header {
  constructor(props) {
    this.state = {
      title: props.title,
      text: props.text,
    };
  }

  render() {
    return `
            <header>
                <h1>${this.state.title} practice page</h1>
                <p>Currently, trying ${this.state.text}</p>
            <header>`;
  }
}

export default Header;
