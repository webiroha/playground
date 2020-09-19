class Header {
  constructor(props) {
    this.fragment = document.createDocumentFragment();
    this.headerBlock = document.createElement('header');
    this.headerBlock.className = 'header';
    this.headText = document.createElement('h1');
    this.headText.textContent = `${props.title} practice page`;
    this.fragment.appendChild(this.headText);
    this.headerBlock.appendChild(this.fragment);
  }
}

export default Header;
