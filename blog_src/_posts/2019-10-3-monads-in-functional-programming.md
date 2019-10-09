---
layout: post
title: "What are Monads?"
author_github: adharshkamath
date: 2019-10-3 23:00:00
image: '/assets/img/'
description: 'A brief Intro to Monads in FP'
tags:
- Functional Programming
- Monads
- Functional JavaScript
categories:
- Compsoc
github_username: 'adharshkamath'
---


## Functional Programming

Functional Programming (FP) is a style of programming that performs computations mainly by evaluating mathematical functions. In FP, you describe what you want to calculate as opposed to the Imperative Programming style, where you also explain how you want it calculated.

  

Some languages that support Functional programming are Haskell, Erlang, Lisp, Python, C++ (since C++11), C#. Of these, Haskell is a purely functional language, while others have some imperative features, as well.

    

## Monads

  
  

To understand the need for monads, we need to remember that variables in FP are immutable and that no function in FP has side-effects. (side effects are anything done by the function other than calculating and returning the output).

Since in FP, everything is the output of a function, we will have to compose two functions at some point, to get the complete task done. This is where monads prove to be very useful. 
Before going to the definition of a monad, let's take a look at an example to understand monads better. (The code is written in JavaScript)

  

Suppose you have two functions `CapitalizeFirstName(name)` and `CapitalizeLastName(name)`. The functions take in a name in the format `"firstname lastname"` and return `"Firstname lastname"` and `"firstname Lastname"` respectively (No other inputs are provided). Your task is to capitalize both the first and last names in a name.

```js 
var CapitalizeFirstName = function(name) {
                     //do Some stuff
                     return(FirstNameCapitalized);
                     }

var CapitalizeLastName = function(name) {
                     //do Some stuff
                     return(LastNameCapitalized);
                     }
```



You decide to use composition and define a function for that.



```js

var  composeFunctions = function(f, g) {
    return  function(x) {
        return  f(g(x));
        };
    };
```

  

But then you decide you also want the character encoding of the string, just in case it has to be used for some other processing purposes. So you mention the encoding in another string and return it along with the nameString. Now each function is changed to:

  

```js
var CapitalizeFirstName = function(name) {   
                     //do Some stuff
                     var encoding = "utf-8"; // example
                     return (FirstNameCapitalized, encoding);
                     }
var CapitalizeLastName = function(name) {   
                     //do Some stuff
                     var encoding = "utf-8"; // example
                     return(LastNameCapitalized, encoding);
                     }
```

  

Now if we try combining the functions using

  

```js

composeFunctions(CapitalizeFirstName, CapitalizeLastName) ("test name");

```

  

we get an error. This is because the return type of `CapitalizeLastName` is not the same as the type of argument `CapitalizeFirstName` needs. One way around this problem would be to modify `composeFunctions` to supply each function with just the necessary number and type of arguments it needs.

But then we would be modifying the composing function. Instead if we choose to modify the `CapitalizeFirstName` function itself somehow to take in two strings and give two strings as output, we can still use `composeFunctions` as it is.

This would maintain the abstraction in `composeFunctions` which can be used to compose other kinds of functions as well.

Now, to change the signature of the name functions, let's define a `bind` function.

  

```js

var  bind = function(unModifiedFunction) {
    return  function(tuple) {
        var  inputName = tuple[0],
        prevEncoding = tuple[1],
        outputTuple = unModifiedFunction(inputName),
        outputName = outputTuple[0],
        outputEncoding = outputTuple[1];
        return (outputName, prevEncoding + outputEncoding);
        };
    };
```

  

Using this function now, we can compose our original functions easily.

  

```js

var composedFunction = composeFunctions(bind(CapitalizeFirstName), bind(CapitalizeLastName));

```

  

This `composedFunction` does exactly what we wanted, except for one hitch. It needs two inputs, a name, and an encoding. But we are given only one input, name. To handle this, let's define another function `unit`, which takes the input in the available format and returns it in a `bind`-friendly format.

  

```js

var  unit = function(name) {
    return (name, ' ');
    };
```

  

Now you can happily call:

  

```js

composedFunction(unit("test name"));

```



#### And that completes the monad!
  


## Definition

Now let's take a look at the formal definition of a monad, to get a more general picture. 


>A monad is a triple (`M`, `unit`, `bind`) consisting of:
>
>`M` - a type constructor
>
>`unit` - a function that performs  `x → M x`
>
>`bind` - a function that performs  `M x → (x → M y) → M y` 
>
>where `x` and `y` are types

- A type is the type of a variable or element. For example, `Int`, `Char` and `String` are all types.

- Type constructors do pretty much what you expect them to do from their names. They take in a type and construct a new type out of it.

- If a monad `M a` is thought of, as a container, the `unit` operation takes a value and wraps it in a container.

- The `bind` operation takes a function that produces a container, applies it to all values in a container, and then unwraps the nested containers.


Let's go back to the monad we defined and see if it fits the definition.
  

- Type constructor `M` : We have a new type. The tuple `(string, string)`.

-  `unit` function : We have the `unit` function which takes in a `string` and returns a tuple of type `(string, string)`.

-  `bind` function : We have a `bind` function that takes a function that produces a tuple, applies it to all values in a tuple, and then unwraps the nested tuple.
  
As we saw, a monad takes a type (`string` in our example) and wraps it into another type (`(string, string)` in our example).

So, in simple words, a monad can be used to wrap a simple type into a more useful type to fit our needs.
  
  

#### Some links related to FP for those who want to read more:

-  [Learn You a Haskell](http://learnyouahaskell.com)

-  [Functional Programming For The Rest of Us](http://www.defmacro.org/2006/06/19/fp.html)

-  [Functional Programming: What Language Should You Be Talking?](https://hackernoon.com/functional-programming-what-language-should-you-be-talking-313dd8bc379b)