---
layout: post
title: "Quantum Supremacy: Is it hyped?"
author_github: ShashankP19
date: 2018-06-23 10:00:00
image: '/assets/img/'
description: 'This article talks about advantages of a quantum computer and challenges faced in building them'
tags:
- Quantum Computing
categories:
- CompSoc
github_username: 'ShashankP19'
---

The term **quantum computer** has been buzzing around in recent years. But what is a quantum computer? Have they been built? How are they different from a classical computer? What kind of problems do they solve? Do I need to be an expert in physics to understand them?(Not really!).  These may be some of the questions arising in your mind when you hear someone say "quantum computer". In this article, I will address these questions by giving a basic understanding of quantum computer and what makes it so special.

## Fundamentals

All the electronic devices that we use in our daily lives are classical. They work on streams of classical bits. These classical bits are represented mathematically in binary digits, 0 and 1. The basic building blocks of a quantum computer, however, is something known as a **qubit**. A classical bit is either 0 or it is 1, it cannot be both at the same time. But a qubit can be in states 0 and 1 simultaneously. This property of being in multiple states simultaneously is called **superposition**. 

![Difference between classical bit and qubit ([image credit](http://qoqms.phys.strath.ac.uk/research_qc.html))](/blog/assets/img/quantum-supremacy/qubit.png)

In a classical computer, a bit is represented physically as two distinct states of a system. It could be two distinct levels of voltage or current, two stable states of a flip-flop, two directions of magnetizations, etc. A qubit can also be represented physically. Qubit is not just a theoretical concept. Some of the physical realizations of a qubit are using **polarization of photon** and **electron spin**, there are many more ways. In fact each quantum computer that is being built today uses a different type of physical representation.

The process of finding out the value of a bit is called **measurement** of the bit. Classical measurement is very obvious, you simply find out the value of the bit. If the bit turns out to be 0 then you know that it is 0 for sure, if it is 1 then you know that it is 1 for sure. There is no problem with classical measurement. However, this is not the case with qubit measurement. Measuring a qubit forces the qubit to take the state of 0 or 1, but not both. Hence the **superposition is lost** once a qubit is measured. Upon measuring, the qubit is said to have “**collapsed**” to either state 0 or 1. If you measure this same qubit for the second time it gives the same result as first measurement. You can say that measurement process has converted the qubit to a classical bit. There is something even more interesting. 

A qubit in superpostion has some probabilities of being in state 0 or 1. When this qubit is measured it collapses to 0 or 1 based on these probabilities. The only way of finding these probabilities is to measure infinite copies of the same qubit and counting how many times it gives 0 and 1.   To better understand measurement, think about a coin toss as analogy. When the coin is in air, it is in superposition of two states – head and tail. Probability of getting head or tail depends on the inherent property of the coin. Here,  a coin is said to be “measured” when it falls flat and shows either head or tail. “Superposition” of the coin is lost when it is “measured”.

![Measurement of qubit ([image credit](https://www.clerro.com/mobile/guide/580/quantum-computing-explained))](/blog/assets/img/quantum-supremacy/measurement.png)

## What makes it special

#### Parallelism:
Lets go beyond a single qubit to multiple qubits. If there are two qubits then there are four states (00, 01, 10, 11) in superposition. So a two qubit state can represent all possible 2-bit states (which are 4 in number). A 100 qubit state can represent all possible 100-bit states, which is 2<sup>100</sup> states, at once. That is a very very very huge number! A quantum computer can parallelly compute all these states. It is this power of parallel computation that greatly sets it apart from a classical computer. Parallel computation in classical computers requires that number of hardware components be in the order of (N). While for quantum computers, the number of qubits required is of order (log(N)). 

This property of parallelism can be used to solve problems that classical computers cannot solve. For example, the problem of finding factors of an integer is a hard problem. Currently, there exists no classical algorithm that can solve the factorization problem in polynomial time.  1994, a mathematician named Peter Shor devised a **quantum algorithm** to solve the factorization problem in polynomial time (polynomial in log N, which is the size of the input). This algorithm is called **Shor’s algorithm**.  Another problem is the search problem – search for an element among N elements. The best classical algorithm has complexity - order of N. However, there exists a quantum algorithm named **Grover’s algorithm** which can solve the search problem in order of <span>&#8730;</span>N. 

### Cryptography
Quantum computers play an important in cryptography. The security of existing cryptographic algorithms depend on the hardness of problems like integer factorization and discrete-log problem. But quantum computers can solve these problems in polynomial time and hence can break systems like RSA encryption, Diffie-Hellman key exchange protocol easily. This is scary! However, on the brighter side, quantum computers open up a new area of cryptography where private keys can be exchanged with **perfect secrecy**. Using the property of superposition, it is easy to generate **truely random keys** and it is also possible to send these keys across a public channel with perfect secrecy. Perfect secrecy is the ultimate goal of cryptography which can be fulfilled by a quantum computer.

### Simulations 
The most important advantage of a quantum computer is that it can be used to **simulate quantum mechanical experiments**. No classical computer can simulate these experiments with 100% accuracy. Remember, the whole world is quantum, not classical! Hence quantum computers will help in the progress of scientific research and greater understanding of our universe.

## Challenges 

Building a quantum computer is certainly not easy. The field of quantum computation is still in its infancy, just like how classical computers were a few decades ago. There are many challenges to overcome before one can build a **true quantum computer** that can be made available for general use. Quantum computers are extremely **sensitive to the environment**. This is because interaction with the environment causes the state of qubits to collapse. Isolating quantum computers is a very difficult engineering problem. Just like classical gates, there are **quantum gates**. The implementation of these quantum gates physically are likely to cause **errors**. The registers storing qubits may have already been affected by the environment before the computation even begins.  Also greater the number of qubits in quantum computer, greater is the “**noise**” present in it, which leads to incorrect computations.

We take copying data for granted in classical computer. However, in quantum computation copying unknown data is not possible. In fact there is a theorem to prove it called **no-cloning theorem**. So any specific unknown state cannot be determined. This means that unless the state is specifically created, we have limited ability to control it.

## Race for supremacy

Humans have never given up when it comes to overcoming challenges. This applies to quantum computation as well.  Extremely great computation power to solve unsolved problems is the driving motivation for ongoing research and engineering in this field. Hence there is lot of competition among companies to build a quantum computer that surpasses the computation capabilities of classical computers.  This potential ability of a quantum computer to solve problems that classical computers cannot solve is called **quantum supremacy**. The term “quantum supremacy” was coined by John Preskill, a theoretical physicist at the California Institute of Technology. 

Companies like IBM, D-Wave, Google, Intel, Microsoft are the major players in this field now. D-Wave is the first company to sell quantum computers commercially. In January 2017, D-Wave released a 2048-bit quantum computer named **D-Wave 2000Q**. But this is not a true quantum computer. "The Holy Grail of quantum computing to build a **'universal' quantum computer**—one that can solve any computational problem—but at a vastly higher speed that today's computers," Hilton told EE Times. "That's the reason some people say we don't have a 'real' quantum computer—because D-Wave's is not a 'universal' computer."  

![Google's Bristlecone ([image credit](https://ai.googleblog.com/2018/03/a-preview-of-bristlecone-googles-new.html))](/blog/assets/img/quantum-supremacy/bristlecone.png)

Google has been claiming recently that it would achieve quantum supremacy in the near future. Google’s latest quantum processing chip with 72 qubits, called **Bristlecone**, has been predicted to achieve quantum supremacy. There are still a lot of tests to be conducted though, to claim this achievement. IBM has also been investing a lot in building a universal quantum computer and boasts of a 50 qubit processor. IBM has created an online platform, named IBM Q Experience, which allows access to their [5-bit quantum computer for free](https://quantumexperience.ng.bluemix.net/qx/experience) and 16-qubit computer for some cost. They have good documentation to help you get started with using them.      

But should quantum supremacy be the main objective of building a quantum computer. Does the concept of quantum supremacy make sense? 

“You’ll struggle to find any [researcher] who likes the term ‘quantum supremacy,’” says Simon Benjamin, a quantum expert at Oxford University. “It’s very catchy, but it’s a bit confusing and oversells what quantum computers will be able to do.” 

“I don’t believe that quantum supremacy represents a magical milestone that we will reach and declare victory,” says theorist Jay Gambetta at IBM. “I see these ‘supremacy’ experiments more as a set of benchmarking experiments to help develop quantum devices.”

Some researchers have suggested that there should be focus on “**quantum advantage**” instead. Quantum advantage refers to the specific tasks that only quantum computers can do.  Other terms used for this are “**quantum ascendancy**” and “**quantum inimitability**”. 

Even John Preskill, who coined the term “quantum supremacy” published a paper in January 2018 published a paper in which he said quantum computing was about to enter a phase he called NISQ, or “noisy intermediate stage quantum,” where machines will have 50 to a few hundred qubits. “‘Noisy,’” he wrote, “means that we’ll have imperfect control over those qubits; the noise will place serious limitations on what quantum devices can achieve in the near term.” Preskill said he’s still convinced quantum computers will have a transformative effect on society, but that transformation, he concedes, “may still be decades away.”

## Resources

* [Use IBM's 5-qubit processor for free](https://quantumexperience.ng.bluemix.net/qx/experience)

* [Why D-Wave quantum computers have not yet brought quantum supremacy?!](https://www.linkedin.com/pulse/why-d-wave-quantum-computers-have-yet-brought-supremacy-kaiser)

* [Quantum Computing Is Going to Change the World. Here’s What This Means for You](https://futurism.com/quantum-computing-qa/)
