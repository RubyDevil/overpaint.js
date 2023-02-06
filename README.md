# colorize.js

Colorize.js is a library to facilitate colorful terminal/console outputs for javascript programs.
Colorize.js supports the standard **8 colors** *(black, red, green, yellow, blue, pink, cyan, white)*
and **8 styles** *(bold, dim, italic, underline, strikethrough, overline, blinking, inverted, double_underline)*
[> See all Colors <](#colors-&-styles)
## Usage

You can use the colored text feature directly in the native `console.log` **(Recommended)** : 
```js
const colorize = require('colorize.js');

// #color[text]
console.log('This text is #yellow[Yellow].');

// #style[text]
console.log('This text is #bold[Bold].');

// #color.style[text]
console.log('This text is #yellow.bold[Yellow & Bold].');
```
**OR**

You can use the module's built-in functions as following :
```js
const colorize = require('colorize.js');

// color('text')
console.log(colorize.yellow('This text is yellow.'));

// style('text')
console.log(colorize.bold('This text is bold.'));

// color.style('text')
console.log(colorize.yellow.bold('This text is yellow & bold'));
```

## Colors & Styles

| Colors   | Backgrounds | Light Colors   | Light Backgrounds |
| -------- | ----------- | -------------- | ----------------- |
| `black`  | `bg_black`  | `light_black`  | `light_bg_black`  |
| `red`    | `bg_red`    | `light_red`    | `light_bg_red`    |
| `green`  | `bg_green`  | `light_green`  | `light_bg_green`  |
| `yellow` | `bg_yellow` | `light_yellow` | `light_bg_yellow` |
| `blue`   | `bg_blue`   | `light_blue`   | `light_bg_blue`   |
| `pink`   | `bg_pink`   | `light_pink`   | `light_bg_pink`   |
| `cyan`   | `bg_cyan`   | `light_cyan`   | `light_bg_cyan`   |
| `white`  | `bg_white`  | `light_white`  | `light_bg_white`  |

| Styles             |
| ------------------ |
| `bold`             |
| `dim`              |
| `italic`           |
| `underline`        |
| `blinking`         |
| `overline`         |
| `inverted`         |
| `strikethrough`    |
| `double_underline` |

## Typings

Colorize.js is equipped with rich typings and autocompletion for editors like Visual Studio Code and many others

![Typings for the "blue" color](https://i.imgur.com/oOQ6QdE.png)
![Typings for the "italic" style](https://i.imgur.com/KYLrBwC.png)
![Styles for the "blue" color](https://i.imgur.com/PFXKXNx.png)
![Autocompletion](https://i.imgur.com/nTeFVY6.png)
