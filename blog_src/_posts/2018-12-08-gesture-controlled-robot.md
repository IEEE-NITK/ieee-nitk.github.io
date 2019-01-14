---
layout: post
title: "Gesture Controlled Robot"
author_github: Deepanshi
date: 2018-12-08
image: '/assets/img/gesture-controlled-robot'
description: 'Ever wondered if you could control objects with a cool play of hands or develop a game based on gestures just like in the movie Ra.One?'
tags:
- Gesture controlled
- Accelerometer
- RF transmitter
- RF receiver
- Motor Driver
categories:
- Diode
github_username: 'Deepanshi'
use_math: true
comments: true
---

> "JARVIS, Suit me Up!", "Clang! Spoof! Phew!", Tony Stark becomes IRON MAN!

Have You Ever Wondered, what if, just like that, with one cool move you too could control and move objects around you; OR Maybe develop a gesture-controlled game like in the movie Ra. One? Well, here I have tried to design and build a mini version of it; a Robot controlled by hand gestures.

## But first up, what exactly is a Gesture Controlled Robot?

A Robot which detects any movement(gesture) and functions depending upon these signals is a Gesture Controlled Robot. They can use different technologies viz. accelerometer-based sensing (wired or wireless) or image processing.

### Here we will implement an accelerometer-based, wireless gesture-controlled robot.

## What you need to have. You will need:

- Ht12e (encoder ic)
- Ht12d (decoder ic)
- L293D (motor driver shield)
- Arduino Uno
- 7805(voltage regulator ic)
- Capacitor
- PBT connector
- Single pole antenna
- resistor, LED
- accelerometer
- battery

## How does it work and recognize the gestures?

The bot consists of two parts- transmitter and Receiver. The functioning of the bot is controlled by the Arduino Uno which is hard coded. The gestures or movements made by the controlling unit is detected by a device called accelerometer, which will be briefly discussed in this article later.

![Block Diagram of Gesture Controlled Robot Car](/blog/assets/img/gesture-controlled-robot/1.jpeg) 

The accelerometer reads the X Y Z coordinates when the controlling device (in this case it's the user's hand) moves in certain direction and sends them to the Arduino which is connected to the sensor through pins 3,4,5. The Arduino then sends data to encoder IC accordingly. The Encoder passes the data to an RF transmitter and the transmitted data is received by an RF receiver. The receiver forwards the code to the Decoder IC which then passes it to a Motor Driver IC. The motor driver moves the two motors accordingly, thus controlling the bot of hand gestures.

## What is an Accelerometer?

Accelerometer is an integrated circuit which will basically measure the acceleration of the device it is attached to.

An accelerometer is a type of sensor which gives data in Analog form while moving in the directions of X, Y and Z. It finds applications in vehicle dynamics, mobile phone orientation detection, tilt or tap detection etc. Tilting the sensor in the desired direction will change the analog value.

By measuring the amount of static acceleration due to gravity, you can find out the angle the device is tilted at with respect to the earth. The sensor has arrows to mark the direction in which it is supposed to be tilted. The functions of each pin on the sensor has been explained here.

* Pin 1: Power supply.

* Pin 2: Ground.

* Pin 3: X pin to receive data for movement in X direction.

* Pin 4: Y pin to receive data for movement in Y direction.

* Pin-5: Z pin to receive data for movement in Z direction.

* Pin-6: ST pin is used to adjust the sensitivity of the accelerometer i.e. 1.5g or 2g or 3g or 4g.

![Arduino Pin Diagram](/blog/assets/img/gesture-controlled-robot/2.jpeg)

## Making the power supply.

You will need:

- An IC 7805 which regulates the 12V supply to 5V (if you can't get a 12V supply you can use a 9V supply)

- 0.1uf and 470uf capacitors

- 1k resistor for status LED (optional)

Since here we have two different circuits (transmitter and receiver) which aren't wired, hence we will be needing two power circuits. The receiver circuit needs to be powered using a 12V supply (since we are using a 12V motor), and the transmitter circuit can be powered using a 9V battery.

![Circuit Diagram](/blog/assets/img/gesture-controlled-robot/3.jpeg) 

Use the diagram to make the power supply. The led in the above circuit is only to check for the state of the power supply. You can omit it if you want.

![IC](/blog/assets/img/gesture-controlled-robot/4.jpeg)

Let's Move Ahead to make the Transmitter (Remote)

The transmitter or the remote of your bot will be having the accelerometer senor, Arduino Uno, encoder ic and wireless transmitter (rf transmitter module). The values read by the accelerometer are wirelessly communicated to the receiver circuit as discussed above. The wireless transmitter operates at 433 MHz and is capable of sending analog data wirelessly. Another useful feature of RF transmitter module is that it can connect multiple microcontrollers wirelessly one by one. Hence it can be used to transmit data to more than one ic. Rig up the circuit as shown in the figure.

![Line Diagram](/blog/assets/img/gesture-controlled-robot/5.jpeg)

Hard code the Arduino Uno accordingly.

The motor driver is an ic connected between a microcontroller and motors to control their working. It acts as an interface between the two. The motor Driver has the capability to control the working of several motors (dc or stepper) altogether. The motor driver has H bridge circuits which control the working of motors (

H-bridge is the simplest circuit for controlling a low current rated motor). There are many motor drivers available like L293D, L293NE, etc. Here we will be using L293D.

* L293D is a basic amplifier circuit which can power two DC motors at a time and stepper motors as well.

![L293D Circuit](/blog/assets/img/gesture-controlled-robot/6.jpeg)

## Receiver circuit

* The receiver circuit consists of a RF receiver module, to receive the encoded data; decoder ic, connected to the rf module to decode the data and motor driver ic(L293D) to make the bot move and of course two DC motors.

![Reciever Circuit Diagram](/blog/assets/img/gesture-controlled-robot/7.jpeg)

Rig up the circuit as shown. There are two LED's in the circuit to keep a check on the state of the power supply and makes debugging easy. The LED's can be removed later.

## The Final Working

Accelerometer based gesture-controlled robot moves according to the movement of the hand, since the accelerometer is on your hand. When you tilt your hand forward (with the accelerometer on your hand), the robot moves straight ahead. When you tilt backwards, it changes direction and starts moving in reverse. When you tilt to the right, it starts moving rightwards and similarly to the left. (This is in accordance with what code I have written for the motion of my bot. You can modify accordingly!)

Enjoy driving your robot!!!

## Note
> You can refer to the previous blog- ["How to get started with bots"](https://ieee.nitk.ac.in/blog/how-to-get-started-with-bots/) by [Tarun Mittal](https://in.linkedin.com/in/trmittal24) to get more insight into working of bots.

## Some basic Arduino tutorials : 

- [Tutorial 01 for Arduino: Getting Acquainted with Arduino](https://www.youtube.com/watch?v=fCxzA9_kg6s)
- [Arduino Tutorials and Courses](https://hackr.io/tutorials/learn-arduino)
- [Arduino For Beginners](https://www.makerspaces.com/arduino-uno-tutorial-beginners/)
- [What is an Arduino?](https://learn.sparkfun.com/tutorials/what-is-an-arduino/all)