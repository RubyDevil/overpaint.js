const colors = {
	black: 0,
	red: 1,
	green: 2,
	yellow: 3,
	blue: 4,
	pink: 5,
	cyan: 6,
	white: 7,
};

const attributes = {
	bold: 1,
	dim: 2,
	italic: 3,
	underline: 4,
	blinking: 5,
	overline: 6,
	inverted: 7,
	invisible: 8,
	strikethrough: 9,
	double_underline: 21,
};

// const colorize = (x, c, a) => `[${(a)!=null?attributes[a]:'0'};${(c)!=null?colors[c]:'39'}m${x}[0;39m`
const colorize = (x, c, a) => `\x1b[${(a)!=null?attributes[a]:'0'};${(c)!=null?colors[c]:'39'}m${x}\x1b[0;39m`;

for (const c in colors) {
	colors['bg_' + c] = String(40 + colors[c]);
	colors['light_' + c] = String(90 + colors[c]);
	colors['light_bg_' + c] = String(100 + colors[c]);
	colors[c] = String(30 + colors[c]);
};

for (const c in colors) {
	module.exports[c] = (x) => colorize(x, c, null);
	for (const a in attributes) {
		module.exports[c][a] = (x) => colorize(x, c, a);
	}
};
for (const a in attributes) {
	module.exports[a] = (x) => colorize(x, null, a)
};


const console_log = console.log;
console.log = function () {
	var args = Array.from(arguments);
	for (let i in args) {
		if(typeof args[i] == 'string') { //  /(?:\#)([A-z]+)(?:\[)(.*?)(?:\](?!\$))/
			let matches = args[i].match(/(?:\#)(black|red|green|yellow|blue|pink|cyan|white|bg_black|light_black|light_bg_black|bg_red|light_red|light_bg_red|bg_green|light_green|light_bg_green|bg_yellow|light_yellow|light_bg_yellow|bg_blue|light_blue|light_bg_blue|bg_pink|light_pink|light_bg_pink|bg_cyan|light_cyan|light_bg_cyan|bg_white|light_white|light_bg_white|bold|dim|italic|underline|blinking|overline|inverted|invisible|strikethrough|double_underline)(?:(?:\.)(black|red|green|yellow|blue|pink|cyan|white|bg_black|light_black|light_bg_black|bg_red|light_red|light_bg_red|bg_green|light_green|light_bg_green|bg_yellow|light_yellow|light_bg_yellow|bg_blue|light_blue|light_bg_blue|bg_pink|light_pink|light_bg_pink|bg_cyan|light_cyan|light_bg_cyan|bg_white|light_white|light_bg_white|bold|dim|italic|underline|blinking|overline|inverted|invisible|strikethrough|double_underline)){0,1}(?:\[)(.+?)(?:\](?!\$))/g);
			if (matches && matches.length > 0) {
				for (let j in matches) {
					var groups = matches[j].match(/(?:\#)(black|red|green|yellow|blue|pink|cyan|white|bg_black|light_black|light_bg_black|bg_red|light_red|light_bg_red|bg_green|light_green|light_bg_green|bg_yellow|light_yellow|light_bg_yellow|bg_blue|light_blue|light_bg_blue|bg_pink|light_pink|light_bg_pink|bg_cyan|light_cyan|light_bg_cyan|bg_white|light_white|light_bg_white|bold|dim|italic|underline|blinking|overline|inverted|invisible|strikethrough|double_underline)(?:(?:\.)(black|red|green|yellow|blue|pink|cyan|white|bg_black|light_black|light_bg_black|bg_red|light_red|light_bg_red|bg_green|light_green|light_bg_green|bg_yellow|light_yellow|light_bg_yellow|bg_blue|light_blue|light_bg_blue|bg_pink|light_pink|light_bg_pink|bg_cyan|light_cyan|light_bg_cyan|bg_white|light_white|light_bg_white|bold|dim|italic|underline|blinking|overline|inverted|invisible|strikethrough|double_underline)){0,1}(?:\[)(.+?)(?:\](?!\$))/);
					if (groups[2] !== undefined) {
						if (!Object.keys(colors).includes(groups[1])) 
							console_log.apply(console, [module.exports.red.bold('[ERROR]: Must start with color :'), module.exports.green.bold('#color.style[text]')]);
						else if (Object.keys(colors).includes(groups[2])) 
							console_log.apply(console, [module.exports.red.bold('[ERROR]: Cannot mix colors :'), module.exports.green.bold('#color.style[text]')]);
						else 
							args[i] = args[i].replace(groups[0], module.exports[groups[1]][groups[2]](groups[3]));
					} else {
						args[i] = args[i].replace(groups[0], module.exports[groups[1]](groups[3]));
					}
				}
			};
			args[i] = args[i].replace(/\]\$/g, '\]');
		}
	};
	console_log.apply(console, args);
};