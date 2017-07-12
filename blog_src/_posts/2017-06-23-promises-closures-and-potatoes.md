---
layout: post
title: "Promises, Closures and Potatoes"
author_github: viggi-v
date: 2017-06-23
image: '/assets/img/'
description: 'A very basic introduction to some lesser explored stuff in javascript'
tags:
- JavaScript
- Programming
categories:
- CompSoc
github_username: 'viggi'
comments: true
---
# Promises, Closures and Potatoes.

Well this article is mainly about Promises and Closures, two concepts that
most of us don't really care about in the beginning, but in reality, we have been
using it a lot. "Promises and Closures" wouldn't sound cool so I thought of slightly innovative title.

## So what are promises?
They are not new, and they are pretty popular for a long time.
![image1](/blog/assets/img/promises-closures-and-potatoes/image1.png)
Promises gives you this feature of asynchronous nature in the code. It actually lets a third agent interact with your code: let's take a small example.
Assume that we are doing a function `getTextFromFile()` which will take unpredictable time.
```
    function getTextFromFile(fileEvent){
                var input = fileEvent.target;

                var reader = new FileReader();
                reader.onload = function(){
                    var text = reader.result;
                    return text;
                };
                reader.onerror = function(){
                    console.log(Error(reader.error));
                }
                reader.readAsText(input.files[0])
            }
```
This method would not let you really specify the actions to be done on file read externally. It just returns the text, and it could actually take unpredictable time,
such that the following snippet may not work the right way:
```
    var myText = getTextFromFile(fileEvent);
    console.log(myText);
```
The same applies for AJAX requests or any other asynchronous event.
So we have a much better way of dealing this: using a **promise**.
All promises need not be fulfilled, it could be **resolved** or it could be **rejected**.
It could take some time to **resolve**/**reject** a promise, and either way it would be **settled** :).
Let's rewrite the `getTextFromFile()` :
```
    function getTextFromFile(fileEvent){
        return new Promise(function(resolve,reject){
            var input = fileEvent.target;
            var reader = new FileReader();
            reader.onload = function(){
                resolve(reader.result);
            };
            reader.onerror = function(){
                reject(Error(reader.error));
            }
            reader.readAsText(input.files[0])
        });
    }
```
now we can use this function to handle file read much better way:
```
    getTextFromFile(fileEvent).then(function(text){
        // yaay! I did it!
        console.log(text);
    }).catch(function(error){
        // oops! something went wrong.
        console.log(error);
    })
```
So you have the anonymous functions in `.then` and `.catch` to work asychronously, ie they will wait for the promise to resolve/reject.
Promises are much more flexible, and they could be chained.
```
    function middleGuy(text){
        return new Promise(function(resolve){
            console.log("Hello from the middle guy!");
            // just to show that this could be done.
            resolve(text);
        });
    }
```
 and boom! we can do this:
```
    getTextFromFile(fileEvent)
        .then(middleGuy)
        .then(function(text){
            // yaay! I did it!
            console.log(text);
        }).catch(function(error){
            // oops! something went wrong.
            console.log(error);
        });
```
[This](https://gist.github.com/viggi-v/cf996ad839a7b9525dc0e1ea89d45346) is a simple demo of promises with the above code.



There are plenty of resources out there for Promises,
and my favourite ones are:
* [Scotch Blog](https://scotch.io/tutorials/javascript-promises-for-dummies)
* [Article by Jake Archibald](https://developers.google.com/web/fundamentals/getting-started/primers/promises)

## Closures

Closures were this one tricky thing in the beginning for me, and quoting *Rohit Varkey*, batch of '16,
> It (closures) guarantees you no side effects. Plus this way you have everything you need that is used in the function wrapped along with it. No ugly global changes that could **** everything up. This leads to interesting things like lazy evaluation, loop fusion and even easier process migration.

This was about closures in a general perspective, but from the view of a js developer like me, this offers a scope that persists just for my function.
An example would be, (from w3Schools)
```
    var add = (function () {
        var counter = 0;
        return function () {
            return counter += 1;
            }
    })();

    add(); // prints 1
    add(); // prints 2
    add(); // prints 3
    // counter is not accessible here.
```

a good set of resources would be:
* [W3 Schools](https://www.w3schools.com/js/js_function_closures.asp)
* [Medium article by Eric Elliott](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
