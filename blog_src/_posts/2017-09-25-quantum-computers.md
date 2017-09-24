---
layout: post
title: "Quantum Computers and The Future of Computation"
author_github: sampathkoti
date: 2017-09-18 10:00:30
image: '/assets/img/'
description: 'A look at the future of computing'
tags:
- Quantum Computing
categories:
- CAS/SPS
github_username: 'sampathkoti'
---

## Background:

Quantum Mechanics a realm of physics where the tiny subatomic particles reside and whose physics is beyond the perception of the classical physical world.

### 1] What makes this realm so weird and different in working?

The behaviour working of these particles   was resolved by proposing of a mathematical model governed by the principle of Superposition, entanglement and tunnelling.

Quantum Computers makes use of these physical phenomena to do it calculation and this is where the speciality of the futuristic computing machines lies.
 
The first ever made quantum computer (fig 1)

## Breaking The Myth of Superposition Theorem

Before dwelling into the topic, I would like to make one thing clear the superposition as taught by many is not a particle being at different position at a given time but it is the probability of the particle wave density being distributed at different positions in space time but does exists at only one found position at that given time.

### Qubits

A quantum computer maintains a sequence of qubits. A single qubit can represent a one, a zero, or any quantum superposition of those two qubit states a pair of qubits can be in any quantum superposition of 4 states, and three qubits in any superposition of 8 states. In general, a quantum computer with **N* qubits can be in an arbitrary superposition of up to 2^N{\displaystyle 2^{n}}different states simultaneously.

The qubits can be made of quantities which obey the principles of Quantum Mechanics i.e. an electron spin or a proton spin can be considered as qubits where spin up represents a 0 state and spin down represents a 1 state or they can also be represented using polarised light meeting its applicability.

## What Makes Quantum Computers so Special?!

The ability of these machines to perform tasks in seconds or minutes that would require years and years or wait!!  Sometimes impossible to perform with even the so called present day super computers makes them special.

### Speed Of Quantum Computers And Shor's Algorithm

The enhanced speed of quantum computers in relative to the classical computers is the way that the problems are being solved i.e. using the basic laws that govern the realm of Quantum Mechanics.

I will try and give an analogy for the methods.

### 1} The Football Analogy For Shor's methods

Suppose say we need to calculate the height from which a soccer player needs to kick the ball with certain force at a fixed distance from the goal, so that he scores a goal.

### What Would Our Classical Computer Basically Do?

It takes in the specified value of the force applied at specific angle and the distance from the goal. Each time the ball is placed at different values of height and checks whether it would reach the goal or not. So, say there are heights from 0-500 and assuming it does calculations only for integers (just to simplify), computing needs to be done for 500 cases and the sample out the right one to give the output, that means it takes 500 steps to complete the task give.

*What Would Our Quantum Computers Do?*

Say the same initial condition are given to the quantum computers, because of its speciality of handling properties like superposition, it would distribute the probability of football being at various places from 0-500 simultaneously and checks   whether it would reach the goal or not and give the output in just one step.

This is a simple case consideration, what if have 100000000 positions to check our classical computers would take a back seat, this is where the computational difference.

### 2} The Maze Analogy Grover's Algorithm

Consider a problem at hand is say the computer needs to find the way out

*What Would Classical Computers Do?*

Present computer puts a person or any object at the centre and tries all different ways to come out of the maze until it finds the right path out, so it need to run these steps several times.

*What Would Our Quantum Computers Do?*

The quantum computers would work on superposition it would consider the object as if its probability density is spread all over the 3D space and it would consider them as different state probabilities and send it different path to check whether that (ball) object would reach out or not, in this case the computation would also involve the property of entanglement and tunnelling to determine the final out put in a single step.

 

*A] Shor's algorithm* - exponential speedup of factoring – Depends on fast quantum technique for finding the period of a periodic function

*B] Grover's algorithm*  – quadratic speedup of search – works by gradually focusing an initially uniform superposition over all candidates into one concentrated on the designated element. Speedup arises from the fact that a linear growth of the amplitude of the desired element in the superposition causes a quadratic growth in the element's probability.



