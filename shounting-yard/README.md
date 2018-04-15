# Shounting-yard algorithm
A simple implementation of dijkstra shounting yard algorithm in js
[![Andrés Alonso - Shunting-yard and Postfix Calculator Algorithms](https://img.youtube.com/vi/y_snKkv0gWc/0.jpg)](https://www.youtube.com/watch?v=y_snKkv0gWc)

## Features
* convert Infix to postfix
* convert Infix to prefix

## Pre-conditions
#### <i class="icon-list"></i> We need

> - [Nodejs](https://nodejs.org/en/) >= 6.1
> - [NPM](https://www.npmjs.com/)
> - (Optional) [Yarn](https://yarnpkg.com/en/)

## Run
```
yarn start --options "infix-string"
```

**Options:**

 - postfix: pass current string argument to  postfix notation array.
 - infix: pass current string argument to  infix notation array.

## Test
```
yarn test or npm test
```
Feel free to add more test cases in test file.

## Example
```
yarn postfix "7-(5*2)+ 8 * (3/(8+9))"
```
Output:
```
$ node main.js 1 '7-(5*2)+ 8 * (3/(8+9))'
[ '7', '5', '2', '*', '-', '8', '3', '8', '9', '+', '/', '*', '+' ]
Done in 0.14s.
```

## References
> - [shounting yard wiki](https://en.wikipedia.org/wiki/Shunting-yard_algorithm)
> - [algorithm video](https://www.youtube.com/watch?v=y_snKkv0gWc)
> - [algorithm animation](https://www.youtube.com/watch?v=OVFwgYrMShw)
> - [infix to postfix examples](https://cs.nyu.edu/courses/Fall12/CSCI-GA.1133-002/notes/InfixToPostfixExamples.pdf)
