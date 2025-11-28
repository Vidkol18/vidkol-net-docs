# Lesson 8 - Linking a JavaScript File

You can write JavaScript code within the HTML file under the head section.

```html title='index.html'
<html>
  // highlight-start
  <head>
    <title>Welcome!</title>
    <script>
      let js = "amazing";
      if (js === "amazing") alert("JavaScript is FUN!");
    </script>
  </head>
  // highlight-end
  <body>
    <h1>Welcome to my site!</h1>
  </body>
</html>
```

In order to print to console you need to use.

```js
console.log("YARGEN");
```

We need to use the `console.log` in order to print into the console. Unlike in [Section 6](lesson6.md) where we just typed it out in the Developer Tools console.

Now to link the .js file to the HTML file we need to add this line at the bottom just before the body closing tag. `</body>`

```html title='index.html'
<html>
  // highlight-start
  <head>
    <title>Welcome!</title>
  </head>
  // highlight-end
  <body>
    <h1>Welcome to my site!</h1>
    <script src="path/main.js"></script>
  </body>
</html>
```

**Why at the bottom of body and not in the head?** IDK. I guess he will tell me in a later video. I hope.

**Why put the script into a separate file?** Keeps the files clean and the code easier to read.