## Encryption : Is Quantum Computing A Threat To Encryption

Encryption is the conversion of electronic data into another form, called ciphertext, which cannot be easily understood by anyone except authorized parties.

## When Encryption Meets Quantum Computation

Communication security today is almost universally ensured by the use of RSA encryption. This method relies on the inaccessibility of large prime factors of a large composite number. The problem is an artificial one: The encrypter takes two (or more) large primes and multiplies them. The decrypter tries to work backwards from the product to the factors. It is hard work. The largest number factored so far RSA-640 had 193 decimal digits and took approximately 30 2.2GHz-Opteron-CPU years, over five months of calendar time. At that rate a 1024-bit number, the size currently recommended by a commercial, would take many years bit is short for binary digit each additional bit contributes a factor of 2 to the size of the calculation). The site adds For more security or if you are paranoid, use 2048 or even 4096 bits.

A quantum computer of suitable size could factor these large numbers in a much shorter time. For a 1024-bit number, Shor's Algorithm requires on the order of 1024 cube, about one billion, operations. I do not have any information on how quickly quantum operations can be executed, but if each one took one second our factorization would last 34 years. If a quantum computer could run at the speed of todays electronic computers (100 million instructions per second and up) then factorization of the 1024-bit number would be a matter of seconds.

The most interesting quantum algorithm as far as cryptography is concerned is Shor's algorithm, called "one of the major scientific achievements of the late 20th century" by renowned complexity theorist Scott Aaronson.

Shor's algorithm brings an exponential speed-up for solving the factoring, discrete logarithm (DLP) and elliptic-curve discrete logarithm (ECDLP) problems that are widely used in cryptographic applications. Be it TLS, SSH or IPSec, most secure communication protocols rely one way or another on Diffie-Hellman key agreements (which rely on DLP or ECDLP's hardness), on digital signatures (DSA, ECDSA, or RSA-PSS signatures), or on public-key encryption (ElGamal, RSA-OAEP). Shor's algorithm thus potentially breaks all these algorithms and with them all the public-key cryptography mechanisms deployed on the Internet.

So is our today's information at threat!

For now, it would be a yes as present encryption techniques are vulnerable to the unmatched speed of quantum computers.!!!!

## Quantum For A Quantum

Of course, the threat isn't there yet. More importantly, people are beginning to pay attention, including the NSA. The threat to encryption posed by quantum computing isn't unsolvable. The same mechanism that makes it vulnerable can also turn it "quantum computing-proof" so to speak.

There is such a thing as quantum cryptography, which uses photon-based qubits to securely transmit information encoded into the quantum states of particles. This quantum communication makes it possible for the recipient to detect attempts to intercept incoming messages. And it isn't exactly new.

Its applications include what's called the quantum key distribution(QKD). Basically, it uses quantum communication to share keys securely, which will be used to decrypt messages sent over conventional networks. Unfortunately, low bandwidth makes the system currently untenable, despite having been demonstrated to work in several cities.

This is just one possible work around. Other methods are being developed, including code-based cryptography and lattice-based cryptography. In any case, there's time to improve it. In the same way that quantum computing is still being refined, network infrastructure can be improved to allow for quantum secure cryptography.


## For The Interested Ones

1. Shor's algorithm: [**www.youtube.com/watch?v=FA21Dj2l3Ac**](http://www.youtube.com/watch?v=FA21Dj2l3Ac)

2. Maze analogy: [**https://www.nature.com/articles/ncomms11682**](https://www.nature.com/articles/ncomms11682)

3. Quantum crypto: [**http://www.popsci.com/what-is-quantum-cryptography**](http://www.popsci.com/what-is-quantum-cryptography)

4. Cryptography: [**https://www.youtube.com/watch?v=Kf9KjCKmDcU&amp;list=PL7AEDF86AABA1AA9A**](https://www.youtube.com/watch?v=Kf9KjCKmDcU&amp;list=PL7AEDF86AABA1AA9A)

5.  IBM: [**https://www.youtube.com/watch?v=jf7D8snlsnQ&amp;feature=youtu.be**](https://www.youtube.com/watch?v=jf7D8snlsnQ&amp;feature=youtu.be)