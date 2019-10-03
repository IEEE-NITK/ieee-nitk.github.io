---
layout: post
title: "A future called Quantum"
author_github: SidDsloth
date: 2019-10-03 23:11:00
image: '/assets/img/'
description: 'This post tells us about the basics of Quantum Computing and its impact on various fields.'
tags:
- IEEE NITK
- CompSoc
- Quantum Computing
categories:
- Compsoc
github_username: 'SidDsloth'
---
# Introduction
>Life is not just made of a good(1) or a bad(0) experience it is a superposition of such experiences.$$\qquad\qquad\qquad\qquad\qquad\qquad\qquad\qquad\qquad\qquad$$ --Manav

Then why do we only think and hear of binary when it comes to information transfer in computers? Presenting to you a new field, called Quantum Computing which works on the superposition of two bits you constantly hear about the 0 and the 1 to give a qubit. 

In this realm we believe that the information is stored in $$|\varphi$$> a ($$\alpha\;$$|0>+$$\beta\;$$|1>) state wherein $$\alpha ,\beta$$ are the respective coefficients of |0> and |1> ( |0> is the matrix $$\begin{bmatrix}1\\0 \end{bmatrix}$$ and |1> is the matrix $$\begin{bmatrix}0\\1 \end{bmatrix}$$).

Like the common binary gates which exist, drawing parallel in this field we have the **Quantum Gates**.

i) **Quantum NOT Gate(X)**:
NOT |0> = |1> 
NOT |1> = |0>
Therefore X is basically the matrix: $$\begin{bmatrix}0 & 1\\1 & 0\end{bmatrix}$$

ii) **The Hadamard Gate(H)**:
H |0> =$$\quad \frac{|0>+|1>}{\sqrt 2}$$
H |1> =$$\quad \frac{|0>-|1>}{\sqrt 2}$$
Therefore H is basically the matrix: $$\frac{1}{\sqrt 2}\begin{bmatrix}1 & 1\\1 & -1\end{bmatrix}$$ 

iii) **Controlled NOT Gate(CNOT)**:
  ![](https://quantum.country/assets/cnot-1x.png)
This gate is such that the implementation of the NOT is controlled by a control qubit( Filled Dot) while the unfilled dot is the target qubit. If the control qubit is set to 1, as in the states of |10> and |11>, then it flips (i.e. NOTs) the target qubit or else it does nothing.
Therefore: 
CNOT |00>=|00>
CNOT |01>=|01>
CNOT |10>=|11>
CNOT |11>=|10>

From these basic quantum gates, the various AND, OR or XOR gates can be implemented.

**Measuring a Qubit :**   If I give you a qubit without telling you $$\alpha$$ and $$\beta$$ is there a way for you to figure it out? Well the answer is *NO*!
The amplitudes are thought as hidden information. So information extraction works by *measurement in the computational basis*. Suppose a qubit is in the state $$\alpha\;$$|0>+$$\beta\;$$|1>, when you measure this qubit in the computational basis it gives you a classical bit of information(0 or 1): it gives you the outcome |0> with probability $$\alpha^2$$ and the outcome |1> with probability $$\beta^2$$.

## Now why is this field INTERESTING and what are its PROSPECTS?

**Quantum Networking**
Qubits are being used for creating secrets keys using random strings of 0s and 1s which can be used to encode classical information, this application being called quantum key distribution (QKD).
QKD involves one party, say Alice, sending qubits to Bob, who measures the qubits. Only for certain types of measurements will Bob get the same value that Alice encoded in the qubits. Alice and Bob can compare notes over a public channel to figure out what those measurements are, without actually sharing the qubit values. Using those private values they can create a secret shared key to encrypt classical messages. If an intruder were to intercept the qubits, Alice and Bob could detect the intrusion, discard the qubits and start over until no one is tapping their quantum channel.
Theoretically more is expected than QKD however qubits encoded using a photon’s polarization large amounts of quantum information is problematic. Photons get absorbed or scattered. Fortunately, there is a more robust way to exchange quantum information—via another property of quantum systems, called entanglement.

When two particles or quantum systems interact, they can get entangled. Once entangled, both systems are described by a single quantum state, so measuring the state of one system instantly influences the state of the other. Imagine two network nodes, Alice and Bob, each made of some isolated bit of matter. Such “matter nodes” can become entangled with each other via a process that involves the exchange of entangled photons. Using entangled matter nodes, Alice can exploit her share of the entanglement to send an entire qubit to Bob, without actually transmitting a physical qubit, making the transfer foolproof and secure. 

**Quantum Cryptography**
In this future basically the one thing cryptography relies on that is the lack of computation power of classical computers is not true anymore. Hence longer keys are the first line of defense against quantum encryption. Longer keys will make encryption slower and more costly, however the key length will have to increase substantially to stay ahead. Another option is to use symmetric encryption for the messages themselves, then use asymmetric encryption just for the keys. 

**Quantum Machine Learning**
*Now why is this arena brimming with excitement?*
AI systems are given large amounts of data to analyse and classify. Quantum computers will give the edge in accessing more computationally complex feature sp1aces. They would also perform feature scaling on complex data structures. 
Right now qubits struggle to remain in a quantum state for more than a few hundred microseconds even in a highly controlled laboratory environment however need to remain longer for calculations.
Recently Google even published a paper on ***Quantum Neural Networks***, highlighting the design of it in a world where such a computer would exist.

**Humans too are currently in that superposition state(|success>) where $$\alpha$$ of the world is preparing for a post-quantum world while the other $$\beta$$ is still working in making it a reality!**
