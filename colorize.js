const colors = {
	black: 0,
	red: 1,
	green: 2,
	yellow: 3,
	blue: 4,
	purple: 5,
	cyan: 6,
	white: 7,
}

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
}

// const colorize = (x, c, a) => `[${(a)!=null?attributes[a]:'0'};${(c)!=null?colors[c]:'39'}m${x}[0;39m`
const colorize = (x, c, a) => `\x1b[${(a)!=null?attributes[a]:'0'};${(c)!=null?colors[c]:'39'}m${x}\x1b[0;39m`

for (const c in colors) {
	colors['bg_' + c] = String(40 + colors[c])
	colors['light_' + c] = String(90 + colors[c])
	colors['light_bg_' + c] = String(100 + colors[c])
	colors[c] = String(30 + colors[c])
}

for (const c in colors) {
	module.exports[c] = (x) => colorize(x, c, null)
	for (const a in attributes)
		module.exports[c][a] = (x) => colorize(x, c, a)
}
for (const a in attributes) {
	module.exports[a] = (x) => colorize(x, null, a)
}

Object.keys(colors).forEach(style => console.log(`
export declare const ${style}: {
    (text:string): Black_Text,
    /** Globally supported */
    bold: (text:string) => Bold_Text,
    /** Globally supported */
    italic: (text:string) => Italic_Text,
    /** Globally supported */
    underline: (text:string) => Underlined_Text,
    /** Globally supported */
    strikethrough: (text:string) => Crossed_Out_Text,
    /** Rarely supported */
    dim: (text:string) => Dimmed_Text,
    /** Rarely supported (unstable) */
    overline: (text:string) => Overlined_Text,
    /** Rarely supported */
    double_underline: (text:string) => Doubly_Underlined_Text,
    /** Rarely supported */
    inverted: (text:string) => Interted_Text,
    /** Rarely supported */
    blinking: (text:string) => Blinking_Text,
    /** Rarely supported (kinda useless) */
    invisible: (text:string) => Invisible_Text
}
`))