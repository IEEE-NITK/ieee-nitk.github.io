---
layout: post
title: "DP on Trees"
author_github: vaibhavpuri32
date: 2019-10-02 20:55:00
image: '/assets/img/'
description: 'Introduction to DP on Trees'
tags:
- IEEE NITK
- CompSoc
categories:
- Compsoc/Diode/Piston
github_username: 'vaibhavpuri32'
---

**DP on Trees**  

**Introduction** 

DP on Trees is a very useful Technique in problem-solving, 
The prerequisite for learning this is a very basic understanding of Trees, vectors, and DP. 
Before directly diving into the topic, We will discuss some topics in brief, they are
- Difference between graphs and Trees. 
- Adjacency List
- DFS.
- Dynamic Programming.  

**Difference between Graphs and Trees**

Trees are a Subset of Graphs, like graphs they  are  represented by nodes and edges, a popular shout is “ any graphs with n nodes and n-1 edges is a tree “ , it’s not  completely correct, here is an example to contradict it,  



![alt_text](/blog_src/assets/img/DP_on_Trees/1.png)


 In the above example we have 4 nodes and 3 edges , yet it is not a tree.

So, what’s the complete definition, the complete definition can be 
“A Tree is a connected graph with no cycles”. 
A Tree is a connected graph without any cycle, such graphs can be thought of suspended from the node. 
 






![alt_text](/blog_src/assets/img/DP_on_Trees/2.png)


but any graph which satisfies the above criteria can be converted into a tree, for example 

The following diagram does not looks like a conventional tree 




![alt_text](/blog_src/assets/img/DP_on_Trees/3.png)
   

But it can easily be converted into a tree by pivoting it at any node let’s pivot it along node 2 






![alt_text](/blog_src/assets/img/DP_on_Trees/4.png)


 **Adjacency list**

** **
We have seen how a tree looks like, now let’s see how we can store a graph in memory when we are given with edges between the nodes. 
There are many ways to do it, but the easiest way to do it is using the adjacency list, which is an array of vectors. 
For each node, we have a vector, which stores all the adjacent nodes(nodes which are directly connected to it by an edge). 

If nodes a and b are connected by an edge then a must be present in the adjacency list of b, and vice-versa. 

Let’s take an example for the following tree, 

   
The adjacency list of the graph is: 

- 1 --> 2 , 3, 4 
- 2 --> 1, 5
- 3 --> 1, 6, 7 
- 4 --> 1 
- 5 --> 2, 8
- 6 --> 3 
- 7 --> 3 
- 8 --> 5

For a tree with n nodes , there are a total of 2n - 2 elements in an adjacency list in total because we will have exactly n-1 edges and 

And each edge connects 2 nodes.  

Let’s write a C++  code for making adjacency list of a Tree. 


```
#include<bits/stdc++.h>
Using namespace std;



int main()

{

    int nodes, edges, i, j; 

    cout<<”\nEnter the Number of nodes and edges: “;

    cin >> nodes >> edges;                //We read number of nodes and edges.

    vector<int> adj[nodes + 1];

    cout << "\nEnter the edges: ";

    for (i = 1; i <= edges; i++)

    {

        int x, y;

        cin >> x >> y;                    

        adj[x].push_back(y);            //If x is adjacent to y which means that y is also adjacent to x 

        adj[y].push_back(x);

    } 

    for(i=1 ;  i<=nodes; i++)             // We go through each node and print its adjacency list.

    {  cout<<"The adjacency list of node "<<i<<" is : ";

        for(j=0; j<adj[i].size(); j++)        

       {     cout<<adj[i][j]<<"  "; 

       } 

      cout<<”\n”;

    }

    return (0);

}  
``` 

<span style="text-decoration:underline;">Input: </span>

Enter the number of nodes and the edges: 8 7

Enter the edges: 1 2  1 3  1 4  2 5  3 6  3 7 5 8

