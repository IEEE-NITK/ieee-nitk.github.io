---
layout: post
title: "DS1: A demonstration spacecraft and its communication aspects"
author_github: ashrikant39
date: 2020-01-07 07:00:00
image: '/assets/img/'
description: 'Deep Space 1: How and what does it do in Space?'
tags:
- RF transmission
- Antennas
categories:
- Diode
github_username: 'ashrikant39'
---

# Deep Space 1: How and what does it do on Space??
Deep Space 1 or DS1 is a satellite launched by National Aeronautics and Space Administration (NASA) in 1998 to serve its purpose as a technology demonstration spacecraft. It was launched to test various upcoming technologies in space, its conditions, outcomes, threats or limitations of the proposed technology etc. in real time in space rather than earthly simulations.
We are interested to learn how DS1 or any satellite in outer space carry out efficient communications to Space stations in Earth. For this, we must first be aware of Deep Space Network (DSN).
## Deep Space Network
Deep Space Network is a network of large antennas positioned in Earth to capture various signals from the spacecrafts, used to provide scientific data, instructions to spacecraft, health of the spacecraft etc. NASA has positioned three antennas on three locations on Earth, namely California, Spain and Australia, each oriented at an angle of 120 degrees with each other and are spread onto three equidistant points on Earth as above so that at any 
Each location has ultra-sensitive receiver systems with huge antennas namely
* High Efficiency Antenna (HEF) for high gain (34m in diameter)
* Two or more Beam Waveguide Antennas (BWG) (34m in dia)

and several other independent antennas for tracking the spacecraft.

![alt text](/blog/assets/img/ds1-a-demonstration-spacecraft-and-its-communication-aspects/images1.jpg)
![alt text](/blog/assets/img/ds1-a-demonstration-spacecraft-and-its-communication-aspects/images.jpg)
![alt text](/blog/assets/img/ds1-a-demonstration-spacecraft-and-its-communication-aspects/Dsn2.gif)

## Uplink and Downlink
Tracking of the satellite is mainly achieved by uplink and downlink communications by satellites and space stations on Earth. Uplink refers to communication from a space station to the satellite, whereas downlink refers to communication from satellite to station. When both uplink and downlink occur, it is referred to as Two Way communication. Communication is mainly done using RF signals (mainly microwaves, i.e. in GHz range). 

![alt text](/blog/assets/img/ds1-a-demonstration-spacecraft-and-its-communication-aspects/images2.jpg)
## Lag
Lag is another term that decides the efficiency of communication in DSN. It is the time gap between sending of signal by source and receiving it by the receiver. Lag should be taken care, as when a satellite sends signals for help, instant solutions to the problems must be ready, otherwise making it too late for anything more.
So back to our satellite DS1. 
 
DS1 also uses DSN as the network to downlink data. DS1 mainly transmits two kinds of data :
* 	Health of spacecraft: It refers to the status of the spacecraft with its surroundings in terms of temperature, pressure, voltages, images etc. These measurements (which may go around 1000 in number) are collected and transmitted as radio waves. These are radio waves are simple enough to be received by any receiver on Earth. They contain mainly information like All OK, Track urgent, Red Alert etc. 
* Scientific data: The critical tests and measurements, images of various locations of interests, objects of scientific importance etc.  come under this category. These messages are specially encrypted and can be received only by high gain DSN receivers. 

![alt text](/blog/assets/img/ds1-a-demonstration-spacecraft-and-its-communication-aspects/health-signals.gif)

Apart from the data, the characteristics of received waves also reveal a lot! The speed of the spacecraft, its distance from Earth and other useful parameters can be calculated by Doppler Effect using the frequency shifts in received waves.
The primary goal of DS1 in space is to test and execute new technologies in space.  Some of which are:
* Miniature Integrated Camera Spectrometer (MICAS)
* Autonomous Navigation (AutoNav)

## MICAS
MICAS is one of the advanced technologies used in DS1 till date. It is basically an array of cameras placed on the surface of the craft used to take images in the presence of light in space. From its design, it can be clear that there are no moving parts in DS1 for orienting MICAS. So, for a change in angle, the entire spacecraft has to change its position and attitude (orientation), so as to perfectly capture the images.

![alt text](/blog/assets/img/ds1-a-demonstration-spacecraft-and-its-communication-aspects/micas3s_tn.jpg)

One of the interesting features about MICAS is that it is not only capable of capturing light images but also heat waves, UV and IR radiations and form images out of those waves. These data prove to be quite useful to determine temperature distributions in various desired locations in space through simple images.
MICAS achieves this using an array of light sensitive charged cells inside a device called Charge Coupled Device (CCD).  These cells absorb the light falling on them, and then releases a specific amount of charge proportional to the intensity of light falling. CCD stores this charge as the value of each pixel in the image. Then each value is binary coded to generate bits, which are transmitted as radio waves to Earth stations or used by DS1 itself. This technique of digital imaging has an advantage over film imaging as film images cannot be transmitted as radio waves.
![alt texts](/blog/assets/img/ds1-a-demonstration-spacecraft-and-its-communication-aspects/ccd1.gif)
One of the drawbacks of MICAS is that exposure to sunlight can damage its working. The UV and high intensity Ultra UV radiations can change the crystal structure of CCD. So, it is generally oriented away from Sun.
One of the coolest application of MICAS is that DS1 uses MICAS to locate and orient itself. This is done using Autonomous Navigation or AutoNav.
## Autonomous Navigation
Autonomous Navigation or AutoNav is an experimental system being tested on DS1. It is used by DS1 to navigate itself and intelligently decide whether it is deviating from its programmed path.
On its path MICAS takes a number of images and stores for reference. While on path AutoNav decides, from the stars, asteroid positions and the reference images, whether the path taken is the desired one. When not, it uses its thrusters and rockets to re-orient itself. 

![alt text](/blog/assets/img/ds1-a-demonstration-spacecraft-and-its-communication-aspects/autonav2.gif)

So thats it guys. This concludes my work  on how is DS1 achieving its communication with Earth and Navigation. If you guys want some more insight into any of these
* How basically an RF signal is transmitted over large distance [here](http://www.qrg.northwestern.edu/projects/vss/docs/Communications/1-how-is-data-put-on-radio-waves.html)
* Different kinds of antennas [here](http://www.qrg.northwestern.edu/projects/vss/docs/Communications/2-what-kinds-of-antennas.html)
* What could go wrong in communications [here](http://www.qrg.northwestern.edu/projects/vss/docs/Communications/1-what-could-go-wrong-communications.html)
