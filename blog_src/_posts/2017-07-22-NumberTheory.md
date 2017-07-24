---
layout: post
title: "Number Theory"
author_github: adithyabhatkajake
date: 2017-07-23 10:48:33
image: '/assets/img/'
description: 'Number Theory'
tags:
- Number Theory
- Group
- Ring
- Rng
- Field
- Finite Field
- Galois Field
categories:
- CompSoc
github_username: 'adithyabhatkajake'
comments: true
use_math: true
---
 

# The Mathematics of 1,2,3, ...

## Number Theory

Number theory is a field of mathematics that deals with the study of numbers and their properties. It is just like how chemists study different elements, their reactivity, their compounds, etc, in number theory mathematicians boil numbers, titrate them, react with numbers and form number complexes (complex numbers).

### Group

A group is a set of elements $G = \{...\}$ and an operation $#$. For G to be called a Group with respect to $#$, it must satisfy the following four group axioms or conditions:
- Closure: For any $x$,$y$ $\in G$, $x$ $#$ $y$ $\in G$
- Associativity: If $x$, $y$, $z$ $\in G$, then ($x$ $#$ $y$) $#$ $z = x$ $#$ ($y$ $#$ $z$)
- Identity: $\exists e \in G$ such that for any $x \in G$,  $x$ $#$ $e = e$ $#$ $x$ = $x$ 
- Invertibility: For every $x \in G$, there must exist an element $x^{-1}$ or $y \in G$ such that, $x$ $#$ $y = y$ $#$ $x = e$, where $e$ is the identity element.

Integers form a group with the operation of addition. Let us check to see if they follow the rules of the Group Axioms:
- Closure: For any two integers a and b, a+b is also an integer.
- Associativity: Obviously
- Identity: 0 is the identity integer
- Invertibility: For every integer a, -a is also an integer and a + (-a) is 0.

** Note that, group operations need not be commutative. **

The order of a group $G$, is the number of elements in the set $G$.

There are many interesting Groups in nature. Some of them are called symmetric groups and abelian groups. Let us discuss them one by one.


#### Symmetric Groups

In general, symmetric groups are defined on a set $X$ and the group elements consist of bijective functions defined from X to X and the group operation is composition of functions. 

Let us take two elements in the group. Each element is a bijective function from X to X. Let $f$ and $g$ be two such functions.

Now, $f:X\rightarrow X$ and $g:X \rightarrow X$.

Consider the composition of f and g, $g o f:X \rightarrow X$ also belongs to the group by definition.
Identity elements always exist in these groups and therefore they form a symmetric group.

Here, taking the first N natural numbers, the bijection becomes a mere permutation of re-arrangement.

On a set $X_n$, for example consisting of numbers 1 to n.
\begin{equation}
S_n = { 1, 2, 3, ... , n-1, n }
\end{equation}

the symmetric group on the set $S_n$ consists of all the permutations of the numbers from 1 to n taken all at once. 

For example, let
\begin{equation}
S_n = {1,2,3}
\end{equation}
Then it's symmetric group is:
\begin{equation}
G = {(1,2,3),(1,3,2),(2,3,1),(2,1,3),(3,1,2),(3,2,1)}
\end{equation}

For $n$ elements there are $n!$ permutations. Hence, the order of the symmetric group of $S_n$ is $n!$.
By this definition, a Rubik's cube, molecules like ammonia, permuations of numbers and millions of other objects in the real world that contain states can be mathematically modelled into a symmetric group.

#### Abelian Groups

An abelian group is a special form of a group, which adds the condition of commutativity to the group. A group $G$ is said to be an abelian group with respect to an operation $#$, if $G$ is a group and:

For any $x,y\in G$, $x$ $#$ $y = y$ $#$ $x$

The concept of Abelian Groups are important when it comes to rings, fields and finite fields. 

### Ring

A ring is an abelian group $R$ but it has two operations, usually denoted as $+$ and $*$. But in order to make things simpler, let us consider them as $#1$ and $#2$.

Conditions for a Group $R$ to be a ring:
1. $R$ is an abelian group (i.e closure, associativity, commutative, identity and invertibility in $#1$)
2. $R$ is monoid in $#2$, i.e
    + For any $x,y,z\in R$, ($x$ $#2$ $y$) $#2$ $z = x$ $#2$ ($y$ $#2$ $z$) [Associative]
    + There exists an element $e \in R$, such that for any element $x \in R$, $x$ $#2$ $e = e$ $#2$ $x = x$ [Identity]

3. The two operations must be distributive over the first operation $#1$. For all $x,y,z \in R$:
    + $x$ $#2$ ($y$ $#1$ $z$) = ($x$ $#2$ $y$) $#1$ ($x$ $#2$ $z$) [Left distributivity]
    + ($y$ $#1$ $z$) $#2$ $x$ = ($y$ $#2$ $x$) $#1$ ($z$ $#2$ $x$) [Right distributivity]
    
** Note: Other sources use, $+$ and $*$ to denote the operations $#1$ and $#2$ respectively.**


There is an interesting concept here called the *rng* (without the $i$), also known as the pseudo ring.
A rng has all the properties of a ring except that it need not have a multiplicative identity.
Consider, the set of even integers,
\begin{equation}
S = {...,-8,-6,-4,-2,0,2,4,6,8,...}
\end{equation}
and the operations addition $+$ and multiplication $*$. They form a $rng$ but not a $ring$ because there is no multiplicative identity $1$ in $S$.

The set of Integers $Z$ with $+$ and $*$, however can claim the title of the **LORD of the RINGS**. Because they form a ring. Get it?Nope? Moving on!

### Field

A set $F$(see how I am conveniently changing the letters of the set as the definition changes, get used to it when reading math books) is said to be a Field with respect to the operations $+$ and $*$ if the following field axioms are satisfied:
- ($F,+$) must be an abelian group
- ($F-\\{0\\},\*$) must be an abelian group [0 is the additive identity]

#### Characteristic of a Field:
A positive integer n is said to be a characteristic of a field $F$, if
\begin{equation}
n . 1 = 0
\end{equation}
i.e.
\begin{equation}
1 + 1 + ... + 1 = 0 
\end{equation}
Here, 0 is the identity of the $+$ operation. If there is no positive integer n that satisfies this condition, then the field is said to have a zero characteristic.

We need not take only 1 here. In fact, for any element $x \in F$, $n.x = 0$ is true. We also want the least positive positive integer n that satisfies this condition for all the elements in the set $F.

#### Subfield

A field $(G,+,\*)$ is said to be a subfield of $(F,+,\*)$, if $0$ in $F = 0$ in $G$, both the operations are the same and $G\subset F$.

### Prime Field

Given a prime number $p$, we can build a prime number field.
Let the $+$ operation be a $+modulo$ p operation:if the sum exceeds p, we mod it with p.
Let the $\*$ operation be a $\*modulo$ p operation:if the product exceeds p, we mod it with p.
Add these two operations with a set consisting of integers from $0$ to $p-1$, we get a prime field.

This field is commonly referred to as $\mathbb{Z}_p$.

For example, 
\begin{equation}
\mathbb{Z}_7 = \{0,1,2,3,4,5,6\}
\end{equation}

### Finite Field

By the blessings from the gods of obviousness, a finite field is a field containing a finite number of elements in its set. One interesting finite field is the finite field of prime order, also called the Galois Field ($GF(p)$ or $\mathbb{Z}/p\mathbb{Z}$ or $\mathbb{F}_{p}$). 

The elements of a Galois Field are actually generally defined as,

\begin{align}
    gf(p^n) = && (0,1,2,..., p-1) \cup \\\
               && (p,p+1,p+2,...,p+p-1) \cup \\\
               && (p^2, p^2+1,p^2+2,...,p^2+p-1) \cup ... \cup \\\
               && (p^{n-1},p^{n-1}+1, p^{n-1}+2,...,p^{n-1}+p-1)
\end{align}
where $p \in \mathbb{P}$ and $n \in \mathbb{Z}^{+}$

Let us try to compute $gf(3^2)$:

\begin{equation}
gf(3^2) = \{0,1,2,3,4,5\}
\end{equation}

The operations here are $+modulo3$ and $*modulo3$.

One can easily note that, $gf(p^1)$ is nothing but the prime field $\mathbb{Z}_p$. However, $gf(p^n)$ is considered to be an extension to the prime field $\mathbb{Z}_p$. The addition of the new elements to the set do not violate any of the field properties.

All of this number physics is beautiful actually. Mathematics is the purest form of art and knowledge to have ever been invented by mankind. It is certainly very true that numbers never lie. In the upcoming blogs, let us explore the application of number theory in cryptography.

Feel free to contact me at dth.bht@gmail.com for any queries, complaints or suggestions.

Signing off, Yours truly, the Hermitsage
