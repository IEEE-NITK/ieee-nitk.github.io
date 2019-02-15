---
layout: post
title: "The Missing Circuit Element"
author_github: srsahith
date: 2019-01-14 21:30:00
image: '/assets/img/'
description: "A brief description to memresitors and it's applications"
tags:
- Memresistor
- Non Volatile Memory
categories:
- Diode
github_username: 'srsahith'
comments: true
---

# The Missing Circuit element

Leon Chau, an American circuit theorist at the University of California, predicted the existence of the fourth fundamental circuit passive element. The first three passive circuit elements are the resistor, capacitor, and inductor. We already have relationships among voltage, current, charge, and flux. The only relationship missing is that between flux and charge(q).
 
![Image 1](/blog/assets/img/the-missing-circuit-element/1.jpeg)

Memristor is the component that connects the dots. The diagram shows how memristor serves as a missing link and completes the symmetry of the diagram due to which it is famously known as **"The Missing Circuit element"**. Its symbol is.

![Image 2](/blog/assets/img/the-missing-circuit-element/2.jpeg)

|  Device       |  Characteristic property (units) |   Differential equation  |
|---------------|:--------------------------------:|-------------------------:|
| Resistor (R)  | Resistance (V / A, or ohm, Ω)    |   R = dV / dI            |
|Capacitor (C)  |  Capacitance (C / V, or farad)   |   C = dq / dV            |
|Inductor (L)   |  Inductance (Wb / A, or henry)   |   L = dΦm / dI           |
|Memristor (M)  |  Memristance (Wb / C, or ohm)    |   M = dΦm / dq           |

Memristor is a nonlinear, passive electrical two terminal component which relates magnetic flux linkage and charge. According to the characterizing mathematical equations, the memristor's resistance is not constant but depends on how much electric charge has flowed in what direction through it in the past; the device remembers its history. A memristor is often compared to an imaginary pipe that carries water. When the water flows in one direction, the pipe's diameter expands and allows the water to flow faster -- but when the water flows in the opposite direction, the pipe's diameter contracts and slows down the water flow. If the water is turned off, the pipe retains its diameter until the water is turned back on. To continue the analogy, when a  memristor's power supply is switched off, the memristor retains its resistance value. This would mean that if power to a computer is switched off, all the applications and documents that were open before the shut down would still be right there on the screen when the computer is restarted. When the electric power supply is switched off, it remembers the most recent resistance until powered again. The new two-terminal passive element is named memristor as it combines the behavior of memory and a resistor.

![Image 3](/blog/assets/img/the-missing-circuit-element/3.jpeg)

The image shows the schematic diagram of a memristor. On application of a positive bias across the electrodes the oxygen vacancies spread towards the undoped region which leads to an increase in conductivity. Now if we remove the bias, the device remains in this state forever theoretically. Similarly, application of a negative bias across the device pulls back the oxygen vacancies into the doped region thereby increasing the resistance of the device. So data is stored in memristor regarding resistance. A high resistance corresponds to one logic level, and low resistance corresponds to the other. In place of TiO2 other compounds such as HfO2 can be used.

## Classification of Memristors
Memristors can be classified into different types, depending on how they are built. Memristors are classified into two types, and a brief overview of different memristors is explained below.

![Image 4](/blog/assets/img/the-missing-circuit-element/4.jpeg)

1.Ionic thin film and Molecular Memristors
    Molecule and Ionic thin-film memristors mostly rely on different material properties of the thin film atomic lattices that display hysteresis below the application of charge.

2.Magnetic and spin-based memristors
      Spin-based memristors are opposite to ionic nanostructure and molecule-based systems and rely on the property of degree in electronic spin. In this type of system, the polarization of electronic spin is aware
## Applications
These promising characteristics may potentially revolutionize nanoelectronics. It can find applications in analog and digital circuits, which are part of everyday use systems such as sensors and mobile phones. Some of the most promising applications of memristors are:

The most observable application of a memristor is the memory. A memristor can store a single bit of data in DRAM – where the capacitors are restored with memristors. When compared to DRAM and SRAM, this kind of memory has many benefits like – it is non-volatile; it displays good scalability, and it has no leakage power. This type of memory is superior to flash memory regarding scalability and speed.

Memristors perform equally well like the biological synapses. This feature makes good building blocks in neuromorphic systems, where synapses and neurons are formed as electronic systems. This kind of memory has many benefits when we compare it with the DRAM and SRAM.
