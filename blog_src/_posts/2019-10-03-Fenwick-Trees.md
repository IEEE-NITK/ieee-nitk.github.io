---
layout: post
title: "Fenwick Trees"
author_github: ansen16
date: 2019-10-03 00:00:00
image: '/assets/img/'
description: 'This article gives an introduction and the Idea behind Fenwick Trees'
tags: 
- Competitive Programming
- Fenwick Trees
categories:
- CompSoc
github_username: 'ansen16'
---

## Introduction

A Fenwick tree or Binary indexed tree is a data structure that helps compute prefix sums efficiently. It is used in several competitive programming problems for range queries and point updates.

Let us start with a simple problem to understand it better.

We have an array A of n elements (A[1,2,3…….n])

We want to perform the following two operations on it.



1. Update the  value present at index i, i.e A[i]=x , where 1<= i<=n
2. Query the sum of the first i elements, where 1<= i<=n (the ith prefix sum)

## BASIC APPROACHES

*  We can simply maintain an array to store the values.

 Now, to update a value we can set  A[i]=val in O(1) time. 

 For each query we’ll have to run a loop from 1 to i and add up all those values.


 But this operation takes O(n)time in the worst case. 

 Summing this way is really slow and will time out when a large number of such sum calculations are performed.

 So this approach will only work when there are more updations and fewer queries.

* Let's try a different approach, this time to calculate the sum faster.

 If we maintain a prefix sum array, now the sums can be calculated in O(1)time,

 but now to update an index we will have to do multiple updations in the prefix sum array and in the worst case it can take up to O(n) time.

 So, this approach will time out when a large number of update operations are performed

 And will only work when there are more queries to calculate sums and fewer updations.

So far we've seen an approach that can update in O(1)and sum in O(n) and another one which can update in O(n) and sum in O(1).

Can we do better?

Say, perform both query and update operations in O(log n) time?

## The idea


Instead of maintaining a prefix sum for the entire array, what if we maintained the sum of the array elements up to a  particular element in the array?

What if we maintained the total sum of all the elements before specific points in the sequence? Then we could figure out the prefix sum at a point by just summing up the right combination of these precomputed sums.

Let me illustrate this idea.

Let's think of our array as a binary Tree of nodes. Each node stores the value that represents the total sum of all the nodes of the left subtree including that node. For example, suppose we have an array of size 7 and its contents are as shown below.

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/5.png)

 We have the following binary tree

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/3.png)

Now, we can set the value of each node to the cumulative sum of all the values including that node and its left subtree. For the array given above, we would store the following

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/6.png)

In this tree, it's easy to determine the cumulative sum up to a point. 

We maintain a sum, initially 0, then do a normal binary search to find the node in question. During the search we also do the following: 

Any time that we move right, we also add the current value of the node to the sum.

For example, suppose we want to look up the sum for index 3. Then, we do the following:



*   Start at the root (4). sum is 0.
*   Go left to node (2). sum is 0.
*   Go right to node (3). sum is 0 + 6 = 6.
*   Find node (3). sum is 6 + 15 = 21.

How about we calculate the sum the other way around? starting at a given node, initialize the sum to that node's value, then walk up the tree to the root. Any time you follow a right child link upward, add in the value at the node you arrive at. For example, to find the cumulative sum till 3, we could do the following:



*   Start at node (3). Sum is 15.
*   Go upward to node (2). sum is 15 + 6 = 21.
*   Go upward to node (4). sum is 21.

To increase the value of a node we need to update the set of nodes in the tree that include that node in its left subtree. To do this, we do the following: increase the value for that node, then start walking up to the root of the tree. Any time you follow a link that takes you up as a left child, increase the value of the node you encounter by adding in the current value

For example, to increment the value of node 1 by 6, we would do the following:



![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/7.png)


* Starting at node 1, increment its value by 6 to get

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/8.png)

* Now, go to its parent:

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/9.png)

* We followed a left child link upward, so we increment this node's value by 6

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/10.png)

* We now go to its parent:

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/11.png)

* That was a left child link, so we increment this node’s value as well:

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/12.png)

And now we're done!

Now Let’s write each index of this tree in binary.

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/13.png)

 Then in these binary numbers find the very last 1 that was set in the number, remove that bit along with all the bits that come after it. The tree now looks like

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/14.png)

Here, we can make an amazing observation.

If you treat 0 to mean "left" and 1 to mean "right," the remaining bits on each number spell out exactly how to start at the root and then walk down to that number.

