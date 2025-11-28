---
sidebar_position: 6
---

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
- Snake Case: Words are joined with an underscore(\_). Example `first_name` this is more popular in other languages like Ruby.

There are also some hard rules that you must also use.
You cannot start a variable with a number. HOWEVER it can contain numbers.

```js
let firstName = "Jonas";
let name1 = "Matilda";
//error-next-line
let 1stName = "Bob";
```

Variables can only contain numbers, letters, underscore or dollar ($)

For example if I do `let jonas&bob = "JB";` it will error out with a SyntaxError. It would be best to use underscore `let jonas_bob = "JB";`

Other syntax errors could be that you used a [Reserved Keyword](https://www.w3schools.com/js/js_reserved.asp) as your variable name.

```js
//error-next-line
let new = "New Car";
```

Another convention is you should never start a variable with an uppercase letter. It not illegal. its just we use this for a specific case which is Object-Oriented Programming (More in later Lessons).

Variable that are in all Uppercase are reserved for constants (Variable that do not change). eg

```js
let PI = 3.1415;
```

For the final convention make sure your name is descriptive. It help you understand your code better when you comeback to it.

### Summarize

A `variable` is a named box that we can store a `value` in.
