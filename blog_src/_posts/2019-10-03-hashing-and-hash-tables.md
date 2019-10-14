---
layout: post
title: "Hashing and Hash Tables"
author_github: niranjansy
date: 2018-10-06 23:00:00
image: '/assets/img/'
description: 'This article gives an introduction to how hash tables are implemented in programming languages'
tags: 
- Hashing
- Algorithms 
categories:
- CompSoc
github_username: 'niranjansy'
---

## Introduction
 
> Hashing is the transformation of a string of characters into a usually shorter fixed-length value or key that represents the original string. Hashing is used to index and retrieve items in a database because it is faster to find the item using the shorter hashed key than to find it using the original value. 

Hashing is a very powerful technique with a wide variety of applications. In most of the programming languages, there are built-in data types of data structures in the standard library that are based on hash tables (we will see later what they mean), like dict or dictionary in Python, or HashMap in Java, or the STL map in C++.

Applications of hash tables are plenty. Take the file system in a computer for example. When you interact with a file system as a user, you see the file name and the path to the file. But to actually store the correspondence between the file name and path, and the physical location of that file on the disk, the system uses a map, and that map is usually implemented as a hash table.

Another example is password verification. When you use some web service and type your password to log into it, the password cannot be sent in clear text through the network to the server to check if it’s the right password, because that message could be intercepted and misused. Instead, a hash value of the password is computed and is sent to the server. The server compares that hash value with the hash value of the stored password. And if those match, you get authenticated.

Let us begin to see the need for hashing and understand its implementation using a simple real world example.

### Analysing Service Access Logs

Suppose we are hosting a web service and there are many clients trying to access the service over the internet. When someone accesses the web service, the IP address of the computer accessing the service will be known and this information will be stored in a file called the access log. We then may want to answer queries like:
* How many times was the service accessed from a particular IP in the last hour?
* How many IP’s were used to access the service in the last hour?
To answer such questions, we will have to do log processing. Of course, it will not be feasible to search through a whole hour of logs each time the query is made, since the logs may contain thousands or even millions of lines. So we keep a count of the number of times the service was accessed by each IP. For this we need a mapping from IP addresses to counters. Let us see how we can implement this. 

#### Direct Addressing

An IP address consists of four 8-bit integers (i.e. in the range 0-255) separated by dots. Thus there can be a total of 2<sup>32</sup> different IP addresses and so we can convert each IP into a 32-bit integer with a one-to-one mapping. This can be done using the following formula: 

![Formula](/blog/assets/img/Hashing-and-hash-tables/IP_Formula.JPG)

We can create an array A of size 2<sup>32</sup>, where *A[i]* stores the number of times the service was accessed from the IP address, which corresponds to the integer *i*, in the last hour. The following pseudocode implements this idea:

```
/*
Log is the array of log lines to be processed, having pairs (time, IP)
C is array of counters, of size 2^32
i - index of first unprocessed log line
j - index of oldest line in the current 1 hour window
*/

// This function is called every second
UpdateAccessList(Log, i, j, C):  
// counter incremented for all IPs that accessed service at this instant
// Now() gives the current time
    while Log[i].time <= Now():
        C[int(Log[i].IP)] = C[int(Log[i].IP)] + 1
        i = i + 1
// counter decremented for all IPs that had accessed service an hour back
    while Log[j].time <= Now() - 3600:
        C[int(Log[j].IP)] = C[int(Log[j].IP)] - 1
        j = j - 1
```

Using this data structure *C*, we can answer all of the above queries conveniently in constant time. But this method has a disadvantage. Even if only a few IPs accessed service, we need to store memory for all the 2<sup>32</sup> possible IP addresses. This wastes a lot of memory. Also we might get instances where the number of objects to be mapped is much more than the memory capacity of the computer, for example mapping all possible strings in the English alphabet. In such cases, this method is not at all feasible, and we need a different method to store the mappings.

#### List Based Mapping

In the previous method of direct addressing, we saw that we stored all possible IPs and this requires too much memory. So one way of solving this is to store only the active IPs, i.e. only the IPs that have accessed service in the last hour. We can implement this using a linked list, sorted in the order of the time of access. Every time an IP becomes active, we append it to the end of the linkd list, and the IPs that are at the beginning of the list, which were accessed more than an hour ago, are removed.

