import List from './List';

class ListLinkItems extends List {
  constructor(props) {
    super();
    this.lists.className = 'list';
    props.map((props) => {
      this.references = document.createElement('li');
      this.link = document.createElement('a');
      this.link.textContent = props.title;
      this.link.href = props.url;
      this.references.appendChild(this.link);
      this.lists.appendChild(this.references);
    });
  }
}

export default ListLinkItems;
