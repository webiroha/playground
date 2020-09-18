import List from './List';

class ListLinkItems extends List {
  constructor(props) {
    super();
    this.lists.className = 'list';
    this.fragment = document.createDocumentFragment();
    props.map((props) => {
      this.references = document.createElement('li');
      this.link = document.createElement('a');
      this.link.textContent = props.title;
      this.link.href = props.url;
      this.references.appendChild(this.link);
      this.fragment.appendChild(this.references);
    });
    this.lists.appendChild(this.fragment);
  }
}

export default ListLinkItems;
