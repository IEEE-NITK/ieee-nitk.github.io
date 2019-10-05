---
layout: post
title: "An Introduction to Minimax Algorithm"
author_github: Shree987
date: 2019-10-04 20:00:00
image: '/assets/img/'
description: 'An algorithm to build powerful AI for games.'
tags:
- Artificial Intelligence
- Algorithms
- Strategy
- Game Theory
categories:
- CompSoc
github_username: 'Shree987'
comments: true
---
# An Introduction to Minimax Algorithm
Ever wondered how a computer is able to play wisely in games like Tic-Tac-Toe, Chess and Go? It all boils down to the ever-evolving Artificial Intelligence (AI). Now, what if I say that building powerful AI for such games is easy? Yes, you read it right. We can design powerful AI that can play games much better than you, me or pretty much everyone. As a first step towards this, I would like to introduce you guys to a pretty simple, yet essential algorithm for this task - **Minimax Algorithm**.

## What is Minimax Algorithm?
*Minimax* algorithm, sometimes also called *MinMax*, is a recursive or backtracking algorithm which is used to choose an optimal move for a player, assuming that the other player is also playing optimally. It is applicable only to 2-player games, where the opponent’s move is predictable beforehand. For eg. Minimax algorithm can be applied to games like Chess, Tic-Tac-Toe and not for games like Scrabble. It uses recursion to search through the game-tree. 
What is a **Game Tree**? Game-tree is the collection of all possible moves in a game that looks more like an inverted tree. To explain in simple terms, it is similar to looking into different possible moves from a particular game board situation and subsequent possible moves after them and so on or saying that “If I make this move, then my opponent has all these as his/her move”. **Game state** refers to the present board situation. Every possible state is represented as a node in the tree. All the possible moves from a state or node become the children nodes of this node (ie. are diverged from this node). So when all nodes get connected in this manner, it looks like an inverted tree called - *Game tree*. 

## Terminology
To start with, let us first look at some of the commonly used terminology used for this algorithm:
* *MAX* : Player whose chances of winning is to be maximised.
* *MIN* : Player whose chances of losing is to be maximised.
* *Initial state* : Comprises the position of the board and showing whose move it is.
* *Successor function* : A function that lists all the valid moves from the current state of board.
* *Terminal state* : Position of the board at the end of the game. This state determines the outcome of the game as either a win, a loss, or a draw, for MAX

## How does the algorithm work?
The main idea is to **maximize the chances of winning for MAX**. How do we do it? For that we assign a value (or weights) to every node of the game tree such that higher its value, the higher the chances of winning for MAX. Now we need to assign the values to the node in such a way that assures this mechanism. So in order for MAX to win, he/she needs to choose the maximum value out of the possible ones. And MIN has to make a move such that MAX is forced to choose the minimum value out of the possible.
Let’s apply this to an example. Suppose we have a game tree like the one shown. Suppose the weights of the last layer be given to us before-hand (as shown).The rule of the game says that the final value in the red triangle is the points achieved by MAX. So in order to win, MAX has to somehow make red triangle has the maximum value as possible. Also, the weights of the nodes in a layer can take any one of the values from the immediate nodes diverged from it.

![image for Game tree 1](/blog/assets/img/Minimax-algorithm/tree1.png)

Eg: Leftmost green triangle can take only 55 or 13, rightmost green triangle can only take 13 or 38 and the middle green triangle can take  43 or 62. The red triangle can take value from any of the green triangle.

Since MAX get to choose the value in the red triangle, MIN has to select values for the green triangle. In order for MIN to win, he/she chooses minimum value possible for each green triangle, thus forcing MAX to choose one among these low values assigned at green triangles. In games with more than 3 layers it is alternate way of maximizing and minimising at a layer of nodes, hence the process called **Minimax** - alternatingly maximising (MAX’s move) and minimising (MIN’s move) the possible values at nodes of the layer in a game tree. So to begin, MIN first fills all the weights (or values) in the middle layer, hence filling the values as follows.

