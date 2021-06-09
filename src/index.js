const loadAllComponents = require("./loadAllComponents.js")
const Component = require("./component.js")

// Hello
const Componenta = {
  "config": {},
  "components": [],
  Component,
}

window.Componenta = Componenta;
window.Component = Componenta.Component;
window.onload = function() {
  loadAllComponents();
};