```
// L - Linked list, whose each node is the pair (time, IP)
UpdateAccessList(Log, i, L):  
// All IPs that accessed service at this instant are appended at the end of the list
    while Log[i].time <= Now():
// Append() function adds a node at the end of the list
        L.Append(Log[i])
        i = i + 1
// IPs that had accessed service an hour back are popped from the front of the list
// Top() returns the node at the beginning of the linked list
// Pop() removes the front node from the linked list
    while L.Top().time <= Now() - 3600:
        L.Pop()
```
The above method is memory efficient since we are storing only those IPs that are currently active. But there is a cost in this too. Let *n* be the number of currently active IPs. Memory usage is *O(n)*. But if we want to find if a certain IP accessed the service in the last hour, or count the number of times service was accessed from an IP, we have no choice but to traverse the entire linked list, and thus the time complexity becomes *O(n)*. This is no good since we can do the same operations in *O(n)* time without any additional data structure, by just traversing the access logs. 

However, we shall see that by combining the above two methods, we can come up with an efficient implementation.

## Hash Functions

A hash function is any function that can be used to map a data set of an arbitrary size to a data set of a fixed size. The values returned by a hash function are called hash values, hash codes, hash sums, or simply hashes.

> For any set of objects *S* and any integer *m>0*, a function *h : S --> {0, 1, 2, ... m-1}* i.e., any function that encodes every object in *S* with an integer from *0* to *m-1*, is called a *hash function*. 
> *m* is called the cardinality of the hash function *h*.

> **Collisions** : For any two objects *O<sub>1</sub>* and *O<sub>2</sub>*, where *O<sub>1</sub>* is not the same as *O<sub>2</sub>*, when *h(O<sub>1</sub>) = h(O<sub>2</sub>)*, then it is called a collision. 

**Desirable Properties of a Hash Function**
* Easy to compute: It should be easy to compute and must not become an algorithm in itself.
* Uniform distribution: It should provide a uniform distribution across the hash table and should not result in clustering.
* Less collisions: Different values should be assigned for different objects. 

**Note**: Irrespective of how good a hash function is, collisions are bound to occur. Therefore, to maintain the performance, it is important to manage collisions through various collision resolution techniques.

Now let us define maps and hash tables:

> A map from a set of objects S to a set of values V is a data structure with the methods:
> * HasKey(O) : Returns whether there is an entry in the map, corresponding to the object O. 
> * Get(O) : Returns the value corresponding to the object O.
> * Set(O, v) : Sets the value corresponding to the object O to v.

> A *hash table* is a data structure that implements a map (or even just a set of objects without any mapping) using *hash functions*.

We shall now look at a few implementations of hash tables.

## Chaining (Open Hashing)

Let us first choose any hash function *h* of cardinality *m*. In chaining, we create an array of size *m*, where each element of the array is a linked list of pairs - an object *O* and its mapped value *v*. For inserting any object *O* and its mapped value *v* into the hash table, we first calculate the hash value of the object *O* using the hash function *h*. Then we go to the array index corresponding to the hash value, and append the pair *(O,v)* to the end of the linked list at that index.

![Chaining](/blog/assets/img/Hashing-and-hash-tables/Chaining1.JPG)

Let us consider our previous example of mapping IP addresses to counters. Let us assume a hash function of cardinality 8, and suppose that hash function gives the following values for certain IP addresses that are accessing the service. Then the chaining will look like: 

![Chaining](/blog/assets/img/Hashing-and-hash-tables/Chaining2.JPG)

We will now see the pseudocode for implementing a hash table using chaining.

```
/*
Assume a hash function h : S --> {0, 1, 2, ... m-1}
Let O be an object in S and V be a mapped value
A is the array of m lists(chains) of pairs (O,V)
*/
HasKey(O):
// We calculate the hash value of O and go to the corresponding chain in the array 
    L = A[h(O)]
// Searching through the linked list for the given object
    for all pairs (o, v) in L:
        if o == O:
            return true
    return false

Get(O):
    L = A[h(O)]
    for all pairs (o, v) in L:
        if o == O:
            return v
    return n/a

Set(O, V):
    L = A[h(O)]
    for all pairs (o, v) in L:
        if o == O:
            v = V
            return
    L.Append(O, V)
```

**Complexity Analysis of Chaining :**
Let *c* be the length of the longest chain in *A*. Then the run-time of all the above operations will be *O(c+1)*.
Let *n* be the number of different keys currently in the map and *m* be the cardinality of the hash function. Then the memory consumption for chaining is *O(n+m)*.

Therefore to optimize the procedure, we need to choose hash functions such that *m* and *c* are as low as possible.

### Linear Probing (Open Addressing or Closed Hashing)

