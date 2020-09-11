class List {
  constructor(props) {
    this.links = document.createElement('ul');
    this.links.className = 'list';
    props.map((props) => {
      this.references = document.createElement('li');
      this.link = document.createElement('a');
      this.link.textContent = props.title;
      this.link.href = props.url;
      this.references.appendChild(this.link);
      this.links.appendChild(this.references);
    });
  }
}

export default List;
