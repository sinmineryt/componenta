const debug = require("./debug.js");

module.exports = function () {
  if (!window.Componenta) {
    throw new Error("Componenta is not initialized");
  }
  if (window.Componenta.components.length <= 0) {
    console.warn("[Componenta Warn] There are no components.");
    debug(
      "[Componenta Tip] Create your components after loading the script.\nMake sure to not use async or defer scripts!"
    );
    return false;
  }
  debug(
    "[Debug] Component length is more than 0 and window.Componenta is initialized"
  );
  window.Componenta.components.forEach(function (component) {
    debug("[Debug] Loaded component %s%o", component.name, component);
    document.querySelectorAll(component.name).forEach(function (element) {
      debug("[Debug] Found element for component%o", element);
      const e = document.createElement("div");
      e.innerHTML = component.html;
      e.setAttribute("class", component.name);
      if (e.querySelector("inner-html")) {
        e.querySelector("inner-html").remove();
        e.innerHTML += element.innerHTML;
      }
      element.outerHTML = e.outerHTML;
    });
  });
};
