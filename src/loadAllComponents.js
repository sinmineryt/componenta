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
