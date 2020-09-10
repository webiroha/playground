class Header {
  constructor(props) {
    this.fragment = document.createDocumentFragment();
    this.headText = document.createElement('h1');
    this.headText.textContent = `${props.title} practice page`;
    this.copy = document.createElement('p');
    this.copy.textContent = `Currently, trying ${props.text}`;
    this.fragment.appendChild(this.headText);
    this.fragment.appendChild(this.copy);
  }
}

export default Header;