<span style="text-decoration:underline;">Output</span>: 

- The adjacency list of node 1 is: 2 3 4 
- The adjacency list of node 2 is: 1 5 
- The adjacency list of node 3 is: 1 6 7 
- The adjacency list of node 4 is: 1 
- The adjacency list of node 5 is: 2 8 
- The adjacency list of node 6 is : 3 
- The adjacency list of node 7 is : 3 
- The adjacency list of node 8 is: 5 

Note that no list can be empty because in tree every node is connected to at least one node. 

**DFS (Depth First Search)**

Traversing a Graph means visiting each node of a Graph.

There are 2 main ways of traversing a graph  



*   DFS (depth first search) 
*   BFS (breadth first search) 

We will be discussing DFS only on Trees , not on Graph. 

For DFS on Graph you can refer to this link:[https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)  

We will only discuss DFS because it is required for understanding DP on Trees.  

- Parent-child convention: 
 For understanding DFS or any topic related to Tree, we use this convention, in this, we fix a root node and then we add children to it, then if the child also has a child we call it grandchild of root node and child of the node which is connected to.  




![alt_text](/blog_src/assets/img/DP_on_Trees/6.png)

In the above example node, 1 is the root node, node 2 and 3 are children of root 1, node 4 and 5 are children of root 2 and grandchildren of root 1, and similarly, 6 is the child of root 3 and grandchild of root 1.   
It is often misunderstood that a node cannot have more than 2 children.  
Only in a Binary Tree, we can have at most 2 children, but in general, it’s ok if a node has more than 2 children.






![alt_text](/blog_src/assets/img/DP_on_Trees/7.png)


So in the above figure , if we do dfs of root node 1, the order will be 

1 → 2 → 5 → 3 → 4→ 6→ 7 → 8  

So overall in DFS we finish all the children before moving to the next child, and this is true for every node we visit. 


![alt_text](/blog_src/assets/img/DP_on_Trees/8.png)
 


First, 1 is Parent Node and node 2 is its child, so before visiting 3 we have to complete 2. 


![alt_text](/blog_src/assets/img/DP_on_Trees/9.png)


Similarly, now node 2 is its parent node and root 4 and its children have to be completed before we visit 5. 
Let’s take an example:  

![alt_text](/blog_src/assets/img/DP_on_Trees/10.png)
      First we visit the root node.


![alt_text](/blog_src/assets/img/DP_on_Trees/11.png)
  Then we move on to its first child.



![alt_text](/blog_src/assets/img/DP_on_Trees/12.png)
  Then we visit the child of node 2.



![alt_text](/blog_src/assets/img/DP_on_Trees/13.png)
 after we are done with all the children of node 2 we move onto node 3.
                                                    



![alt_text](/blog_src/assets/img/DP_on_Trees/14.png)
  Since there are no children of 3 we move to the next child which is 4.

						       

 

![alt_text](/blog_src/assets/img/DP_on_Trees/15.png)
  then we move to first child of 4   That is node 6.


![alt_text](/blog_src/assets/img/DP_on_Trees/16.png)
Then we complete the node 7.


![alt_text](/blog_src/assets/img/DP_on_Trees/17.png)
   and we finish it with node 8.  

Now let’s write code for it, in which we have the edges(using the adjacency list program ) and print the order in which the nodes are visited.  

Here we define a function DFS which accepts the adjacency list, 
 the node on which we are performing DFS, and the parent of the node. 

```
 void Dfs(int v,vector<int> adj[], int p)

{

    cout << v << " ";     //We print the current node

    int i;

    for (i = 0; i < adj[v].size(); i++)

    {

        if (adj[v][i] != p)    // so that we don't print the parent node 

        {

            Dfs(adj[v][i], adj, v);  //Now our current node becomes the   parent node , and the child of it                                becomes the main node(v)                                   

        }                                                          

    }

}  
```
<span style="text-decoration:underline;">Input:</span>

