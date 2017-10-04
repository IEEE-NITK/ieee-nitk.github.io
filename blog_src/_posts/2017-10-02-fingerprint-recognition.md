---
layout: post
title: "Fingerprint Recognition"
author_github: manan-sharma
date: 2017-10-02 21:35:05
image: '/assets/img/'
description: 'Insight into the working of Fingerprint Recognition'
tags:
- fingerprint
- sensors
- fingerprint sensor
categories:
- Diode
github_username: 'manan-sharma'
---

Fingerprint recognition systems are practically everywhere today, from your smartphone, laptops, and are an integral part of the Aadhar system enabling us to authenticate our identity easily. Today we take a look at how the whole system of fingerprint recognition works.  

Fingerprints are the tiny friction ridges on the ends of our fingers and thumbs make it easier to grip things. By making our fingers rougher, these ridges increase the force of friction between our hands and the objects we hold, making it harder to drop things. Unless you have accidents with your hands, your fingerprints remain the same throughout your life.

### Why Fingerprints?

Fingerprints in are a brilliant way of telling people apart because fingerprints develop through an essentially random process according to information encoded in our DNA. Even the fingerprints of two identical twins are slightly different. Its is however possible that two people may have the same fingerprint, however the chances of this happening are 1 in 64 million. Such chances are really small to worry about, hence fingerprints are widely used to authenticate identity.

Ok so now does does an electronic device recognize fingerprints? It involves two components, the physical sensing(hardware) part, and the analysis and verification(software part).

### The Sensor

The first part of this system involves recognizing and creating a digital version of your fingers. Three types of such systems are used:

1. Optical Scanners  
They are the oldest method of capturing and comparing fingerprints. It relies on capturing an optimal image (basically a photograph), and uses algorithms to detect unique patterns on the surface, such as ridges or any unique marks, by analysing the lightest and darkest areas of image. These scanners are bulky(from the viewpoint of smartphones) as they pack a very high number of diodes per inch to capture details up close. However, the major disadvantage of such a scanner is that it be easily fooled with a 2D picture of good enough quality. So such systems are being slowly phased out, for better ones, like the capacitive scanners.
![1](/blog/assets/img/finger-prints/1.jpg)

2. Capacitive Scanners  
The most commonly found type of fingerprint scanner used today is the capacitive scanner. Again the name gives away the core component, the capacitor. Instead of creating a traditional image of a fingerprint, capacitive fingerprint scanners use arrays tiny capacitor circuits to collect data about a fingerprint. As capacitors can store electrical charge, connecting them up to conductive plates on the surface of the scanner allows them to be used to track the details of a fingerprint. The charge stored in the capacitor will be changed slightly when a finger's ridge is placed over the conductive plates, while an air gap will leave the charge at the capacitor relatively unchanged. An op-amp integrator circuit is used to track these changes, which can then be recorded by an analogue-to-digital converter. Once captured, this digital data can be analysed to look for distinctive and unique fingerprint attributes, which can be saved for a comparison at a later date. What is particularly smart about this design is that it is much tougher to fool than an optical scanner. The results can't be replicated with an image and is incredibly tough to fool with some sort of prosthetic, as different materials will record slightly different changes in charge at the capacitor. The only real security risks come from either hardware or software hacking.  
![2](/blog/assets/img/finger-prints/2.jpg)
3. Ultrasonic Scanners  
This is one of the latest fingerprint scanning technology, being actively developed by Qualcomm, and they are calling it Sense ID technology. The idea here is to capture the details of a fingerprint using a ultrasonic transmitter and a receiver. An ultrasonic pulse is transmitted against the finger that is placed over the scanner. Some of this pulse is absorbed and some of it is bounced back to the sensor, depending upon the ridges, pores and other details that are unique to each fingerprint. A sensor that can detect mechanical stress is used to calculate the intensity of returning ultrasonic pulse at different points on the scanner. Additional depth data can be captured if scanned for longer time duration.  The 3D nature of this capture technique makes it an even more secure alternative to capacitive scanners.

 [![Embed video](https://img.youtube.com/vi/FtKKZyYbZtw/0.jpg)](https://www.youtube.com/watch?v=FtKKZyYbZtw)

### Fingerprint matching

Okay, so now we have the fingerprint with us. We now need to extract unique information out of it.

Accompanying the physical scanner is a dedicated IC that deals with interpreting the scanned data and transmitting this in a useful form to your smartphone's main processor. Different manufacturers use slightly different algorithms to identify key fingerprint characteristics, which can vary in speed and accuracy.

Typically these algorithms look for where ridges and lines end, or where a ridge splits in two. Collectively, these and other distinctive features are called minutiae. If a scanned fingerprint matches several of these minutiae then it will be considered a match. Rather than comparing the whole fingerprint each time, comparing minutiae reduces the amount of processing power required to identify each fingerprint, helps avoid errors if the scanned fingerprint is smudged, and also allows the finger to placed off-centre or be identified with only a partial print.

On smartphones, the above information is kept safe on the device, away from the code that could compromise it. Most manufacturers allocate a secure area for keeping this secure data on a separate part of the processor that cannot be accessed by apps operating in the regular operating system environment. Any authentication request is handled by strong cryptographic protocols, such as FIDO(Fast IDentity Online) Alliance. They enable the requesting service to verify the identity, without the requesting service being able to actually read/process our fingerprint scan.

Fingerprint scanners have become quite a secure alternative to remembering countless passwords, and with the rollout of services like Samsung Pay, Apple Pay, these scanners are likely to become a more common and crucial security tool in the future.
