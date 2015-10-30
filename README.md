# css-vars
Collection of useful css variables

## Usage

Import the css using a preprocessor like stylecow or postcss with support for w3c variable syntax.


```css
@import "css-vars/src/icons.css";

.close-button::before {
	content: var(--ico-close);
	display: inline-block;
}
```

## Launch the demo

```
$ npm install
$ npm run-script serve
``