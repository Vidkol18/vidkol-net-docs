# Lesson 9 - Values and Variable

I Will use a 'Person' for the example. eg. first name, last name, age, height etc

- Value is a piece of data

```js
console.log("Jonas");
console.log(23);
```

For this example `"Jonas"` is a value. `23` is also a value.

A value is basically the smallest piece of information we have in JavaScript.

One extremely useful thing about a value is that they can be stored in variables. eg

```js
let firstName = "Jonas";
let age = 23;
```

The good thing about variable is that we can use them in multiple places.

```js
console.log(`First name: ${firstName}, Age ${age};`);

if (age >= 21) {
  console.log(`${firstName} is old enough to drink.`);
} else {
  console.log(`${firstName} is only ${age}, too young to enter this bar.`);
}
```

Also if we want to change the name, we can do that easily byt just changing the value in one place.

```js
let firstName = "Matilda";
```

### Naming Conventions

- Camel Case: Words are joined without spaces, with the first letter of each word (except the first) being uppercase. Example: `firstName` this is the standard in the JavaScript world.
- Pascal Case: Similar to camel case but all words start with an upper case. Example `FirstName`
- Kebab Case: Words are joined with a hyphen. Example `first-name`. This is often used for URLs and file names.
- Snake Case: Similar to Kebab Case but words are joined with and underscore(\_). Example `first_name` this is more popular in other languages like Ruby.

You can use any you want, just keep it consistent. Be aware that Camel Case if most common in JavaScript.

There are also some hard rules that you must also use.
You cannot start a variable with a number.

```js
let firstName = "Jonas";
//error-next-line
let 1stName = "Bob";
```
