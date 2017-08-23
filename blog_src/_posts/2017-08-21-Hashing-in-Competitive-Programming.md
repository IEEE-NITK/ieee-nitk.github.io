---
layout: post
title: "Hashing in Competitive Programming"
author_github: somnathsarkar
date: 2017-08-21 19:40:58
image: '/assets/img/'
description: 'A look at hashing and its role in Competitive Programming'
tags:
- Hashing
- C++
- Competitive Programming
- Data Structures
categories:
- CompSoc
github_username: 'somnathsarkar'
comments: true
---

## Introduction
At it's most basic hashing is a technique to identify a particular value of a certain type among other values of the same type. To achieve this we typically make use of a hash function: a function that takes a value of the required type as input and generates a "key" that (hopefully) can uniquely identify this value. In this article we'll look at how this function works, how it's implemented in C++, and how to apply hashing to solve a Competitive Programming problem.

## Hashing in C++
C++ offers 2 containers in C++ that are often useful for hashing problems: map and unordered map. Both containers store elements in a "mapped fashion": we associate a key value to a mapped value, typically (but not necessarily) of a different data type. Out of these two the unordered map is the one that is typically implemented using a traditional hash function whereas the map represents a balanced binary search tree.

### std::map
	1. Implemented with red-black tree.
	2. Elements are sorted.
	3. Small memory usage.
	4. O(log N) lookup time.

### std::unordered_map
	1. Implemented with a hash function
	2. Elements are not sorted.
	3. Requires additional memory to keep the hash-table.
	4. Lookup is usually O(1), dependent on hash function.

### Why use std::map over std::unordered_map?
A quick look at the comparison between the two containers gives us the impression that we should use std::unordered_map in most cases (except those where we require a sorted traversal through all keys), and we would be right to do so normally. After all, O(1) lookup and insertion is a lot more appealing than the O(log N) operations of std::map. However, there are a few things to keep in mind. Namely that the worst-case runtime of unordered_map is O(N) not O(1). This is because of how it is implemented. As we'll see later, hash functions have a chance of "colliding"; that is, two distinct inputs to the hash function give the same output. This causes the unordered_map to store the associated values corresponding to these colliding keys in a list. In the worst case, when all keys collide, the lookup time for each key is O(N).

For more:

[1](http://codeforces.com/blog/entry/44731)
[2](http://codeforces.com/blog/entry/4898)

## A hash function
Let's look at the case where we need to map a string to an integer: we need to take care of the distinct characters present in the string as well as their position in the string. A common strategy is to take the ASCII value of each character and multiply it by a prime p to the power of the index of the character. In order to ensure it fits in a C++ variable we typically take the hash mod a large prime M.

![Hashing](stringhashing.png)

## Looking at a problem
Let's try and apply the hashing technique to a competitive programming problem
https://www.codechef.com/COOK82/problems/COOK82D
We are given a graph with a list of edges from 1 ... M. The queries are of the form [L, R]. For each query we look at the graph containing all the edges numbered from L to R. We need to determine whether all the connected components of such a graph have Euler cycles. The answer will then be "YES" if all vertex degrees are even, and "NO" otherwise. A naïve solution would be to store the parity of each vertex of the graph for all edges from 1 ... X, for all X from 1 to M. Using these prefix parity values we can say the answer for a range L to R is "YES" when pref[R] = pref[L-1] and "NO" otherwise. Memory use here is O(N^2) and query time is O(N). This can be improved by storing each prefix parity value as a hash. In the above expression Si = 0 if degree of ith vertex is even and 1 otherwise. This reduces memory use to O(N) and query time to O(1).