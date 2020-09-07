class References {
  constructor(props) {
    this.state = {
      url: props.url,
      title: props.title,
    };
  }
  render() {
    return `<a href=${this.state.url} target="_blank">${this.state.title}</a>`;
  }
}

export default References;
