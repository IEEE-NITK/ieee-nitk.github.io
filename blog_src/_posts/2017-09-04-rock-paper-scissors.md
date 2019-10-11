---
layout: post
title: "Rock Paper Scissors"
author_github: sssachin300
date: 2017-09-04 10:00:30
image: '/assets/img/'
description: 'A deeper look into a popular childhood game'
tags:
- Game Theory
- Strategy
categories:
- Diode
github_username: 'sssachin300'
---

If you have ever played the game of rock, paper scissors I bet that the best strategy you had was trying to predict your opponent's move which is a pretty appealing idea. But given that it is nigh impossible to do that (unless, of course, you can read minds), is that really a sound strategy to adopt? If you think about it in a rational way there is no method to predict your opponent and basing your strategy on such an unpredictable thing is kind of dumb. I think the best approach to this problem is to make sure your opponent doesn't beat you more than half the time.  If both players play random moves, then both have an equal probability of winning. If there's a pattern in your moves, in a large number of matches your opponent can easily figure it out and increase his winning chances considerably. So the obvious thing to do is to randomize your moves. This, you can do, in a number of ways and I leave it to you to find them out: P

Now the situation changes entirely when you introduce a third party in the game and all three of you play simultaneously. Try to think of a strategy which you can use here.

One strategy would be to play rock all the time and tell this to them. If the other two play rock, then it is a draw. If one of them plays scissors, then they lose to the rock. If they play paper, then there's always a chance that the other plays scissors and wins but in turn the other player would lose to the rock. This makes it obvious that there is no way for one to beat both you and the other person at the same time.

This is what **Game Theory** is all about. Popularized by Nobel laureate **John Nash** (notice the name of the article 😉) game theory deals with forming strategies to get the best possible moves you can make without ignoring the self-interests that human beings have. Despite its name it not only deals with games but with any form of strategic decision making including politics, defence, economics, trade, traffic control etc.

## A look at a real world problem 

As a real world example I present to you the following problem on traffic lanes.

Suppose you are in a heavy traffic and want to change lanes (you cannot do that in my country India though, because we don't have many lanes ☹). When do you switch lanes? When the lane beside you are faster than the current one? Which is a good approach in the long run?

![Traffic](/blog/assets/img/rock-paper-scissors/traffic.jpg)

Let us first make the simple assumption that a lane is faster only because it has fewer number of vehicles. Suppose you are impatient and switch to the fast lane. If there aren't many who think like you, then it is your lucky day. If not, the fast lane will get crowded and become the slow lane. If everyone thinks in this way and stays in the same lane, then the lanes maintain their speed and you have to waste your time. So, either way, you can only do a successful thing provided the others don't think of the same strategy as you.

There is, in fact, a way out of this pickle. Pick a random amount of time (say t). After time to check the lane speeds. If the lane beside you are faster, then switch. Else stay in your lane. Repeat the process after time t.

Mathematicians have shown that if everyone adopted this strategy we would achieve an equilibrium state with both lanes having the same speed. Though this may not suit your individual preference (you would rather have the entire lane or even all the lanes to yourself) this is the best we can do while being fair to everyone.

The problem here is, of course, that it requires everyone on the road to have read game theory.

### References

1. Read Rock, Paper, Scissors: Game Theory in Everyday Life by Len Fisher.
2. [PittsBurgh Post-Gazette](http://www.post-gazette.com/opinion/Op-Ed/2013/02/03/The-Next-Page-Everyday-uses-for-game-theory-such-as-when-to-wash-the-dishes/stories/201302030375)
3. [Reference 1](http://ncase.me/trust/)
4. [Khan Academy](https://www.khanacademy.org/economics-finance-domain/microeconomics/nash-equilibrium-tutorial)