In open addressing, instead of in linked lists, all entry records are stored in the array itself. When a new entry has to be inserted, its hash value is computed. If the slot corresponding to this value in the array is unoccupied, then the entry record is inserted in this slot. Otherwise we examine the array starting from that position in some probe sequence until we find an unoccupied slot. The probe sequence is the sequence that is followed while traversing through entries. In different probe sequences, you can have different intervals between successive entry slots or probes. 

Linear probing is when the interval between successive probes is fixed (usually to 1).  Let’s assume that the hash value for a particular entry is *val*. Then the probing sequence for linear probing will be:<br>
*index* = *val* % *m*<br>
*index* = (*val* + 1) % *m*<br>
*index* = (*val* + 2) % *m*<br>
*index* = (*val* + 3) % *m*<br>

Of course, this method works only if the number of keys to be stored in the hash table is less than or equal to the size of the hash table.

**Implementation of Linear Probing :**

```
/*
Suppose we are using linear probing to store a set of objects in a hash table.
Let h be a hash function of cardinality m
Let A be an array of size m
*/
// Inserting an object O
insert(O):
    val = h(O)
// Search for an unused slot and if val exceeds m then roll back
    while A[val] is not empty:
        val = (val + 1) % m
    A[val] = O

// To check if an object O is present in the hash table
search(O):
    val = h(O)
    while A[val] is not empty and A[val] is not equal to O:
        val = (val + 1) % m
// Check if the element is present in the hash table
    if A[val] == O:
        return true
    else
        return false
```

## Choosing a Hash Function

Let us once again look at the chaining procedure to implement hash tables. We saw that we can optimize the hash table by choosing appropriate hash functions so that *c* is minimized i.e., the chain length should be minimized, so that for any given input object, we can access it from the hash table in as little time as possible. But then, for any hash function that we choose with *|S| >> m* (where S is the set of objects), there will exist a bad input resulting in a lot of collisions. At the same time, we also cannot choose a large value of *m*, since it requires too much space.

To solve this problem, we can use randomization. We define a whole set of hash functions, called a family of hash functions. We then choose a random function from this family to use in our algorithm. Such a family of hash functions is called a universal family, if for any two objects *x* and *y*, on choosing a random hash function from the family, the probability of collision for *x* and *y* is very low. For any algorithm that we want to implement, we choose a random function from this family, and use that same function throughout our algorithm. By doing this, on average, we reduce the probablity of collisions, and thus we get a hash table with very small chain lengths, and operations on such a hash table take place in close to constant time. 

Let us see one such universal family for hashing integers. 

Suppose that we want to hash 6-digit roll numbers of students, i.e., the upper bound on our set of integers in 10<sup>6</sup>. We choose a big prime number *p > 10<sup>6</sup>* and cardinality of hash functions *m*. Then let us define a family of hash function as follows:

> *H = { h(x) = ((ax + b)%p)%m }* for all *a*, *b* such that *1<=a<=p* and *0<=b<=p*
For different values of *a* and *b* subject to the above constraints, we get different hash functions belonging to the family.

Let us now try hashing certain roll numbers using this family : Choose *p* = 1000003 (a prime number) and *m* = 1000

Let *a* = 150, *b* = 55
* roll = 181024 : h(181024) = ((181024*150 + 55) % 1000003) % 1000 = 574
* roll = 181365 : h(181365) = ((181365*150 + 55) % 1000003) % 1000 = 724

Let *a* = 1234, *b* = 100
* roll = 181024 : h(181024) = ((181024*1234 + 100) % 1000003) % 1000 = 47
* roll = 181365 : h(181365) = ((181365*1234 + 100) % 1000003) % 1000 = 841

## Applications of Hashing

* Associative arrays: Hash tables are commonly used to implement many types of in-memory tables. They are used to implement associative arrays (arrays whose indices are arbitrary strings or other complicated objects).
* Database indexing: Hash tables may also be used as disk-based data structures and database indices (such as in dbm).
* Caches: Hash tables can be used to implement caches i.e. auxiliary data tables that are used to speed up the access to data, which is primarily stored in slower media.
* Object representation: Several dynamic languages, such as Perl, Python, JavaScript, and Ruby use hash tables to implement objects.

## References

* [https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)

For more information on hash functions and universal families, refer:
* [https://en.wikipedia.org/wiki/Universal_hashing#Hashing_integers](https://en.wikipedia.org/wiki/Universal_hashing#Hashing_integers)
* [http://cs-www.bu.edu/faculty/homer/537/talks/SarahAdelBargal_UniversalHashingnotes.pdf](http://cs-www.bu.edu/faculty/homer/537/talks/SarahAdelBargal_UniversalHashingnotes.pdf)