> minimum(55,13) = 13

> minimum(43,62)=43

> minimum(13,38) = 13

![image for Game tree 2](/blog/assets/img/Minimax-algorithm/tree2.png)

The move of MAX is now restricted by the values in green triangles. In order to win the game, MAX must choose the maximum value possible from the 2nd layer and hence choose 43. The whole process can be simply written as:

> Result= MAX (MIN {55, 13}, MIN {43, 62}, MIN {13, 38}) = MAX {13, 43, 13} = 43

The final game tree looks like this

![image for Game tree 3](/blog/assets/img/Minimax-algorithm/tree3.png)

Now let's apply this to Tic-Tac-Toe game. This is how a basic game tree of a Tic-Tac-Toe game.

![Image for Tic-Tac-Toe 1](/blog/assets/img/Minimax-algorithm/tic_tac_toe1.png)

The initial state at the start of the game is the first layer that defines that the board is blank and it’s MAX’s turn to play. So we must try to maximise the value at this layer. The immediate successor layer is played by MIN, and hence must be minimized since we are assuming that both players play optimally. The next layer is again to be played by MAX and hence maximised and the process continues till the terminal states. So we begin by applying the utilities to all the terminal states. But **how do we determine the values at the nodes**? We just know only at the end of the game that a player has won or lost. Also observe that the terminal state (nodes from whom no more nodes branch off) are those where no more move is possible or in simple terms - where the game has ended. Giving weights to these nodes is easy. We need a way to keep the value high if MAX wins and low if MAX loses. These can be done by using the utilities as shown below.

Utilities used are as follows.
> 1 : MAX wins

> 0 : draw

> -1 : MAX loses

![Image for Tic-Tac-Toe 2](/blog/assets/img/Minimax-algorithm/tic_tac_toe2.png)

Then we start determining the utilities of the higher nodes by maximising/minimising the values obtained from the immediate previous layer, starting from terminal states similar to the way we did for the above example. With the help of this game tree, we can decide the layer to be chosen at the 1st layer to maximize the winning chances of MAX and continue to choose the best branch in order to win.

## Implementation
Here is a pseudocode for implementing the *Minimax* algorithm.
```
function minimax(node, depth, maximizingPlayer)
            if depth = 0 or node is a terminal node
                   return the utility of the node

            if maximizingPlayer
                   bestValue := 0
                   for each child of node
                        v := minimax(child, next depth, FALSE)
                        bestValue := max(bestValue, v)
                   return bestValue  

            else 
                   bestValue := 0
                   for each child of node
                          v := minimax(child, next depth, TRUE)
                          bestValue := min(bestValue, v)
                   return bestValue
```

## Bonus 
### Optimisation
The Minimax algorithm works well for smaller state space, or in other words, smaller board games. For eg., for a Tic-Tac-Toe game, there are 3<sup>9</sup>=196839 possible board combinations which can be easily calculated. But what about a game like chess? It has roughly ~10<sup>120</sup> possibilities, which is far greater than the number of atoms in the observable universe, and hence not a good idea to dive into. Then how do we tackle such a thing? Optimising the searching in the game tree is a key solution. Alpha-beta pruning is a promising algorithm in which certain sub-trees are cut-off from the game-search tree when there is a chance of choosing another sub-tree over this one. This reduces the state space to a much greater extent. You can read more about Alpha-Beta pruning algorithm from the following links:

[What is Alpha Beta Pruning in Artificial Intelligence? - Medium](https://medium.com/edureka/alpha-beta-pruning-in-ai-b47ee5500f9a)

[Alpha–beta pruning - Wikipedia](https://en.wikipedia.org/wiki/Alpha%E2%80%93beta_pruning)

## References

[Minimax Algorithm with Alpha-beta pruning](https://www.hackerearth.com/blog/developers/minimax-algorithm-alpha-beta-pruning/)


