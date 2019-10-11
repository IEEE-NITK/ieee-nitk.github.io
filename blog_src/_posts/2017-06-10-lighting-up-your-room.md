---
layout: post
title: "Lighting Up your Room!"
author_github: AbhijithKamath
date: 2017-06-10 10:48:33
image: '/assets/img/'
description: 'Three components that dance to music'
tags:
- CAS
- SPS
- EEE
categories:
- Diode
github_username: 'AbhijithKamath'
comments: true
---

## Apparatus:

1.**LED strips** <br>
You should find these in most home decor stores. They could turn out to be expensive depending upon the quality of light you expect. There are RGB strips available too! <br>

2.**TIP 31 switch**<br>
Now this is a power transistor that can withstand large currents that the LED strips demand

3.**AUX cable**<br>
This is to connect your music player to the device

4.**12V battery**<br>
The LED strips demand a lot of current, so get one that supplies enough. There are rechargeable lead acid batteries available. They are cheaper, but bulkier than pocket Li-Po batteries. Sort yourself a powerful 12V battery!

5.**AUX female adapter**<br>
To connect your music player to the device. I haven't been able to find these at stores, you'll find them on [here](http://www.electroncomponents.com/)

6.**Speakers**<br> To listen to audio!

7.**AUX female to female spiltter**<br>
So that you can feed into the device and listen at the same time.

8.**Soldering tools**<br>
This is something you should already have!

## Setup

We will use the transistor to switch the LEDs depending on the audio input that is received. If you have RGB LEDs you can use RC filters to separate out bass and treble and make it cooler. We will stick to regular strips for now.

We want the transistor to operate as a switch, so we will use the LEDs as loads across the source and the collector. The audio input will be given to the base. And that is basically all you need!

Get the components on to a perforated board and solder the connections once you check them. It is advised not to use a breadboard if you're using longer LED strips, you could leave residues on the breadboard or even completely damage it.

![Transistor Switch](/blog/assets/img/lighting-up-your-room/plans.jpeg)

That's how to make your room cooler! Engineering FTW!

### Resources:

[Check out for more help!](http://www.instructables.com/id/Sync-LED-to-Music/)