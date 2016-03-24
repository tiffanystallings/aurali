var Engine = (function(global) {
	var doc = global.document,
		win = global.window,
		canvas = doc.createElement(canvas),
		ctx = canvas.getContext('2d'),

		pauseGame = false,
		lastTime;

	canvas.width = Screen.w;
	canvas.height = Screen.h;

	function main() {

	}
})(this);

var Screen = function(w, h) {
	this.w = w;
	this.h = h;
};