---
layout: post
title: "Future of Drones"
date: 2019-11-02 01:36:00
author_github: saikumardande
image: '/assets/img/'
description: ''
categories:
- Diode
github_username: 'saikumardande'
---


The word **Drone** is used pretty often in today’s world. Today the term has broadened to include
anything from highly sophisticated $100M Global Hawk to $30 teeny-tiny UDI 839 Quadcopter. Even flightless vehicle such as Drone ship are occasionally referred to as drones.



![img](/blog_src/assets/img/FutureOfDrones/drones1.png)

​                                                                                **Global Hawk**

![img](/blog_src/assets/img/FutureOfDrones/drones2.png)

​                                                                                   **Quadcopter**

So what exactly is a drone?

It is called as an unmanned aerial vehicle essentially if it flies in a controlled way and their isn’t anybody on board. Whether it is controlled by computers or entirely controlled by a remote makes little difference. But most often when you see a vehicle described as a drone today, it is a little bit of both: piloted by humans, but capable of some degree of navigation on its own if necessary.

### **THE MONOSPINNER DRONE**

![img](/blog_src/assets/img/FutureOfDrones/drones3.png)

What do you think is the minimum number of moving parts required for a controlled flight?

For example, helicopters have two moving parts, a propeller and tail rudder and multicopter drones hover in a place through a number of rotors which create an upward thrust to cancel out their weight, whereas mono spinner relies on just one propeller.

This works without hinges, ailerons, flaps and servos. Because of single thrust force created by propeller it can’t just lift off from the ground, it flips over. In order to get it to flight it has to be thrown like a frisbee. For a certain constant angular speed and propeller force the torques are cancelled out by cross coupling terms, an unconventional equilibrium is found and the mono spinner is able to stay in one position.

Feedback control keeps the mono spinner in its stable position, without active feedback control it will crash. However it produces only one thrust it can still be controllable using some advanced algorithms. This drone is robust and can recover and stabilize even after heavy disturbances.  

![img](/blog_src/assets/img/FutureOfDrones/drones4.png)

What if a propeller or motor, of a quadcopter or any other with more than one propeller experiences a failure. Simple enough,  remaining propellers take over or at least they try. With  this single propeller idea we can make a drone fly  even when there is only one working
propeller on drone.   

Similar to this drone, another single propeller drone is UNI -Copter. This drone has only one propeller, but the only difference here is it uses control surfaces to have stable flight. This has two layers of control surfaces, upper control surface and lower control surface. Upper control surface compensate the anti-torque and controls flight directions and lower control surface controls flight
directions. Servo motors are used to control these control surfaces. The main advantage of this drone is its sphere shaped frame protects the core elements for flying and control and enables landing and take-off without constrains of terrain.

### **POLLINATION DRONES**

Bees play a crucial role in pollination. These days bee colonies are decreasing due to increase in use of pesticides. So scientist in japan used a drone, horse hair and a sticky ionic gel which mimic the action of a bee. The pollinator drone is attached with a strip of horse hair at the bottom and it is coated with a gluey substance called ionic gel which has peculiar lift and stick ability. Pollen normally sticks to the hair of bee. Similarly pollen sticks to the drone and it can be transferred to another  flower.

At present these drones are controlled manually. Future models of this might use Artificial Intelligence or GPS to control and plan the best paths to pollination.

Similar to this, in 2017 Poli-X pollination Drone project was launched and it was tested in 2018. The main intention of this project is to design a drone which is capable of recognize flowering plant species and autonomously pollinate only those species. The concept prototypes, Poli-X1 and Poli-X2 are under development by OpenRobotix Labs. The drones are capable of recognizing plant species for pollination, self-charging  and remain in the fields throughout the flowering season.

![img](/blog_src/assets/img/FutureOfDrones/drones5.png)

​**Pollination drone**

![img](/blog_src/assets/img/FutureOfDrones/pollination.png)

​                                                                                   **Poli-X1 drone**

### **References**

*   [https://www.flyingmachinearena.ethz.ch/wp-content/publications/2016/zhaIEEE16.pdf](https://www.flyingmachinearena.ethz.ch/wp-content/publications/2016/zhaIEEE16.pdf)
*   [https://link.springer.com/content/pdf/10.1007%2Fs12206-018-0440-1.pdf](https://link.springer.com/content/pdf/10.1007%2Fs12206-018-0440-1.pdf)
