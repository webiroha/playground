class Home {
  constructor() {
    this.link = document.createElement('a');
    this.text = document.createTextNode('Home🏠');
    this.link.href = '../index.html';
    this.link.className = 'home';
    this.link.appendChild(this.text);
  }
}

export default Home;
