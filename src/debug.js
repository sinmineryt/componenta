module.exports = function (message, ...logargs) {
  if (window.Componenta.config.debug) {
  	console.log(message, ...logargs)
  }
}
