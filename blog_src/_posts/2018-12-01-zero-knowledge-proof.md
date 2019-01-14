---
layout: post
title: "Zero Knowledge Proof"
author_github: arpi-r
date: 2018-12-01
image: '/assets/img/'
description: 'An introduction to Zero Knowledge Proofs, an abstract and fascinating concept in Applied Cryptography'
tags:
- ZKP
- Cryptography
categories:
- Compsoc
github_username: 'arpi-r'
comments: true
---

## Introduction

![Introduction](/blog/assets/img/ZeroKnowledgeProof/introduction.jpg)

In cryptography, *zero knowledge proof* or *zero knowledge protocol* is a method by which one party proves to another party that they know some kind of secret without revealing any information about the secret, except the fact that they know it. This principle is based on an algorithm that takes some data as input and returns either *true* or *false*.

## Understanding the concept behind ZKPs
The complexity of zero-knowledge proofs results in them typically being described with abstract examples, which elucidate the concept well.

**Example 1:**

Suppose there is an underground cave with a door at the end of the cave that can only be opened with a magic word. Alice claims that she knows the word and that she can open the door. At the beginning, Alice and Bob are standing at the entrance (point P). Alice enters the cave and reaches a fork (point Q). Bob cannot see Alice from the entrance and the game starts:

- Alice chooses to go either right or left
- After Alice disappears into the cave, Bob comes to the fork
- Bob asks Alice to come up from either the right or left
- If Alice knows the magic word, she can come up from the requested side. She may have to use the magic word (if she’s on the wrong side) or she can just come up without using the magic word (if she is at the right side). So, Alice may come up from the correct side even if she does not know the magic word by guessing Bob’s challenge with a probability of ½.

![Underground Cave](/blog/assets/img/ZeroKnowledgeProof/cave.gif)

When this is repeated multiple times the probability that Alice comes up the right side without knowing the magic word reduces to (½)<sup>N</sup> where N is the number of times the test is run.

**Example 2:**

Let us assume there is a colour-blind person and two balls, one red and one green. You would like to prove to the colour-blind person that these balls are of differing colours without revealing the individual colours of each ball. For this, you ask the colour-blind person to hide both balls under the table and bring one ball back up for you to see. After that, he should hide the ball back under the table and then either show the same ball or the other one. As a result, you can prove to the colour-blind person that the colours are different by stating whether he changed the balls under the table or not.

Obviously, the other person might think that you were just lucky and is not yet completely convinced that both balls have different colours. Zero-knowledge proofs solve this problem by repeating the experiment over and over again. After every round, your chance of being consistently right by pure luck goes down by half.

So by repeating this experiment N times, the probability that you guessed right every time, when the balls were truly identical, reduces to (½)<sup>N</sup> , which is very unlikely.

## Why are Zero Knowledge Proofs required?

Enterprise businesses would not like to share their proprietary information which can get into the hands of hackers or their competitors. Businesses also want to ensure that the information is securely delivered to the intended party. Ordinary blockchains can accomplish this, but with Zero Knowledge Proofs, businesses can share proofs about the data without sharing the data itself.

ZKP can impact any industry which involves transactions, identity systems, and other proprietary information. ZKP can be used as a diligence, security, and verification tool in some of the most highly regulated industries like financial services, insurance, audit firms, and retail just to name a few.

A few start-ups and enterprises like ZCash, QED-it, ING and Nuggets use ZKP as a part of their blockchain applications. *Blockchain* provides a *decentralized database*, or *digital ledger*, of transactions that everyone on the network can see. This network is essentially a chain of computers which must all approve an exchange before it can be verified and recorded.

Zero-knowledge Proof enables the transfer of assets across this distributed, peer-to-peer blockchain network with complete privacy. In regular blockchain transactions, when an asset is sent from one party to another, the details of that transaction are visible to every other party in the network. However, in a zero-knowledge transaction, the others only know that a valid transaction has taken place, but nothing about the sender, recipient, asset class and quantity. The identity and amount being spent can remain hidden.

![Applications](/blog/assets/img/ZeroKnowledgeProof/application.jpg)

## Conclusion

Zero Knowledge Proofs are computationally expensive. Although ZKP technology has been around for decades, it has started gaining importance now. The ability to verify sensitive information like the amount of a transaction, passwords and other identifiable data without actually revealing the data has become more valuable for everyone with the rising presence of bad actors. I believe that this technology will be used extensively in solving privacy problems in the near future.

## References

- [https://blog.goodaudience.com/what-is-zero-knowledge-proof-and-why-you-should-care-36977d738339](https://blog.goodaudience.com/what-is-zero-knowledge-proof-and-why-you-should-care-36977d738339)
- [https://blockonomi.com/zero-knowledge-proofs/](https://blockonomi.com/zero-knowledge-proofs/)
- [https://medium.com/@argongroup/on-zero-knowledge-proofs-in-blockchains-14c48cfd1dd1](https://medium.com/@argongroup/on-zero-knowledge-proofs-in-blockchains-14c48cfd1dd1)
- Cryptography and Network Security - Forouzan