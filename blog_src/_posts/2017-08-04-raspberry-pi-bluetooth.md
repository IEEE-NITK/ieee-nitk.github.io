---
layout: post
title: "Of a tooth and a pie"
author_github: Shwetha
date: 2017-08-04 0:0:0
image: '/assets/img/'
description: 'A prologue to using Raspberry Pi as a bluetooth device.'
tags:
- Bluetooth
- Raspberry Pi 3
- Internship
categories:
- IEEE
github_username: Shwetha
comments: true
---

# OF A TOOTH AND A PIE
At first, I thought I would write about the wonder creation of yesteryear-Bluetooth. 
Give you a little insight into how it works, the various layers of Bluetooth, it's profiles and so on. 
But I guess Wikipedia would do a much better job at it. 
So, I decided to share something I learned during my internship- how we can **make use of the inbuilt Bluetooth controller in Raspberry Pi 3 to implement some of the profiles of Bluetooth.**

First, you need to know that **Raspberry Pi** is nothing but a Linux machine and can be governed by some commands that you can type in the terminal. 
Also, there will be a repository associated with each Raspbian version (Raspbian is an OS), from which you can download software packages and perform various tasks on your Pi. 

Second, though the latest model of Raspberry Pi, the 3B model, is equipped with an inbuilt bluetooth controller, you need to carry out some steps to enable it. 
The most widely used package to carry this out is `bluez`. 
With a `sudo apt-get install bluez` command, you can install it in your Pi. 
There is another package called `bluetooth` which also needs to be installed and then you are good to go. 
This offers a tool called `bluetoothctl` and once this is launched, you can scan, pair, trust or connect any Bluetooth device to the Pi just like you can in a mobile phone.

Now, I hope you know what a **Bluetooth profile** is. 
It is nothing but a specification concerning a particular aspect of Bluetooth-based wireless communication between devices. 
For example, transferring files is associated with the profile FTP, hearing quality music is associated with A2DP, VoIP calls or using a bluetooth headset to make handsfree calls is associated with HSP/HFP and so on. 
So basically, if you connect a Bluetooth device to your Raspberry Pi, you can transfer files to and from the device, or play music on your device and hear it through speakers connected to your Pi, or play a music on the Pi and hear it through the bluetooth headset connected to your Pi. 
The applications are endless.

I am going to just give you a sneak-peek on how to get started on doing all this. 
We will start with the easiest one, the A2DP profile which is an acronym for **Advanced Audio Distribution Profile**. 
Using this profile, you can play high quality music both on the Pi output (speakers or HDMI analog out) or on a bluetooth headset connected to it. 
For this, you need to install a sound server package called `Pulseaudio` which deals with all the sound streams passing via Bluetooth. 
Pulseaudio provides you with the option to select a source (from where the audio is taken) or a sink \(to where the audio must be played). 
It also allows you to select the Bluetooth profile in which you want your Bluetooth device connected to the Pi work and can even do the same for Pi as well. 
That is, if you are connecting a bluetooth headset to the Pi, it can either be used as an A2DP sink or can be used to attend calls for HSP/HFP (Headset/Handsfree) purposes. 
Once you configure the source and sink to route your audio through the Pi, you are done. 
Now, the Pi can act like a music player and all you have to do is feed in your playlist into the Pi.

Coming to transfer of files, which is namely the FTP or File Transfer Protocol, again, you have readily available packages like `ussp-push` and `obexpushd` which are once again armed with ready-to-go commands to enable easy transfer of files from Raspberry Pi to your bluetooth device and vice-versa. 

A small glitch, however, occurs when you try to use the Raspberry Pi as a **handsfree** device. 
By handsfree device, I mean the exact handsfree device you have in your cars, using which you can attend calls coming to a device connected via bluetooth to it. 
Our Pi too can perform the same task, but since we require live transmission of audio or more precisely voice data, the inbuilt bluetooth controller faces trouble and is not feasible owing to its huge latency and difference in the sampling rates of the two devices. 
But you can always go for a Bluetooth dongle in that case. 
Using the inbuilt bluetooth you can, however, place calls or answer them and do other related operations using a software for telephony called `ofono`. 
A joint effort of Intel and Nokia, this package is available for download in the repository and provides test files which you can run to do any call related operations, provided your connected device supports it. 
While implementing this, the problem I faced was that audio could be heard neither through the Pi nor through the connected mobile phone. 

I guess I have introduced you to a plausible aspect of Bluetooth usage in Raspberry Pi. 
It is a fun field to explore and the possibilities are plenty. 
Please do check these sites out for more details.

[Bluetooth Headset](http://yountess.net/raspberry-pi/bluetooth-headset-raspberry-pi-3-ad2p-hsp)

[Bluetooth file transfer](<http://www.jamesrobertson.eu/clf/2014/jun/28/sending-a-file-over-bluetooth-from-your-phone-to.html>)