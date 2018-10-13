---
layout: post
title: "Envision Project 2: Smart Lighting Systems"
date: 2018-05-13 10:00:30
image: '/assets/img/'
author_github: anirudh0707
tags:
- IoT
categories:
- Envision
github_username: 'anirudh0707'
---

## Idea

With the ongoing developments in the technological World, a lot of efforts have been invested in the field of automation to make everyone's life easier. As engineering students and the future of the World, it is our responsibility to lead the world into a better future via introducing technology which would reduce human effort as much as possible. Our project, **Smart Lighting System** is aimed at automating the process of lighting of homes in order to personalize the control over the system and to adapt itself to its surroundings for better experience. So basically we decided to introduce 3 main features in the system:

1. Voice Control 
2. People Counter 
3. Adaptive Brightness

## Implementation

The idea of a Smart Lighting System was conceived in the month of December 2017. Soon, a basic circuit was designed to give the project a start. After discussions, the team decided to implement the system using light dependent resistors (LDR), an LED, an Arduino board and Lasers as the major components. The team consisted of four first year students who were divided into two groups to take care of the software and hardware part of the project separately. The software part included setting up of a voice control interface to switch the light on or off. The hardware part included setting up the person counter and adaptive brightness feature of the project.

After division of the team, the software group began their work to set up a voice control interface. The initial period (January-February) was spent in learning the basics of signal processing which would be needed throughout the project. Topics such as energy of signals, convolution and correlation were learnt during this time. The basic idea was to compare real time signals with a pre-recorded signal and compare the two signals to test for their similarity. If a certain threshold value was cleared, a suitable message was sent to the system to execute a certain function. All this was done using normalized correlation using Python by converting signals into arrays. The code was written in the month of March (till mid-march) and certain difficulties were faced due to the fact that these were relatively new topics to the students. Post writing the code, the team tested the code by using pre-recorded signals **ON** and **OFF** to switch the system on and off respectively. In order to cut-out background noise, low pass and high pass filters were also used to enhance the performance of the code.

![Basic](/blog/assets/img/smart-lighting/Basic.jpg)

The hardware group implemented their part by using an Arduino board as the main component of the project. In order to count the number of people in the room, two lasers and two LDRs were used and the data received by the LDRs was forwarded to the Arduino board. An Arduino code was written in order to differentiate between a person entering and exiting the room and even a few unwanted situations were taken care of through the code. The adaptive brightness was executed using an LDR kept in isolation from the system. Based on the intensity of light falling on the isolated LDR, the brightness of the LED was made to vary inversely using an Arduino code. The two codes were integrated to work together in harmony. The components used included an LED, LDRs, lasers, jumper wires, a breadboard and an Arduino board.

![Circuit](/blog/assets/img/smart-lighting/Circuit.jpg)

After the basic work done by both the groups, it was time to integrate them both in order to make the system work as intended. The python and Arduino code were integrated using Py-serial. As a result, the team was able to complete a Smart Lighting System which was able to take in voice commands, switch itself on/off by itself according to the need and also reduce/increase its brightness according to the need. The project was exhibited by the team in the IEEE Envision Project Expo 2018 which was held in NITK, Surathkal.

## How did IEEE benefit us?

Throughout the project, we learnt the basics of signal processing, Python programming, Arduino programming and the working of components such as LDRs, LEDs and lasers. Teamwork was an essential quality of the teams work which was required for completion of project. The project gave us a lot to learn and we thank IEEE for providing them with an opportunity to give their ideas a proper shape and direction. On an individual basis, we learnt how to work as a team and cooperate with each other for proper implementation of project. Excellent guidance was provided at each and every step by the mentors to group members. They were available almost every time of the day for clearing doubts and helping members troubleshooting problems and never hesitated in clarifying any kind of doubts and problems. The project truly was successful only because of their consistent and sincere efforts and we, the group members highly appreciate and thank them for the same.

## The Team

- Abhi Kalra
- Praveen Maiya
- Rohan Garg
- Iteesha V A

![Team](/blog/assets/img/smart-lighting/Team.jpg)

## Mentors

- Manan Sharma
- Anirudh B H