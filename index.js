// const base_colors = require('./data/base_colors');
const colors = require('./data/colors');
const styles = require('./data/styles');
// const extras = require('./data/extras');

const base = '\x1b[0;39;49m';
const baseRegex = /(\x1b\[[0-9\;]+)(?:m)/i;
const _s = (t, x) => {
   t = !t.match(baseRegex) ? t = (base + t + base) : t;
   let seq = t.match(baseRegex)[1];
   return t.replace(seq, seq + ";" + styles[x])
};
const _f = (t, x) => {
   t = !t.match(baseRegex) ? t = (base + t + base) : t;
   let seq = t.match(baseRegex)[1];
   return t.replace(seq, seq + ";" + `38;2;${rgb(colors[x]).r};${rgb(colors[x]).g};${rgb(colors[x]).b}`)
};
const _b = (t, x) => {
   t = !t.match(baseRegex) ? t = (base + t + base) : t;
   let seq = t.match(baseRegex)[1];
   return t.replace(seq, seq + ";" + `48;2;${rgb(colors[x]).r};${rgb(colors[x]).g};${rgb(colors[x]).b}`)
};


for (const s in styles) {
	String.prototype.__defineGetter__(s, function() {
		return _s(String(this), s)
	});
};
for (const c in colors) {
	String.prototype.__defineGetter__(c, function() {
		return _f(String(this), c)
	});
	String.prototype.__defineGetter__(c + '_BG', function() {
		return _b(String(this), c)
	});
};

function rgb(hex) {
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}