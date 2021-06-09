(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
module.exports = function (message, ...logargs) {
  if (window.Componenta.config.debug) {
  	console.log(message, ...logargs)
  }
}

},{}],3:[function(require,module,exports){
const debug = require("./debug.js")

module.exports = function() {
  if (!window.Componenta) {
  	throw new Error("Componenta is not initialized")
  }
  if (window.Componenta.components.length <= 0) {
  	console.warn("[Componenta Warn] There are no components.")
  	debug("[Componenta Tip] Create your components after loading the script.\nMake sure to not use async or defer scripts!");
    return false;
  }
  debug("[Debug] Component length is more than 0 and window.Componenta is initialized");
  window.Componenta.components.forEach(function (component) {
    debug("[Debug] Loaded component %s%o", component.name, component);
  	document.querySelectorAll(component.name).forEach(function (element) {
	  debug("[Debug] Found element for component%o", element);
  	  element.innerHTML = component.html;
      element.outerHTML = `<div class="${component.name}">${element.innerHTML}</div>`;
      debug("[Debug] Successfully added component %s to DOM", component.name)
  	});
  });
}

},{"./debug.js":2}],4:[function(require,module,exports){
const loadAllComponents = require("./loadAllComponents.js")
const Component = require("./component.js")

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

},{"./component.js":1,"./loadAllComponents.js":3}]},{},[4]);