For example, node 5 has binary representation 101. The last 1 is the final bit, so we drop that to get 10. Indeed, if you start at the root, go right (1), then go left (0), you end up at node 5!

So we can conclude that: Given a node n, the next node on the access path back up to the root in which we go right is given by taking the binary representation of n and removing the last 1.

This is really significant because the sum and update operations depend on the path from the node back up to the root and whether we're following left or right child links.

A Fenwick Tree (a.k.a binary indexed tree)  does all of this super efficiently by just using the bits in the index.

Consider a few examples, take a look at the path for node 7, which is 111. The nodes on the path to the root that we take that involve following a right child link upward is



*   Node 7: 111
*   Node 6: 110
*   Node 4: 100

If we take the path for node 3, which is 011, and look at the nodes where we go right, we get



*   Node 3: 011
*   Node 2: 010

Now we can very, very efficiently compute the cumulative sum up to a node using the following algorithm.



*   Write out node n in binary.
*   Set the sum to 0.
*   Repeat the following while n is not  0:
    *   Add in the value at node n.
    *   Clear the rightmost 1 bit from n.

Similarly, for the update step. To do this, we would want to follow the path back up to the root, updating all nodes where we followed a left link upward. (Try doing this yourself!)

We can note that because of this bitwise trickery, we don't even need to have the tree stored explicitly. 

We can just store all the nodes in an array of length n, then use the bitwise techniques to traverse the tree. Just store the nodes in an array, then uses these bitwise tricks to simulate walking upward in this tree.

## VISUALISATION
Here is a visualization of how a Fenwick tree stores partial sums for an array of 16 elements.

![blah-balh-blah](/blog_src/assets/img/Fenwick-Trees/15.jpg)

## A TRICK WITH BITS
Before we see how it can be built, updated and queried, let's have a look at a bit manipulation trick that makes implementation easy for us.

Suppose a is an integer with binary representation s10^n . The 1’s complement of a is s’01^n. The 2’s complement of a (which is -a) then becomes s’10^n. If we take the bitwise and of a and -a, we get 10^n. What happened over here? We just extracted the last set bit from a. We will need this result for later.



## REPRESENTATION

Note: 1 based indexing is used for implementation.

Fenwick Tree is represented as an array. Let the array be BIT[ ] of size n+1 (since we use 1 based indexing). 

Each node of the Binary Indexed Tree stores the sum of some elements of the input array. To be exact each index stores the cumulative sum from the index i to i−(1<<r)+1 (both inclusive), where r represents the last set bit in the index i.

## CONSTRUCTION

Initially, each index of the BIT is initialized to 0.

To increment the value of a particular index i by val :

1. initialize variable x as i

2. do the following while i is less than or equal to n.

 * Add val to BIT[x]

 * Go to parent of x by incrementing last set bit of x, this can be done by x+=(x&-x)

```cpp
void increment(int i,int val)
{
    int x=val;
    while(x<=n)
    {
        BIT[x]+=val;
        x+=(x&-x);
    }
}
```

## QUERYING

To find the prefix sum till index i:



1. Initialize a variable sum as 0 and x as i
2. Repeat the following steps while x is greater than 0
 * Add BIT[x] to sum
 * Go to the parent by removing the last set bit from x, ie x-=(x&-x)

3. return sum

```cpp
int query(int i)
{
    int x=i;
    inr sum=0;
    while(x>0)
    {
        sum+=BIT[x];
        x-=(x&-x);
    }
    return sum;
}
```


The number of set bits in the binary representation of a number n is O(Logn). Therefore, we traverse at-most O(Logn) nodes in both update and query operations.

Note : to calculate sum in a particular range [l,r]  sum= query(r) – getSum(l-1) does it in O(logn) time.

Here's the code for the main function to solve the problem discussed in the beginning. 

```cpp
int main() 
{
    cin>>n>>q;
    int *a=new int[n+1];
    int *BIT=new int[n+1];
    for(int i=1;i<=n;i++)
    {
        cin>>a[i];
        increment(i,a[i]);
    }
    while(q--)
    {
        int l,r;
        cin>>l>>r;
        cout<<query(r)-query(l-1)<<endl;
    }
}
```

## REFERENCES

[https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/](https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/)

[https://www.hackerearth.com/practice/data-structures/advanced-data-structures/fenwick-binary-indexed-trees/tutorial/](https://www.hackerearth.com/practice/data-structures/advanced-data-structures/fenwick-binary-indexed-trees/tutorial/)

[https://cp-algorithms.com/data_structures/fenwick.html](https://cp-algorithms.com/data_structures/fenwick.html)

      

