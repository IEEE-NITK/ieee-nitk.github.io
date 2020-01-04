---
layout: post
title: "You don't really know Arduino"
author_github: vibhoregit
date: 2017-09-11 23:32:44
image: '/assets/img/'
description: 'Are you tired of the monotonic simplicity of Arduino? Well this article might add an extra dimension for you to explore.'
tags:
- Arduino
categories:
- Diode
github_username: 'vibhoregit'
comments: true
---

Is he kiddin? Well I am not (just be patient enough to reach the end). Arduino is a very good platform to start making **witty** electronics projects instead of dumb L.E.D blinking circuits (apologies to the 555) but after some time electronic hobbyists loose interest due to one or more of the following reasons:
* It is too simple
* It's performance is limited
* It does not feels like embedded programming
* There is a library for literally everything (sounds like an advantage?)
  
Well the amount of abstraction Arduino offers hides vital details of the micro-controller that powers the board. "*It Kills the Spirit of Embedded Programming.*" And thus people tend to move over to MSP430 and PIC development boards without appreciating the power of AVR controllers (Yup it's the family of controllers that power Arduino UNO, Mega, Nano, Mini and Duemilanove). And while people do use ATMEL's (now owned by Microchip) AVR Studio to program these boards, it's yet another IDE meant only for AVRs. Arduino on the other hand with proper libraries and compiler integration acts as a standalone IDE for micro-controllers by different manufacturers like the popular ESP8266. *Arduino does have advantages over its primitive alternatives.*

### What's my point then?

My point is that Arduino is good for building projects quickly and hassle-free but it does not let's the user learn the details of the micro-controller. The user friedly libraries are __not so learner friendly__ because they make you lazy. Every one using Arduino be like "*hmmm so I need to control a servo(or anything) well I can use timers in arduino but wait...*"

```c
#include <servo.h> 
```
"*Done!*"

So to learn Arduino one needs to stop using the user-friendly abstract fuctions of Arduino and get down a level deeper into the realm of Embedded C coding. And to one's comfort Arduino IDE supports it out of the box. (right after installation?)

### The conservative face of Arduino

Not many people might know but Arduino is **backward compatible**. For those who do not come from programming background (like myself) backward compatibility means support for primitive functions on which the newer abstract functions are based. For example the function cout and cin in C++ are the abstract functions while scanf and printf are the primitive ones. C++ however supports both so if performance is a major concern using printf (which is faster) instead of cout might save you a couple of micro-seconds. The analogy in embedded implies that instead of digitalWrite(8,HIGH), PORTB = 0b00000001 will do the exact same thing but a lot faster. 
 
Another example is the widely used analogWrite() function in arduino that outputs a PWM signal with a rather low frequency of 980 Hz and 490 Hz which might be slow depending on the application. In such a case instead of using the rather good looking analogWrite(), set the clocks to the counter units manually to achieve frequencies as high as 200KHz. All this might sound very simple to a person with a lot of experience programming micro-controllers but where does a noob starts from? Don't worry, I got your back.

### How and where to begin?

To start off how about reading some theory on the architecture? Sounds very interesting right? Well yeah it might not be the most entertaining part but it is indeed an essential part (especially the register view of peripherals). A basic image of the architecture in mind allows the programmer to use architectural exploits to make the code run faster. 

* Quality tutorials can be found on [avr-tutorials](http://www.avr-tutorials.com/) with examples. Added bonus is their assembly equivalent for every line of C code.

* Ever feel lost? All good projects are complimented with ever helping communities. People at [AVRfreaks](http://www.avrfreaks.net/) will be glad to help you.

* Although there will be examples on internet explaining how to manipulate registers to do certain tasks (like setting up ADC) it is recommended to figure that out using the [data sheet of the micro-controller used in Arduino.](http://www.atmel.com/products/microcontrollers/avr/megaavr.aspx) 


### An Example
Enough with the blabbering, lets look at a simple example.

```c
#define BLINK_DELAY_MS 1000
void setup()
{
 //set pin 5 of PORTB to output
 DDRB |= _BV(DDB5);
 }
 
void loop()
{
  //set pin 5 high to turn led on
  PORTB |= _BV(PORTB5);
  _delay_ms(BLINK_DELAY_MS);
  //set pin 5 low to turn led off
  PORTB &= ~_BV(PORTB5);
  _delay_ms(BLINK_DELAY_MS);
}
```

If you copy-paste the above code to Arduino IDE and upload it, it will mimic the classic Blink LED  code. The catch is that the built in Blink example takes 928 bytes of program memory while the above code takes just 486 bytes. (Almost half the space!)

![ATmega 328P pinmapping to Arduino UNO Pins](https://i.stack.imgur.com/NxqQs.jpg)

### Comparison of performance

Still not convinced about the boost in performance possible by coding using primitive methods? Julian Ilett did a nice [comparison video](https://www.youtube.com/watch?v=U7I0GkwW1yE) so you might want to check that out. 

If you think that speed and space is the only argument then let me include power considerations. AVR micro-controllers come with a bunch of peripherals that may or maynot be used by your code. In a scenario where the entire setup runs on a battery you might want to shut down unused peripherals (like ADC or counter units) to save power and increase the running time. Kevin Darrah's [video](https://www.youtube.com/watch?v=urLSDi7SD8M) will help you appreciate the power saver modes the micro-controller offers.

On the already fantastic recipe of Arduino the icing is yet to come. You can code the __blocks that need to be fast__ for your project using primitive C codes and still use the abstract arduino functions for the __less time critical part__ of the code. For example, If you are working on a fast multiplexing application like an LED cube where data is sent to Arduino from PC, you would want to make sure that multiplexing is done at a very high speed (enough to fool human eyes at least) whereas you can still use the Serial.read() function to fetch data over serial port. 

>A word of advice: While programming in such a mixed style make sure the code doesn't create conflicts with itself (like trying digitalWrite() on a pin which is configured to read analog values).  

### Ready, Steady, Go!

Congratulations if you made it till the end of this blog. Hopefully your arduino sketches are more optimized and gives you that _sense of pride_. Now what are you waiting for? Find your arduino and maybe make an 8x8x8 multiplexed L.E.D cube or something! 

![Credits AVRfreaks](http://www.avrfreaks.net/sites/default/files/4CubeWave.gif)
