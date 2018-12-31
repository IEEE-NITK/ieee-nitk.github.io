---
layout: post
title: "Intro To The MapReduce Programming Paradigm"
author_github: abhinavpy
date: 2018-12-29 00:00:02
image: '/assets/img/abhinavpy.jpg'
description: 'MapReduce Paradigm'
tags:
- Parallel Computing
- Big Data Processing
- Distributed Systems
- Cloud Computing
categories:
- Compsoc
github_username: 'abhinavpy'
---

# An Intro To The MapReduce Programming Paradigm
The following blog is an attempt to explain the map-reduce programming paradigm and some of its practical appliations.
### Introduction:
Over the past few years, many computer scientists at Google have implemented hundreds of special purpose computations that process large amounts of data, such as crawled documents, web request logs, etc., to compute various kinds of derived data. to compute various kinds of derived data, such as summaries of the number of pages crawled per host, the set of most frequent queries in a given day, etc. However, the input data is large and the computations have to distributed across hundreds of thousands of machines in order to finish in a reasonable amount of time. The problem was that it was very difficult to organize this huge input data and process this data with minimalistic time.
As a reaction to this complexity, Google designed a new abstraction that allows the user to express the simple computations we were trying to perform but hides the messy details of handling this large data. It was realized that most of our computations involved a map operation to each ‘logical’ record in our input in order to compute a set of intermediate key/value pairs, and then applying a reduce operation to all the values that shared the same key, in order to combine the derived data appropriately.
### Programming Model:
The computation takes a set of **input key/value** pairs, and produces a set of **output key/value** pairs. The user of MapReduce library expresses the computation as two functions : map and reduce.
Map written by the user takes an input pair and produces a set of intermediate key/value pairs. The map reduce library groups together all intermediate values associated with the same intermediate key I and passes them to the reduce funciton.
The reduce function also written by the user, accepts an intermediate key I and a set of values for that key. It merges together these values to form a possibly smaller set of values. The intermediate values are supplied to the users reduce function via an iterator.
### Example:
Consider the problem of counting the number of occurrences of each word in a large collection of documents. The user would write code similar to the following pseudo-code:

Map function pseudocode:

     map(String key, String value):
       // key: document name
       // value: document contents
       for each word w in value:
         EmitIntermediate(w, "1");

Reduce function pseudocode:

     reduce(String key, Iterator values):
       // key: a word
       // values: a list of counts
           int result = 0;
       for each v in values:
           result += ParseInt(v);
       Emit(AsString(result));

The map function emits each word plus an associated count of occurences. The reduce function sums together all counts emitted for a particular word.
In addition, the user writes code to fill in a mapreduce specification object with the names of the input and the output files, and optional turing parameters. The user then invokes the MapReduce function, passing it the specification object. The user’s code is linked together with the map-reduce library.
### More Examples:
Here are a few simple examples of interesting programs that can be easily expressed as map reduce computations.
### Distributed Grep:
The map function emits a line if it matches a supplied pattern. The reduce function is an identity function that copies the supplied intermediate data to the output.
### Count of URL access frequency:
The map function processes logs of web page requests and outputs `<URL,1>`. The reduce funciton adds together all values for the same URL and emits a `<URL, total count>` pair.
### Reverse Web-Link Graph:
The map function outputs `<target, source>` pairs for each link to a target URL found in a page named source. The reduce function concatenates the list of all source URLs associated with a target URL and emits the pair: `<target, list(source)>`

To learn more about Map Reduce read the paper published by Google given in the references.

### References:
**Original Paper by Google**: <https://research.google.com/archive/mapreduce-osdi04.pdf>

**Cloud Computing Concepts Week 1**: <https://www.coursera.org/learn/cloud-computing/lecture/a3hCy/3-1-mapreduce-paradigm>



