---
layout: post
title: "Segment Trees"
author_github: shanthanu9
date: 2018-10-06 22:55:00
image: '/assets/img/'
description: 'This article gives an introduction to segment trees and it’s applications in competitive programming'
tags: 
- Competitive Programming
- Segment Trees
categories:
- CompSoc
github_username: 'shanthanu9'
---

## Introduction

> Segment trees are extensivly used in competitive programming for problems that invlove range queries and range updates. 

For example, given an array A of N elements, answer Q queries (of two types):

1 L R : output the sum of elements between L and R  
2 x I   : A[I] = x

A similar version of the above problem for minimum(i.e. to find the minimum between L and R) is famously known as Range Minimum Query. These problems can be easily solved with segment trees.

## Naive Approach

A naive approach would be to answer queries of type 1 by running in a loop from L to R and finding the required sum and type 2 by performing updates on the array. 

```cpp
for(int i = 0; i < Q; i++) {
	int type;
	cin>>type;
	if(type == 1) {
		sum = 0;
		cin>>L>>R;		
		for(int j = L; j <= R; j++) {
			sum += A[i];
		}
		cout<<sum<<endl;
	}
	else {
		cin>>I>>x;
		A[I] = x;
	}
}
```

Therefore, range queries (queries of type 1) takes O(N) time and point updates (queries of type 2) take O(1) time. This algorihtm works well when there are large number of point updates compared to range queries.

