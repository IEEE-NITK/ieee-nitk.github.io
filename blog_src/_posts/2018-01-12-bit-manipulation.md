---
layout: post
title: "Bit Manipulation"
author_github: Aj163
date: 2018-01-12 11:15:53
image: '/assets/img/'
description: 'An introduction to Bit Manipulation and its use in Competitive Programming'
tags:
- Bit masks
- DP
- Competitive Programming
- C++
categories:
- Compsoc
github_username: 'Aj163'
use_math: true
comments: true
---
All data in computer programs is internally stored as bits, i.e., as numbers 0 and 1. It turns out that there are many uses for bit manipulation in competitive programming.

In programming, an n bit integer is internally stored as a binary number that consists of n bits. For example, the C++ type int is a 32-bit type, which means that every int number consists of 32 bits. For exmaple, the bit representation of the int number 42 is ```00000000000000000000000000101010```.

There are several bit operations supported by a typical ALU, some of them being AND, OR, NOT, XOR, and bit shifts

#### Some basic applications of bit operations
1. ```n&1 = 1``` implies n is odd, and ```n&1 = 0``` implies n is even. This executes much faster than the typical way to check if a number is odd (ie. ```n%2 = 1```).
2. ```1<<k``` gives 2^k. This makes it easy to check if the kth bit of a number from the right is set or not, ie. ```n&(1<<k) == 1```. This can be used to easily convert a decimal number to binary as follows:
    ```C++
    for (int i = 31; i >= 0; i--){
        if (n&(1<<i)) cout << "1";
        else cout << "0";
    }
    ```
3. It is also possible to modify single bits of numbers using similar ideas. For example, the formula ```x |= (1 << k)``` sets the k th bit of x to one, the formula ```x &= ~(1 << k)``` sets the k th bit of x to zero, and the formula ```x ^= (1 << k)``` inverts the k th bit of x.
4. The formula ```x &= (x − 1)``` sets the last one bit of x to zero, and the formula ```x &= − x``` sets all the one bits to zero, except for the last one bit. The formula ```x |= (x − 1)``` inverts all the bits after the last one bit. Also note that a positive number x is a power of two exactly when ```x & (x − 1) = 0```, and ```x&(-x)``` gives the highest power of 2 which divides x.

#### Additional functions
The g++ compiler provides the following functions for counting bits:
1. ```__builtin_clz(x)```: the number of zeros at the beginning of the number
2. ```__builtin_ctz(x)```: the number of zeros at the end of the number
3. ```__builtin_popcount(x)```: the number of ones in the number
4. ```__builtin_parity(x)```: the parity (even or odd) of the number of ones

## Bit Optimazations
#### Counting subgrids problem
Consider the following problem: Given an $N * N$ grid whose each square is either black (1) or white (0), calculate the number of subgrids whose all corners are black. For example, the grid

![Bit Manipulation Grid](/blog/assets/img/Bit-Manipulation/grid1.png) 

contains two such subgrids:

![Bit Manipulation Grid](/blog/assets/img/Bit-Manipulation/grid2.png) 

There is an $O(n^3)$ time algorithm for solving the problem: go through all $O(n^2)$ pairs of rows and for each pair $(a, b)$ calculate the number of columns that contain a black square in both rows in $O(n)$ time. The following code assumes that $color[y][x]$ denotes the color in row y and column x :
```C++
int count = 0;
for (int i = 0; i < n; i++) {
    if (color[a][i] == 1 && color[b][i] == 1) count++;
}
```
Then, those columns account for ```count*(count − 1)/2``` subgrids with black corners, because we can choose any two of them to form a subgrid. To optimize this algorithm, we divide the grid into blocks of columns such that each block consists of N consecutive columns. Then, each row is stored as a list of N-bit numbers that describe the colors of the squares. Now we can process N columns at the same time using bit operations. In the following code, $color[y][k]$ represents a block of N colors as bits.
```C++
int count = 0;
for (int i = 0; i <= n/N; i++) {
    count += __builtin_popcount(color[a][i]&color[b][i]);
}
```
The resulting algorithm works in $O(n^3/N)$ time.

A comparison was done for a randomly generated grid of size 2500 × 2500 between the original and bit optimized implementation. While the original code took 29.6 seconds, the bit optimized version only took 3.1 seconds with N = 32 (int numbers) and 1.7 seconds with N = 64 (long long numbers).

## Dynamic programming and bit masks
#### Optimal selection problem
Consider the following problem: We are given the prices of k products over n days, and we want to buy each product exactly once. However, we are allowed to buy at most one product in a day. What is the minimum total price? For example, consider the following scenario ( k = 3 and n = 8):
![Bit Manipulation Optimal](/blog/assets/img/Bit-Manipulation/optimal1.png) 

In this scenario, the minimum total price is 5:
![Bit Manipulation Optimal](/blog/assets/img/Bit-Manipulation/optimal2.png) 

Let $price[x][d]$ denote the price of product x on day d. For example, in the above scenario $price[2][3]$ = $7$. Then, let ```total(S, d)``` denote the minimum total price to buy all products by day d, when a subset S has already been bought. Using this function, the solution to the problem is ```total({}, n − 1)```.

To represent the subset S, we use **bit masks**. Consider a 32-bit integer N. If the kth bit (from the right) of N is set, then the kth product is a part of the subset, else not.

Therefore on each day, we have a choice to buy one of the products which hasn't been bought before or buy no product. The base conditions would be:
- If all products have been bought, then return 0
- If we have exceeded the total number of days return INF.

Therefore the C++ code is as follows:
```C++
int total(int mask, int day){
    if(mask == ((1<<k) -1)) //All products have been bought.
        return 0;
    if(day == -1)
        return INF;

    int ans = INF;
    for(int i=0; i<k; i++)
        if(mask & (1<<i) == 0) //Product i hasn't been bought yet.
            ans = min(ans, total(mask | (1<<i), day-1) + price[i][day]);

    //Not buying anything
    ans = min(ans, total(mask, day -1));

    return ans;
}
```
Optimizing the above code by memoizing:
```C++
int dp[1<<k][n]; //Initially all values set to -1
int total(int mask, int day){
    if(mask == ((1<<k) -1))
        return 0;
    if(day == -1)
        return INF;

    if(dp[mask][day] != -1)
        return dp[mask][day];

    int ans = INF;
    for(int i=0; i<k; i++)
        if(mask & (1<<i) == 0)
            ans = min(ans, total(mask | (1<<i), day-1) + price[i][day]);

    ans = min(ans, total(mask, day -1));
    return dp[mask][day] = ans;
}
```
The above code runs in $O(nk2^k)$.

#### Some dp+bitmask problems:
- [Codeforces](http://codeforces.com) 
    1. [8C](http://codeforces.com/problemset/problem/8/C)
    2. [71E](http://codeforces.com/problemset/problem/71/E)
    3. [743E](http://codeforces.com/problemset/problem/743/E)
- [Codechef](https://www.codechef.com)
    1. [GEEK04](https://www.codechef.com/problems/GEEK04)
    2. [TSHIRTS](https://www.codechef.com/problems/TSHIRTS)
