import List from './List';

class ListItems extends List {
  constructor(props) {
    super();
    this.lists.className = 'list';
    props.map((title) => {
      this.list = document.createElement('li');
      this.list.textContent = title;
      this.lists.appendChild(this.list);
    });
  }
}

export default ListItems;
