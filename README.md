
# overpaint.js

overpaint.js is a library to facilitate colorful terminal/console outputs for javascript programs.
overpaint.js currently supports **657 colors**. [> See all Colors <](https://github.com/RubyDevil/overpaint.js/blob/main/COLORS.md) or [> See all Styles<](#styles)

## Usage

```js
const overpaint = require('overpaint.js');
// some red text
console.log("Hello World"._Red);
// some text on a red background
console.log("Hello World"._Red_BG);
// some bold & italic red text on a blue background
console.log("Hello World"._bold._italic._Red._Blue_BG);
```
*Note: Upon applying styles and colors, ONLY the last specified from each category will take effect.*
↓ Example ↓
```js
const overpaint = require('overpaint.js');
// this text is blue
console.log("Hello World"._Blue);
// this text is Red
console.log("Hello World".Blue._Red);
// this text is Blue
console.log("Hello World"._Blue._Red._Blue);
```
## Typings

overpaint.js is equipped with rich typings and autocompletion for editors like Visual Studio Code and many others

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

## Colors

Please click [HERE](https://github.com/RubyDevil/overpaint.js/blob/main/COLORS.md) to see all colors

```css
"Published on my 18th birthday"🥳
```