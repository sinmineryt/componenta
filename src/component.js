class Component {
  constructor(name) {
    this.name = name;
    this.html();
	const pushedThis = {
	  ...this,
	  html: this.html()
	}
    window.Componenta.components.push(pushedThis)
  }
}

module.exports = Component;
