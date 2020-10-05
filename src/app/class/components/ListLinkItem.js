import List from './List';

class ListLinkItem extends List {
  constructor(props) {
    super();
    this.list.className = 'list';
    this.fragment = document.createDocumentFragment();
    props.map((props) => {
      this.listItem = document.createElement('li');
      this.link = document.createElement('a');
      this.link.textContent = props.title;
      this.link.href = props.url;
      this.listItem.appendChild(this.link);
      this.fragment.appendChild(this.listItem);
    });
    this.list.appendChild(this.fragment);
  }
}

export default ListLinkItem;