But what if there there are a large number of range queries, the above algorithm can take O(Q*N) time. For such problems, Q and N have an upperbound of 10<sup>5</sup> usually in contests (Hence won't pass). 

Can we improve this algorithm? Yes, we can by using Segment Trees.

## Structure of Segment Tree

So, what is a Segment Tree?

We compute and store the sum of the array A[0 – N-1]. Then we divide the array into two halves and compute the sum of each half, i.e, sum of A[0 – N/2] and A[N/2+1 – N-1]. We continue this process again for each half untill an array with single element is reached.

**Note on convention**: From now on, A[L - R] will represent the sub-array of A between L and R (both inclusive).

In other words, we call a procedure to find the sum of elements of A[0 – N-1], split the current segment into half and call the procedure for the both the halves. We can view this setup as a binary tree. The root node being sum A[0 – N-1] and its left and right child being left and right halves of A[0 – N-1].

For example, for A = {2,3,1,9,4,3,7,8}

![Construction of Segment Tree](/blog/assets/img/segment-tree/construction.png)

Each node corresponds to sum of given segment. Its called “Segment Tree” because it can be easily visualised as a tree.

Note that the height of the tree is O(logn) since moving from any parent node to chlid node, the size decreases by approximately by half.

Number of nodes in the tree is   1 + 2 + 4 + ... + 2<sup>ceil(logn)</sup> = 2<sup>ceil(logn)+1</sup> < 4n = O(n) . Thus we will need O(n) extra space to implement segment trees.

Note that segment trees are full binary tree(every node has two or zero child nodes). (prove it!)

## Construction

A Segment Tree can be efficiently implemented as follows:

We start at the bottom level, the leaf vertices. A vertex is a leaf vertex, if its corresponding segment covers only one value. Therefore we can simply copy the values of the elements a[i]. On the basis of these values, we can compute the sums of the previous level. And on the basis of those, we can compute the sums of the previous, and repeat the procedure until we reach the root vertex. 

It is convenient to describe this operation recursively: we start the construction at the root vertex and the construction procedure, if called on a not-leaf vertex, first recursively constructs the two child vertices, and then sums up the computed sums of these children. If it is called on a leaf vertex, it simply uses the value of the array.

The time complexity of construction in O(n) because each edge is returns just one value.

**Note**:  
Here, segment trees are stored in an array T(1 - indexed). We call a node i if it's corresponding sum is stored at T[i]. We reresent the tree in T by  
1. Storing sum corresponding to root node at index 1, i.e, at  T[1]. (node i )
2. Store the sum of corresponding to node child nodes of _i_ at _2i_ ans _2i+1_
3. Given a node i, it's parent is i/2 (integer division). 

Following is the implementation for construction of Segment Tree:

```cpp
//Max size of given array
const int N = 1e5;
//Segment Tree is represnted
int a[N], t[4*N]; 
//a is the array
//t is the segment tree

//fuction to build the tree build(1, 0, n-1)
//[start, end] start and end both inclusive
void build(int node, int start, int end) {
	if(start == end) {
		t[node] = a[start];
	}
	else {
		int mid = (start+end)/2;
		build(2*node, start, mid);
		build(2*node+1, mid+1, end);
		t[node] = t[2*node]+t[2*node+1];
	}
}
```
build(1, 0, n-1) builds the tree.(assuming n is the size of array a)

But how does constructing a segment tree help in finding range queries?

## Range Queries

After the constructing the Segment Tree, it is possible to answer sum queries of the form A[L – R] in O(logn) time.

We compute sum queries by using the pre-computed values of segment sums. The idea is any given segment of values L and R, sum A[L – R] can be represented as sum of pre-computed sub segments.

This can be done by traversing the segment tree.

Following the algorithm we use for range query: 

> Range_Query(node, L, R)
>
> (Let start and end be the extremes of the segment for which sum is stored in “node”)	  
>    1. If start >= L and end <= R, then sum of “node” contains a part of the required sum. So we return sum stored in node. 
>    2. If start > R or end < L, then it means the required sum A[L – R] is not present in that node or it’s child nodes(if it exists). In this case, return 0.
>    3. Else a part of the required sum A[L – R] is present in the node. So, we need to how much “node” contributes to A[L – R]. For this, we recursively call Range_Query for left and right child. i.e. return Range_Query(left child of node, L, R) + Range_Query(right child of node, L, R)

We get the required output by calling Range_Query(root, L, R).

The procedure is illustrated in the following image. The array a=[1,3,−2,8,−7] is used, and here we want to compute the sum of A[2 - 4]. The colored vertices will be visited, and we will use the precomputed values of the green vertices. This gives us the result −2+1=−1.

![range query](/blog/assets/img/segment-tree/range.png)

Following is the implementation for range queries:

```cpp
int query(int node, int start, int end, int l, int r) {
	if(l > end || r < start) {
		return 0;
	}
	else if(l <= start && end <= r) {
		return t[node];
	}
	int mid = (start+end)/2;
	return query(2*node, start, mid, l, r) + query(2*node+1, mid+1, end, l, r);
}
```

In conclusion the query works by dividing the input segment into several sub-segments for which all the sums are already precomputed and stored in the tree. And if we stop partitioning whenever the query segment coincides with the vertex segment, then we only need O(logn) such segments, which gives the effectiveness of the Segment Tree.

## Point Updates:

This query is easier than the sum query. Each level of a Segment Tree forms a partition of the array. Therefore an element A[i] only contributes to one segment from each level. Thus only O(logn) vertices need to be updated.

It is easy to see, that the update request can be implemented using a recursive function. The function gets passed the current tree vertex, and it recursively calls itself with one of the two child vertices (the one that contains A[i] in its segment), and after that recomputes its sum value, similar how it is done in the build method (that is as the sum of its two children).

Here is a visualization using thearray a=[1,3,−2,8,−7]. Here we perform the update a[2]=3. The green vertices are the vertices that we visit and update.

![point update](/blog/assets/img/segment-tree/point.png)

Following is the implementation for point updates:

```cpp
void update(int node, int start, int end, int idx, int val) {
	if(start == end) {
		a[idx] = t[node] = val;
	}
	else {
		int mid = (start+end)/2;
		if(idx>=start && idx<=mid) {
			update(2*node, start, mid, idx, val);
		}
		else {
			update(2*node+1, mid+1, end, idx, val);
		}
		t[node] = t[2*node]+t[2*node+1];
	}
}
```

## Note on implementation:

You can use the following functions as helper fuctions(for ease of use):

```cpp
void build() {
	build(1, 0, n-1);
}
//change idx value to val, i.e, a[idx] = val
void update(int idx, int val) {
	update(1, 0, n-1, idx, val);
}
//[l,r] both inclusive
int query(int l, int r) {
	return query(1, 0, n-1, l, r);
}
```

**Bonus**: Try to implement range minimum and maximum query with point updates.

## More examples:

> 1. Given an array of N numbers and Q queries, each query consists of L and R. We need to write a program that prints the number of occurrence of the smallest element in the range L-R. 

This is similar to range query except that it asks for number of minimum elements in the given range.

Here, at each node of the segment tree, minimum and count of minimum element is stored. Try implementing the solution to this problem. 

The solution is similar to sum queries problem but with different conditions for merging solutions.  By merging, I mean the step of updating the parent node value(or gathering query result) from its child nodes value(which occurs in construction and range queries).

**Hint**: 
Use struct for each node to store minimum and count

1. min(left_subtree) < min(right_subtree): 
node.min=min(left_subtree), node.count = left_subtree.count

2. min(left_subtree) > min(right_subtree): 
node.min=min(right_subtree), node.count=right_subtree.count

3. min(left_subtree) = min(right_subtree): 
node.min=min(left_subtree) or min(right_subtree), node.count=left_subtree.count + right_subtree.count

Implementation: [https://www.geeksforgeeks.org/count-number-of-smallest-elements-in-given-range/](https://www.geeksforgeeks.org/count-number-of-smallest-elements-in-given-range/)

> 2. Given N numbers and Q queries, each query consists of L and R. Task is to write a program which prints the count of numbers which divides all numbers in the given range L-R.

This is a slightly harder problem. The point to note for such problems is that everything boils down to the merging step. If we are able to define contents of each node in the segment tree and are able to get a way to merge two child nodes to return required answer(or update parent), then we are done.

Here, note that the number that divides all elements in a segment should be the minimum. If such a number exists, then it should be the GCD of all numbers in the segment.

So the count of the number of minimums in range L-R, given that minimum is equal to the gcd of that range will be our answer to every query. The problem boils down to finding the GCD, MINIMUM and count of MINIMUM for every range using Segment trees. On every node of the tree, three values are stored. 
On querying for a given range, if the gcd and minimum of the given range are equal, countMINIMUM is returned as the answer. If they are unequal, 0 is returned as the answer.

## Implemenation: 
* [https://www.geeksforgeeks.org/count-elements-which-divide-all-numbers-in-range-l-r/](https://www.geeksforgeeks.org/count-elements-which-divide-all-numbers-in-range-l-r/)


**Bonus**: Check out two dimensional segment trees if you are interested: [https://www.geeksforgeeks.org/two-dimensional-segment-tree-sub-matrix-sum/](https://www.geeksforgeeks.org/two-dimensional-segment-tree-sub-matrix-sum/)

## Epilogue

This article is supposed to be an introduction to Segment Trees. If you feel comfortable with the contents of the article, then do check out lazy propagation on segment trees. (this allows you to perform range queries and range updates on the segment tree)

## References:  

* [https://cp-algorithms.com/data_structures/segment_tree.html](https://cp-algorithms.com/data_structures/segment_tree.html)  

* [https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/tutorial/](https://www.hackerearth.com/practice/data-structures/advanced-data-structures/segment-trees/tutorial/)  

* [https://visualgo.net/en/segmenttree](https://visualgo.net/en/segmenttree)