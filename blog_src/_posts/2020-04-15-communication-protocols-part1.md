---
layout: post
title: "Communication Protocols Part 1"
author_github: rmhanchate
date: 2020-04-15 12:10:44
image: '/assets/img/'
description: 'Getting familiar with Communication Protocols. This blog is the first part of the series.'
tags:
- Communication
- Protocols
- Synchronous
categories:
- Diode
github_username: 'rmhanchate'
comments: true
---
## Introduction

Consider a multiplayer game that involves two or more participants. As there are many multiplayer games on an online platform, there's always a need to be a proper collaboration between the players. A game is only as good as its rules, and how well we play the game is defined by how well we follow the rules. Often, players ignore these "protocols" and end up messing the system with no result and just chaos. From this, you may guess these "protocols" are not just a necessity in games, but most of the aspects of life. Users (which include you and your online friend) need to communicate through a network to help simplify things.

It involves "communication networks" which are a collection of methods that users employ to pass on valuable information. But what if illegitimate details are being passed on which is against the common man's beliefs, or maybe the devices failed to communicate with each other because they didn't talk in an organized manner or some unknown reason.

In any communication network, it's rules and regulations are essential for the smooth functioning of it. Similarly, in this electronic world, communication protocols are crucial for proper operating of the electronic system with each other. 

So anyone might raise a question: what do these communication protocols indicate in the Electronic world? We know that the set of rules and regulations is called a Protocol. Also, we can define communication (in general) as an exchange of information from one point, place, or system to another in a mutually accepted code understandable by both the sender and receiver. So through these sort of statements, we can define communication protocols, in terms of the electronic world, as a set of rules and regulations which ensure the flawless transfer of digital information within a system of two or more electronic networks.

We can classify these protocols into two parts based on a communication channel, aka wired (like commonly used USB cable) and wireless (like Bluetooth/WiFi). Well, you know what these mean, but this is a vast division. 

Let us now concentrate our thinking on wired communication in a system where two or more electronic devices are present on it. Each packet is transmitted and received over a network. The packet contains binary data (ones and zeros that encode the contents of each message). As from basic knowledge of digital electronics, we know that electronic devices only understand binary language, or we can say that they transmit and receive information in the form of a bit or bits. Now maybe you think that why I highlighted these familiar words with almost the same meaning. Well, the tiny difference between these two words gives way to two further divisions for wired communication, i.e., serial and parallel.

Serial communication means that while communicating, only 1 bit of information/data is passed at a time. Still, on the other hand, in Parallel communication, quite a few bits are sent at a time.

![img](/blog_src/assets/img/Compro1/opmyfRvgD9xbWHuRU0GmT3aHDgAv5w0H1hpWXHYthAOikFenCJb8aKsmFLEZiNB_3rCSImpF80PgXE9XFTydsdpDs8fESjYLicvZ1fb3tYISJLoNjBFdz3LnAuEFKL0v6gJR3ekN.jpg)

Their advantages and disadvantages can be deduced from their definitions only.

| Serial                                                       | Parallel                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| An only a single bit is getting transferred at a time so data transfer rate slow. | Multiple bits are passed at the time, so transmission is fast as compared to Serial |
| Serial Transmission is used for long-distance as less probability of cross talk. | Parallel Transmission is used for a short distance as quite high chances of cross talk due to multiple wires |
| Fewer wires/pins in a serial cable, which significantly reduces the size and thus the cost. | More wires/pins increase size, and thus the overall cost.    |
| It requires a select type of converters to convert data into the serial form. | There is no such requirement of converters in parallel transmission systems |
| Examples: USB, I2C etc.                                      | Examples: PCI, SCSI, ISA etc.                                |

The decreasing cost and better performance of integrated-circuits have led to serial communication being used in favor of parallel communication.

### **Serial Communication**

The most common serial communication system protocols can be classified under the following categories:

1. Asynchronous
2. Bit-Synchronous
3. Synchronous

#### Asynchronous

A protocol which is not governed by a clock pulse, they don't have to wait until the clock changes. The state of the system changes as soon as the input change. Bits of information are transmitted between two devices at an arbitrary point of time. RS-232, RS-422, RS-423, and RS-485 are some of the recommended standards (RS-XXX) of the Electronic Industry Association (EIA) for asynchronous serial communication. They also specify the communication system characteristics of the hardware, such as voltage levels, terminating resistances, cable lengths, etc. 

![img](/blog_src/assets/img/Compro1/BIJYViEh-aABuJnQqmPPzVhNDMKjIJFAw6VGRdCd8OvVct8bD4FlU9149DiI7TlRPGWUgxHq3XNBuKDJkXotl-RFH4QObPULzi7MgSVsvu8HiNZa1VJEDpMz_Siz2HT4qBHORM1H.jpg)

#### Synchronous

In contrast to Asynchronous protocols, in this type of protocol, clock signal wire is used by both receiver and sender to sample data. Synchronous data transfer with variable speed devices goes as fast as the slowest device involved in the transmission. This communication passes more information at a constant rate.

#### Other Classifications

The other type of classification we can do is based upon the type of external or internal data transfer i.e.

1. Intra: Communication between devices inside a single system
2. Inter: Communication between devices of two or more different systems



### Some Important Points

Before we jump into the individual protocol details, you need to look upon some essential terms which we will be using frequently:

1. A full-duplex system means data can be sent and received simultaneously. On the other hand, Half-duplex is referred to the method wherein data can be sent or received. It cannot be done at the same time.
2. Master/slave describes a bus where one device is the master, and others are slaves. These buses are usually synchronous, as the master often supplies the timing clock for data being sent along in both directions.




So, this concludes the introductory part of our series of blogs. To give you an idea of the further topics, the following diagram depicts the topics which will be covered in the upcoming blogs of this series.

![img](/blog_src/assets/img/Compro1/M2tjsegWNC1ddIIXDq8PW7oOq-L9OjAM6MuJ11rs8OAl_PTHuhOQBGioTKztW1yWAHlbHhAx1WkSLb5EQm6GM5rGhnnAPKQsMvfyXnu0fv_CfuKkAMW7_ntvUBYFwS7ybKKNjdLw.jpg)
