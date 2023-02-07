
# overpaint.js

overpaint.js is a library to facilitate colorful terminal/console outputs for javascript programs.
overpaint.js supports the standard **8 colors** and **10 styles**.
[> See all Colors <](#colors)
[> See all Styles<](#styles)

## Usage

You can use the colored text feature directly in the native `console.log`  **(Recommended)** :

```js
const overpaint = require('overpaint.js');

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
const overpaint = require('pastel.js');

// color('text')
console.log(overpaint.yellow('This text is yellow.'));

// style('text')
console.log(overpaint.bold('This text is bold.'));

// color.style('text')
console.log(overpaint.yellow.bold('This text is yellow & bold'));
```

## Colors

| Text     | Backgrounds | Light Text     | Light Backgrounds |
| -------- | ----------- | -------------- | ----------------- |
| `black`  | `bg_black`  | `light_black`  | `light_bg_black`  |
| `red`    | `bg_red`    | `light_red`    | `light_bg_red`    |
| `green`  | `bg_green`  | `light_green`  | `light_bg_green`  |
| `yellow` | `bg_yellow` | `light_yellow` | `light_bg_yellow` |
| `blue`   | `bg_blue`   | `light_blue`   | `light_bg_blue`   |
| `pink`   | `bg_pink`   | `light_pink`   | `light_bg_pink`   |
| `cyan`   | `bg_cyan`   | `light_cyan`   | `light_bg_cyan`   |
| `white`  | `bg_white`  | `light_white`  | `light_bg_white`  |

## Styles

| Style              | Description                              | Supported |
| ------------------ | ---------------------------------------- | --------- |
| `dim`              | Reduces thr brightness                   | *Always*  |
| `bold`             | Increases the font weight                | *Always*  |
| `italic`           | Slightly inclines the text to the right  | *Always*  |
| `inverted`         | Swaps the colors of the fore/background  | *Often*   |
| `invisible`        | Makes the text invisible                 | *Often*   |
| `blinking`         | Animates the text with a blinking effect | *Rarely*  |
| `overline`         | Draws a line above                       | *Rarely*  |
| `underline`        | Draws a line underneath                  | *Always*  |
| `strikethrough`    | Draws a line in the middle               | *Often*   |
| `double_underline` | Draws a double line underneath           | *Rarely*  |

## Typings

overpaint.js is equipped with rich typings and autocompletion for editors like Visual Studio Code and many others

![Typings for the "blue" color](https://i.imgur.com/oOQ6QdE.png)

![Typings for the "italic" style](https://i.imgur.com/KYLrBwC.png)

![Styles for the "blue" color](https://i.imgur.com/PFXKXNx.png)

![Autocompletion](https://i.imgur.com/nTeFVY6.png)

```css
"Published on my 18th birthday"🥳
```