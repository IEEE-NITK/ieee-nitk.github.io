---
layout: post
title: "Application of Neural Networks in Power Systems"
author_github: this-is-ac
date: 2020-03-13 23:32:44
image: '/assets/img/'
description: 'This blog explains how neural networks are used in power systems for applications such as load forecasting, security analysis and fault diagnosis.'
tags:
- IEEE NITK
- Power Systems
- Neural Networks
- Machine Learning
categories:
- Diode
github_username: 'this-is-ac'
---

# **Application of Neural Networks in Power Systems**

Have you ever heard of Machine Learning or Neural Networks, but you don't know their applications? Scroll down to find out!

For most beginners, the title itself might be a bit complicated to digest. So let's split it into its 2 major components - **Neural Networks** in **Power Systems.**

## **What are Neural Networks?**

Neural networks are a set of algorithms, modeled after the human brain, primarily designed to recognize patterns. To understand how a neural network works, one must know the related terminologies. [This](https://ieee.nitk.ac.in/blog/What-is-Machine-Learning/) is a blog that contains the basics of Machine Learning. It also includes the types of neural networks and learning patterns.

If you’re an athirst reader and have already gone through it or already know the basics, jump right in xD.

## **What exactly is a Power System?**

The power system is a network that mainly consists of generation, distribution, and transmission systems. The output electrical energy from a generator in a power plant is transmitted across lines and then supplied at the appropriate
value suitable for the consumers.

![img1](/blog_src/assets/img/Applications-of-Neural-Networks-in-Power-Systems/68e4e8f7b09faacb94cee0668038114b.png)

Let’s run through the 3 main subsystems

## 1.  **Generating Substation**

    The main components of this system are the generator and the transformer.
    The generator converts mechanical energy into electrical energy.

    Sources of mechanical energy are the burning of coal, nuclear fuel, or a
    hydropower plant. The transformer transfers the power with very high
    efficiency to ensure minimum losses.

## 2.  **Transmission Substation**

    This substation carries the overhead lines which transfer the generated
    electrical energy from generation to the distribution substations.

## 3.  **Distribution Substation**

    This substation connects all the consumers in an area to the bulk power
    sources.

    The transmission lines form the connection between the bulk power stations
    and generation substations.

## **But why use Neural Networks when there are several other AI techniques?**

1.  Ability to adapt and learn by example in real-time

2.  Fast Speed

3.  Real-time pattern recognition

4.  They can generalize and are known for their intelligent association.

## **Neural Network Application Areas in Power Systems**

![img2](/blog_src/assets/img/Applications-of-Neural-Networks-in-Power-Systems/a6b070f48cfe509264f8c5f7a071d50b.png)

Here are some of the most prevalent problems :

## **Load Forecasting**

The forecasting of electricity demand has become an essential research field as it plays a significant role in economic and financial development, expansion, and planning of electric power systems.

It is a difficult job as the load series is complex and exhibits several levels of seasonality but is a suitable problem for NN application due to the availability of historical load data on the utility databases.

Some of the factors influencing the load are Economic, Time, Weather, and other Random Disturbances.

Hence, they can be classified into 3 groups

-   Short-Term Load Forecasting

    Ranges from a few minutes to a week.

>   Some applications are economic load dispatch, real-time control, and energy
>   transfer scheduling.

-   Mid-Term Load Forecasting

    Ranges from a month to a year.

    They are mostly done to buy adequate fuel for power plants after calculating electricity tariffs.

-   Long-Term Load Forecasting

    Ranges from 5-20 years or more.

    It is used by engineers to find out the type and size of generating plants to minimize all costs.

Example of Short Term Load Forecasting using neural networks:

<!-- ![img3](/blog_src/assets/img/Applications-of-Neural-Networks-in-Power-Systems/b2a391379b56b8a80b9048295901b39b.emf)

Date: 09/04/2012 -->

![img4](/blog_src/assets/img/Applications-of-Neural-Networks-in-Power-Systems/9f9b14c7c8387a18adb56f643fec59b1.png)

Date: 13/04/2012

The architecture is trained by using a backpropagation algorithm with SIMULINK. The performance of the model was tested using hourly load data. A comparison of 24 hours ahead load forecasting and a specific load is shown above.

## **Security Analysis**

The main task of the power industry is to deliver the power requested by the customers, without exceeding acceptable voltage and frequency limits. This task has to be solved in real-time with consistency and must be safe and economical.

The real-time measurements of the system are stored in a database, and missing data is adjusted. Based on the values, the mathematical model of the power system is established.

Based on the simulation of potential equipment outage, the security level of the system is determined. If a system is considered unsafe concerning any potential outage, then control actions are taken.

There are mainly 2 types of security assessments: Static and Dynamic

The different operational states in both types are:

-   Secure state: In this state, all customer demands are met, and the operating limit is within existing limits.

-   Critical state: In this state, the system variables are still within limits, and constraints are satisfied, but little disturbance can lead towards instability.

-   Unsecured state: In this case, the power system enters the emergency mode of operation upon violation of constraints.

In realistic and modern power systems, the dimension of the operating system is enormous. Thus, the modeling of neural networks can help overcome this curse of high dimensionality.

E.g., Multi-Layer Perceptron with the backpropagation learning algorithm

## **Fault Detection and Diagnosis**

Fault detection and diagnosis are some of the challenging problems in power systems.

The Multi-Layer Perceptron identifies the type and location of faults with a given set of power system conditions, measurements, and alarms. A Kohonen net (basic self-organizing neural net) is applied to handle the classification of fault patterns.

The diagnosis is done to judge what kinds of faults the apparatus suffered from and then accordingly it is cleared.

## **Economic Load Dispatch**

ELD is one of the vital optimization problems in a power system. It ensures an optimal combination of power generating units are selected to minimize the total fuel cost while satisfying the load demand and several operational constraints.

Hopfield Neural networks or Feedforward Neural networks can be used for the same. It helps in sharing the system load including the system losses amongst the available generators. Hence, it is basically to minimize the cost of generation and supply of electricity to load subject to multiple constraints like limitation of generators, power balance and network stability. The problem is highly non-linear and complex.

The applications of neural networks are incredibly vast and not just limited to power systems. They are used in speech recognition, machine translation, character recognition, image classification, and a lot more!

The best course for beginners started with Basics of Machine Learning is [This Course](https://www.coursera.org/learn/machine-learning) by Andrew Ng.

## **References for further reading:**

-   <https://towardsdatascience.com/understanding-neural-networks-19020b758230>

-   <https://circuitglobe.com/power-system.html>

-   <https://pdfs.semanticscholar.org/e04f/7c1ad61ee36ce2b3989de9e693f29263589e.pdf>