Enter the edges: 1 2

2 5

1 3

4 8

1 4

4 6

4 7

<span style="text-decoration:underline;">Output:  </span>

1 2 5 3 4 8 6 7 

Now let us see how the code works : 
```
dfs(1, 0)

    dfs(2, 1)

         dfs(5, 2)

         end

    end

    dfs(3, 1)

    end

    dfs(4, 1)

        dfs(6, 4)

        end

        ....

    end

end

```


<span style="text-decoration:underline;">Dynamic Programming (DP) </span>

Dynamic Programming is a very powerful technique, it is a huge topic in itself, for a more detailed overview of DP you can visit 
https://www.geeksforgeeks.org/dynamic-programming/. 
To put it in a nutshell Dynamic Programming is mainly an optimization over plain recursion, it helps us to reduce both space and time complexity(For learning more about time Complexity please refer to https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/ ). 
The idea is to store the results of previous subproblems so that we do not have to re-compute them when needed later. Though it does not sound very groundbreaking, it can convert an exponential function to a linear one, let’s consider some examples 

 Find the nth term of Fibonacci  . 

If you don’t know what Fibonacci series is please refer:  

[https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/](https://www.geeksforgeeks.org/program-for-nth-fibonacci-number/) 

Now we know the following property of a fibonacci number 

F[n] = F[n-1] + F[n-2]      , n>2

F[1] = 0 

F[2] = 1 

Now the first approach which comes to mind is the recursion 
```
 int fib(int n)   //To find the n fibonacci number 

{ if(n==1)

   return(0); 

   if(n==2)

   return(1); 

   else 

   return(fib(n-1) + fib(n-2));

}  
```
The recursion is very straight forward, but the time complexity of program is  exponential [https://www.geeksforgeeks.org/time-complexity-recursive-fibonacci-program/](https://www.geeksforgeeks.org/time-complexity-recursive-fibonacci-program/)
Now let’s calculate the same with DP 

Let’s declare an array of integer fib[100] in which the i index will contain the ith term of Fibonacci series, 
Now the first 3 values can be assigned manually fib [0]=0 as there is no 0th term. 
Fib[1] =0 as the first term is 0. 
Fib[2] =1 as second term is 1.

Now run a basic for loop from index 2, 
```
int fib(int n)

{ int i,fib[100]; 

   fib[0]=0; 

   fib[1]=0;

   fib[2]=1; 

    for(i=3; i<=n; i++)

    fib[i]=fib[i-1]+fib[i-2]; 

    return(fib[n]);

}   
```
So basically we calculate the value of any term from the previous two terms, we do this in a linear time hence time complexity is 0(n). 
Plus we have one more advantage if we are given with x queries of 
Terms, for example: find the nth term of Fibonacci series for the following terms: x1, x2, x3, x4, ...xn. 
If we go by recursion the answer will take even more time, but solving it with DP, we can do it in linear time just going through the for loop once, how? 
All we need to find out the largest among x1,x2,....xn.  
And we can then find Fib[max(x1,x2,x3….)], and all other values will be calculated among the way, 
Ex: let’s say im given with 5 queries : 3, 8, 17, 27, 21.  
Now, all we need to calculate is Fib[27] because values of Fib[17], Fib[21], Fib[3], Fib[8], will be calculated along the way.

Ex: let’s say im given with 5 queries :  3, 8, 17, 27, 21.  

Now all we need to calculate is  Fib[27] because values of Fib[17], Fib[21], Fib[3], Fib[8], will be calculated along the way.

Let us consider one more example :   

We have an array of n integers and we have to find the maximum subarray(continuous block of integers having maximum sum), the problem is only interesting if we take negative integers into consideration otherwise it is a no brainer, and length of block is not fixed. 

For example, consider the following array 


![alt_text](/blog_src/assets/img/DP_on_Trees/18.png)
 
If we check manually the greatest sum is from index 1 to index index 5 which is 

![alt_text](/blog_src/assets/img/DP_on_Trees/19.png)
 

2 + 4 + (-3) +5 +2 = 10.  But it is impossible to check it manually for larger array, so how do we  go about it?

The first approach which comes to mind is  fixing the first element 

And then calculating all possible cases with remaining elements, store the maximum result and then change the first element and repeat the process.  

Understanding it with diagrams 

Let’s fix “a” at index 0 and then lets shift “b” first b will start with index “0”, this is the case when the maximum subarray is the first element itself

![alt_text](/blog_src/assets/img/DP_on_Trees/20.png)
 

The sum is -1

Then let’s shift b to index 1 


![alt_text](/blog_src/assets/img/DP_on_Trees/21.png)
 

the sum will be a to b that is -1 +2 = 1. 

Now shift b to right once more 


![alt_text](/blog_src/assets/img/DP_on_Trees/22.png)


Sum is 1+ 4 = 5.

Keep shifting it, till you reach the end 


![alt_text](/blog_src/assets/img/DP_on_Trees/23.png)
 

Sum is 5 +(-3) = 2



![alt_text](/blog_src/assets/img/DP_on_Trees/24.png)
 

Sum is 2+ 5 = 7.  




![alt_text](/blog_src/assets/img/DP_on_Trees/25.png)
 

Sum is 7 +2 = 9.


![alt_text](/blog_src/assets/img/DP_on_Trees/26.png)
 

Sum is  9 +(-5) = 4


![alt_text](/blog_src/assets/img/DP_on_Trees/27.png)


Sum is 4 +2 = 6.

Now b has reached the end, note the maximum sum = 9

 

Now when b reaches the last index shift a to right by 1 index 


![alt_text](/blog_src/assets/img/DP_on_Trees/28.png)


![alt_text](/blog_src/assets/img/DP_on_Trees/29.png)


![alt_text](/blog_src/assets/img/DP_on_Trees/30.png)


Keep going till the b reaches its end then again shift a by 1 index to the right, finally stop when we have reached the following stage: 


![alt_text](/blog_src/assets/img/DP_on_Trees/31.png)
 

And note the maximum value noted throughout the process, its code is very straight forward 

```
int maxsub(int a[], int n)

 {   int i,j; 

     int best = 0;

      for (i = 0; i < n; i++)

    {

        int sum = 0;

        for (j = i; j <= n; j++)

        {

            sum = sum + a[j];

            best = max(best, sum);

        }

    } 

    return best;

}
``` 

We assign best to the minimum value possible, then we repeat the above process. 
The time complexity of this method is O(n^2).

Now surprisingly, we can also solve this in O(n) approach using DP, Let’s see how, 
The idea is to calculate for each position, the maximum sum of the subarray that ends at that position, after that the answer is a maximum of those sums. 

Now consider the subproblem of finding the maximum-sum subarray that ends at position k , there are 2 possibilities 



*   The Subarray only contains the element at position k
*   The subarray consists of a subarray that ends at position k-1, followed by the element at position k. 

 In the latter case, since we want to find a subarray with the maximum sum, the subarray that ends at position k-1 should also have the maximum sum, thus we can solve the problem efficiently by calculating the maximum subarray sum for each ending position from left to right.  

Example 

Initially we assign sum =0 and best =0 (which will store our answer) and consider the same array 



![alt_text](/blog_src/assets/img/DP_on_Trees/32.png)


Let's write the code first and then we will discuss more,  
```
int Maxsub(int a[], int n)

{

    int k, i, sum = 0, best = 0; 

     for (k = 0; k < n; k++)

    {

        sum = max(a[i], a[i] + sum + a[i]);

        best = max(sum, best);

    } 

    return best; 

}
```

 

When we iterate for the first time, sum =0,  a[i]=-1, a[i]+sum =-1 , so either way the value of sum becomes -1, and the best values remains the same 0, it means that any subarray ending at index i=0, will have a maximum sum of -1,then for the second time   i=1, a[i] = 2, and sum+a[i] = 1, so sum will now take maximum of those values which is 2, and best value will also become 2, means the maximum subarray that ends at index 1, can have a sum of 2, now when we iterate for the 3rd time, a[i] =4, sum + a[i] = 6, so sum will take maximum of value which is 6 and best will also be equal to 6, again which means maximum subarray that ends at index 2 has sum of 6, we can go on till the last index and find the maximum subarray sum which is value of best.

  

 

**<span style="text-decoration:underline;">DP on Trees </span>**

Now that we have covered every prerequisite topics, in brief, we will move on to DP on Trees. Let’s directly dive into some problems, 
The first problem is very standard: 

Given a Tree with n weighted nodes(nodes which contain any finite value), calculate the maximum sum of the node values along a path from root to any leaves without re-visiting any node

Now first let us understand the problem, 
We are at the root node, we need to go to any leaf node, to which the sum of nodes visited along the way is maximum, now if we think carefully, we can only visit a node in only one way, and to visit a specific leaf node , there is only one way , hence we will calculate the sum of elements along the way , this would become clear with the following diagram. 



![alt_text](/blog_src/assets/img/DP_on_Trees/33.png)


 

Now if we come out of node 

11 -->  3 + 1 +1+4 = 9

12 -->  5 +1+1+3 =10 

13  --> 9 + 9 + 2 + 3 = 23

14 -->  8 + 9 + 2 + 3 = 22 

8 -->  1+10+3 = 14 

9 -->  5 + 10 + 3 = 18 

10 -->  3 + 10 + 3 = 16  

Here since the tree is small , we can manually calculate,but if the trees are large, it is impossible to do it manually, so we will try to solve it using DFS and Dp, 

Let’s Write the complete Program for it 
```
#include <bits/stdc++.h>

using namespace std;

int dfs(int v, vector<int> adj[], int p, int a[])

{

    int i, max = 0;

    for (i = 0; i < adj[v].size(); i++)

    {

        if (adj[v][i] != p)

        {

            int temp = dfs(adj[v][i], adj, v, a);

            if (temp > max)

                max = temp;

        }

    }

    return (max + a[v]);

}

int main()

{

    int nodes, i, edges;

    cin >> nodes>>edges;

    int a[nodes + 1];

    cout << "\nEnter the values in the node: ";

    for (i = 1; i <= nodes; i++)

        cin >> a[i];

    vector<int> adj[nodes + 1];

    cout << "Enter the edges: ";

    for (i = 0; i < edges; i++)

    {

        int x, y;

        cin >> x >> y;

        adj[x].push_back(y);

        adj[y].push_back(x);

    }

    cout << dfs(1, adj, 0, a) << "\n";

    return (0);

}
```
Now Let’s go through the program,  

The main function is almost the same as the adjacency list one, except here we have some values,  stored in the node itself, so here we pass 4 things to the function, the root node, the adjacency list, parent of node(which is 0 for root node), and an array of values in the nodes. 

Now, the main logic of the problem is that we first go to  the leaves nodes,  and then we start moving upward and each time, we move up , we pass the maximum value that can be obtained from the children of the root to its root then the root returns the maximum value plus the value in the root to its parent node, this process continues till we reach the root node. 

Now Let’s Trace the code  
```
dfs(1,adj,0,a)

    dfs(2,adj,1,a)

      dfs(5,adj,2,a) 

         dfs(11,adj,5,a)

         returns  4 to dfs(5,adj,2,a),setting the max value to 4

         End dfs(11,adj,5,a)

         dfs(12,adj,5,a) 

         returns  5 to dfs(5,adj,2,a),changing  the max value to 5

         End  dfs(12,adj,5,a) 

      returns  (5+1(it’s own value)) to dfs (2,adj,1,a)

     End dfs(5,adj,2,a) 

     dfs(6,adj,2,a)

     Returns 3(it’s only value)  to dfs(2,adj,1,a)

     End

    returns 6 + 1(it’s own value ) to dfs(1,adj,0,a)    

    dfs(3,adj,1,a) 

    .

    .

    .

    .

    .

    .


    Till we get the maximum sum from the 3 children, and we finally add the value of node 1 (3) to it.  
```
Now there is one more interesting property, we can find this value for any node present on the tree, how? 
Because we can suspend a tree from any node in the tree, here is an example of suspending it from node 5 






![alt_text](/blog_src/assets/img/DP_on_Trees/34.png)
 

We can still calculate the maximum sum ,all we need to do is to call dfs(5,adj,0,a) instead of dfs(1,adj,0,a) from the main function !!!

 
Now Let’s take one more example 

Given a Tree with n weighted nodes(with values attached to them), 

choose a subset of nodes such that no two adjacent nodes(i.e. nodes connected directly by an edge) are chosen and sum of values of the chosen nodes is maximum. 

Now, the problem might sound a bit complex, if we think the problem breaks down to ,  choosing nodes which are not directly connected by an edge, we cannot choose both the child and parent in every child parent node, this problem is very similar to 
1-D array problem where we are given an array A1, A2, ..., AN; we can't choose adjacent elements and we have to maximise sum of chosen elements,  Here the approach will be very similar to the earlier question( maximum subarray ), either the element will be included or it won’t be included. 
The final formula will  be 
``` 
dp[i] = max(dp[i-1],a[i]+dp[i-2]),   i <= i<= n.
```
 This gives us some basic idea about the problem, but unlike the array problem, we don’t have direct adjacent elements, the best way will be defining our state to which subtree we are solving for. For defining subtrees we need to root the tree first. Say, if we root the tree at node 1 and define our dp[v] as the answer for subtree of node V, then we will keep moving up till we reach node 1. 
Now, similar to the array problem, we have to decide on including node V in our subset or not. If we include node V, we can't include any of its children(say v1, v2, ..., vn), but we can have the grandchildren of node v, and if we don’t include v we can include 
All the children of node v, 
Let’s say we are at node v, to calculate the maximum from the leaf nodes, we will again have to travel from bottom to node v, and then decide whether we want to consider the value of node v, and then we pass the value to the parent node of v, Here is the code 

For this we have to consider 2 arrays, we need the adjacency list and also the value in the nodes and parent of node, let’s assume they are present globally,
 
```
vector<int> adj[100];
int dp1[100], dp2[100];
void dfs(int V, int p, int a[])  //a is the value in the nodes 
{

    
    int sum1 = 0, sum2 = 0;
    for (auto v : adj[V])
    {
        if (v == p)
            continue;
        dfs(v, V);
        sum1 = sum1 + dp2[v];
        sum2 = sum2 + max(dp1[v], dp2[v]);
    }

    dp1[V] = a[V] + sum1;
    dp2[V] = sum2;
} 

The final answer will be the maximum value of dp1[1] and dp[2]. 
```


**<span style="text-decoration:underline;">Useful Resources</span>**

[https://www.geeksforgeeks.org/dynamic-programming-trees-set-2/ ](https://www.geeksforgeeks.org/dynamic-programming-trees-set-2/) 
[https://www.commonlounge.com/discussion/8573ee40c4cb4673824c867715a5bc7b](https://www.commonlounge.com/discussion/8573ee40c4cb4673824c867715a5bc7b)  
[https://www.youtube.com/watch?v=PgvJbi2cJSw](https://www.youtube.com/watch?v=PgvJbi2cJSw)
[https://www.codechef.com/problems/FAMTREE](https://www.codechef.com/problems/FAMTREE)
    

 

   


<!-- Docs to Markdown version 1.0β17 -->