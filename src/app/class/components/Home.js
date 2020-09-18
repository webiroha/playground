class Home {
  constructor() {
    this.homeLink = document.createElement('a');
    this.homeLinkText = document.createTextNode('Home🏠');
    this.homeLink.href = '../index.html';
    this.homeLink.className = 'home';
    this.homeLink.appendChild(this.homeLinkText);
  }
}

export default Home;
