class References {
  constructor(props) {
    this.state = {
      url: props.url,
      title: props.title,
    };
  }
  render() {
    return `<p class="references">References: <a href=${this.state.url} target="_blank">${this.state.title}</a></p>`;
  }
}

export default References;
