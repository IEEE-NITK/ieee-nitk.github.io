---
layout: post
title: "A Comprehensive Guide to Li-Fi"
author_github: krithikvaidya
date: 2019-10-02 14:31:55
image: '/assets/img/'
description: 'An Introduction to Light Fidelity, Its Scope and Its Applications'
tags:
- Li-Fi
- Wireless Networks
categories:
- CompSoc
github_username: 'krithikvaidya'
---

## Introduction

![Li-Fi Visual](/blog/assets/img/a-comprehensive-guide-to-lifi/1.jpeg)

Wouldn't it be interesting if we could use our everyday LED bulbs as the transmitters of data for wirelessly accessing the internet, instead of Wi-Fi Routers or Cellular Networks? Li-Fi is a technology that does exactly that. Li-Fi was unveiled by *Dr. Harald Haas* in his iconic 2011 TED Talk entitled [Wireless data from every light bulb](https://www.youtube.com/watch?v=NaoSp4NpkGg), where he demonstrated Li-Fi in public for the first time. Li-Fi (which is an acronym for **Light Fidelity**), is a light-based communication system that is capable of transmitting data at high speeds over the visible, ultraviolet, and infrared spectrums, in contrast with conventional wireless data communication methods (such as Wi-Fi, 4G, etc.) that use the radio frequency spectrum for data transmission.

Li-Fi is a subset of Optical Wireless Communications (**OWC**). However, the uniqueness of Li-Fi is brought out in the fact that the same light energy used for illumination, may also be used for communication!

The use of visible light to transmit data allows Li-Fi to offer several advantages - most notably, a wider bandwidth channel (the visible light spectrum is 2,600 times larger than the entire radio frequency spectrum), the ability to safely and reliably transmit data in areas susceptible to electromagnetic interference due to radio waves (e.g. in aircraft cabins, hospitals, nuclear power plants and many more), and to offer higher transmission speeds (researchers at The University of Oxford and University College, London recently achieved speeds of **224 Gigabits/Second** using Li-Fi!).

## How It Works

![A demo of Li-Fi Communication](/blog/assets/img/a-comprehensive-guide-to-lifi/2.jpg)
>Credits: [https://www.weforum.org/agenda/2015/10/could-li-fi-be-the-future-of-the-internet/](https://www.weforum.org/agenda/2015/10/could-li-fi-be-the-future-of-the-internet/)

*LED's* are light sources based on semiconductors which can amplify and switch their light intensity rapidly (within nanoseconds, in fact); therefore, LED cells can modulate a massive number of signals per second without the human eye even noticing! Since a robust Li-Fi system requires extremely high rates of light output, this makes LED bulbs ideal for implementing Li-Fi transmission. Communication using Li-Fi is just as seamless as other radio systems, allowing the users to be connected wherever there is Li-Fi enabled light.

The changes in light intensity from the LED light source are interpreted by the receiving **photodiode** device. Once the electronic signal is demodulated, it is converted into a continuous stream of binary data, which is then transferred to the target device.

A helpful *infographic* illustrating the working of Li-Fi is attached below:

![How Li-Fi Works?](/blog/assets/img/a-comprehensive-guide-to-lifi/3.png)
>Credits:[https://www.cdnsol.com/blog/li-fi-light-based-communication-technology/](https://www.cdnsol.com/blog/li-fi-light-based-communication-technology/)

You can also watch a live demo of the technology [here](https://youtu.be/NaoSp4NpkGg?t=349) 

A few questions may pop into your mind when first encountering Li-Fi:

 1. You may wonder if you'll need to keep your lights on all the time if you wish to stay connected. The answer is yes. However, due to their very sensitive communication link and great signal to noise ratio, the Li-Fi LEDs can be dimmed to **below human visibility** while still emitting enough light to carry data!

2. You may ask if it's just a *line-of-sight technology* that requires the communicating sender and receiver to have direct visiblity of one another. The answer to this is not really, because any light-transmitting path that exists between the transmitter and receiver can support a Li-Fi link, including reflections from a wall, ceiling or floor. Recently, it has been demonstrated that a signal reflected off a wall can achieve transmit speeds of upto **70 Mbits/sec**.

3. What might happen if the light beam is *temporarily blocked*, or say, if we wish for our mobile devices to be connected to the internet when it's in our pocket and all external light sources are blocked-off. The answer to this is that it is not necessary for Li-Fi to be the sole active network transmission link at all times: it can work alongside other systems. Currently, mobile devices can transfer between a variety of different communication protocols such as Wi-Fi, 4G, 3G, etc. Li-Fi can **seamlessly** be integrated with this available stack of communication protocols - when a Li-Fi link is available, it can be used in preference to other links, due to its higher transmission rates.

	But, think about it - a lot of the times you require high data transfer rates (for example, watching an ultra-HD Youtube video) are inevitably the exact times when you are using the device and it's in range of a light source within the surroundings. So, more often than not, a Li-Fi signal will usually be available when it is most required.

5. You may be curious about whether other light sources in the room, or say something like strong sunlight, could interfere with Li-Fi communications. Li-Fi relies on detecting rapid changes in light intensity and not on the absolute amount of light falling on it. This means that constant or slowly-varying sources of light can be filtered out. Different room-lighting scenarios have been modelled and tested while a Li-Fi link has been established; it has been shown that it is possible to achieve *optimum lighting* as well as a *clean Li-Fi reception* simultaneously in a variety of different scenarios. Li-Fi receivers have also been tested outdoors when exposed to 77,000 lux of sunlight. 

6. Finally, you may wonder if Li-Fi is suitable for *downloads only* - that is, is it also possible for our devices that are receiving data to also send data? 
Since Li-Fi is not restricted to visible light for communications, uplink communication can be efficiently done using the infrared spectrum. In 2018, Harald Haas (the inventor of Li-Fi) and his team conducted an experiment in which data was sent at a speed of 1.1 Gbps over a distance of 10 m with an LED of only **4.5 mW** optical output power!


## Its Advantages over Conventional Information Transfer Methods


Li-Fi has the advantage of being useful in electromagnetic sensitive areas such as in aircraft cabins, hospitals and nuclear power plants (where RF-based communications are heavily restricted), without causing electromagnetic interference.

Both Wi-Fi and Li-Fi transmit data over the electromagnetic spectrum, but whereas Wi-Fi utilizes radio waves, Li-Fi uses visible, ultraviolet and infrared waves. This is advantageous because the US Federal Communications Commission has warned of a potential **spectrum crisis** caused by Wi-Fi being close to full capacity. Li-Fi has almost no limitations on capacity, since the entire visible light + infrared spectrum is about 2,600 times larger than the entire radio frequency spectrum.

![Electromagnetic Spectrum](/blog/assets/img/a-comprehensive-guide-to-lifi/4.jpg)
>Credits:[https://www.sciencedirect.com/science/article/pii/S2405428317300151](https://www.sciencedirect.com/science/article/pii/S2405428317300151)

**Security:** Since LiFi makes use of the visible light spectrum, it cannot penetrate through optically opaque objects like walls, thus adding another level of defense against unauthorised access (RF-based communication waves can easily pass through walls). Also, the existing security protocols for encryption and authentication in other types of communications can be be applied to Li-Fi systems too.

**Speed & Bandwidth:** At the current state-of-the-art, Li-Fi can deliver multiple Gbps of speed in mobile devices. This next generation technology will drive wireless beyond any current capability, opening up unprecedented bandwidth. With a single LED, peak transmission speeds of **8 Gbps** have been recorded.

![Li-Fi faster than Wi-Fi](/blog/assets/img/a-comprehensive-guide-to-lifi/5.jpeg)
>Credits:[https://technicalera21.blogspot.com/2018/12/li-fi-100-times-faster-than-wifi.html](https://technicalera21.blogspot.com/2018/12/li-fi-100-times-faster-than-wifi.html)

**Reliability and Low Latency:** Li-Fi provides *enhanced reliability* enabling interference-free communications. It currently offers latency that is a factor of three times lower than Wi-Fi, which can help enable automation and applications such as Augmented Reality and Virtual Reality.

**Interference Free:** Conventional RF is vulnerable to interference from a wide range of devices such as cordless land-line phones, microwaves and neighbouring Wi-Fi networks. Li-Fi signals can be restricted to the *area of illumination*, which means that interference is much simpler to avoid.

## Commercial Implementations of Li-Fi Technology

1. **pureLiFi** is a manufacturing firm co-founded by the inventor of Li-Fi to commercialize Li-Fi products for their integration with existing LED-lighting systems. It is currently at the forefront of production of Li-Fi related products. pureLiFi demonstrated the first commercially available Li-Fi system, the Li-1st, at the 2014 Mobile World Congress in Barcelona.

	Since then, the company has gone through multiple iterations of products, each generation improving upon the drawbacks of the previous. Currently, the latest products developed by pureLiFi are the [LiFi-XC](#further-readings-and-resources) and the [Gigabit Li-Fi Mobile Integration](#further-readings-and-resources).

	You can have a look at the history of Li-Fi products developed by pureLiFi [here](http://purelifi.com/legacy-products/)

2. A **BMW** manufacturing plant located in Munich, Germany [tested](https://www.eenewseurope.com/news/li-fi-passes-industrial-test-bmws-robotic-tools) the operation of Li-Fi in an industrial environment with mobile robots, and the results were very positive. In fact, BMW's project manager hopes for the scaling-down of Li-Fi transceivers for its widespread adoption in manufacturing plants.

3. In August 2018, Kyle Academy, a secondary school in Scotland, trialed Li-Fi within the school. Eight LiFi-enabled LED ceiling bulbs using rapid on-off patterns were set up to transmit data to USB Li-Fi receivers plugged into the students' laptops.
![Scotland School Li-Fi Test](/blog/assets/img/a-comprehensive-guide-to-lifi/6.jpg)
> Credits:[https://www.fibre-systems.com/news/lifi-technology-piloted-scotland-s-south-ayrshire-school](https://www.fibre-systems.com/news/lifi-technology-piloted-scotland-s-south-ayrshire-school)
4. Recently, in June 2019, French company Oledcomm tested their Li-Fi technology at the 2019 Paris Air Show. Oledcomm hopes to collaborate with Air France in the future to test Li-Fi on an aircraft in-flight. In-flight internet (on the infrequent even that it is offered) is often unreliable and slow. Oledcomm wants to take things up a notch by making high-speed LiFi available on Air France and KLM flights, promising in-cabin bandwidths of 100Mbps. Currently, even the fastest WiFi available on domestic airlines in the US stalls at around 15 Mbps. The actual implementation of the the technology, named LiFiMAX, should be available on Air France flights by the end of the year. [Here's a link](https://www.youtube.com/watch?v=71Td0HQ7lx0) to a demo of the technology.

![Li-Fi in Airplanes](/blog/assets/img/a-comprehensive-guide-to-lifi/7.jpg)
>Credits: [https://www.fasttracks.eu/li-fi-technology-how-it-works-and-its-applications/](https://www.fasttracks.eu/li-fi-technology-how-it-works-and-its-applications/)

Using Li-Fi, aircraft passengers can access high-speed internet via lights fitted over their seats. Li-Fi can also be used to integrate the In-Flight Entertainment System with the passengers' smartphones. Oledcomm also a manufactures a [range of Li-Fi devices](https://www.oledcomm.net/our-products/#1529847210185-42f3d5b8-a603), such as Li-Fi enabled desk lamps, hospital lights and street lights.


## Current Limitations

Every new technology has its limitations, and Li-Fi is no exception. A few of the major drawbacks of Li-Fi are:

-   Opaque obstacles on pathways can affect data transmission. The main problem is that light cannot pass through objects - so if the receiver is blocked in any way, then the high-speed Li-Fi signal will immediately disappear.
-   Unlike radio waves, light waves do not penetrate through walls and so Li-Fi may potentially have a shorter range compared to Wi-Fi. While this does help improve security, it may also prove to be an annoyance at times.
-   We still need RF-based Wi-Fi and Cellular Communications, since we cannot have a light bulb that provides data to high-speed moving objects and in other such scenarios where the scope of using of Li-Fi is non-ideal

## Conclusion and Future Scope

There is plenty of scope for innovation in the field of Li-Fi communications. Like conventional broadband and Wi-Fi, Li-Fi can also function as a bidirectional communication system. Currently, research is being done looking into using multi-colored **RGB** (Red - Green - Blue) LED's at retina size to send and receive a wider range of signals than single-colored white LED's.

Li-Fi is an innovative technology that is poised to impact many industries. It can unlock the IoT and [Industry 4.0](https://www.spotlightmetal.com/iot-basics-what-does-industry-40-mean-a-842216/) applications, enable communication between intelligent transport systems, enhance road safety with the driverless car revolution, create secure wireless networks, and can aid in health monitoring of the elderly.

In the not-too-far future, it isn't difficult to imagine the modest LED lightbulb serving a multitude of applications - it will be an integral part of the emerging smart cities and smart homes. This could possibly lead to the merging of the lighting industry with the wireless industry. However, an important prerequisite for the large-scale adoption of any technology is the availability of standards. In this regard, the IEEE *802.11bb* Task Force for the development of a Global Standard for Li-Fi Communication was set-up in 2018.

![Generations of Cellular Communications](/blog/assets/img/a-comprehensive-guide-to-lifi/8.jpg) 
>Credits:[https://ars.els-cdn.com/content/image/1-s2.0-S2405428317300151-gr8.jpg](https://ars.els-cdn.com/content/image/1-s2.0-S2405428317300151-gr8.jpg)

Although there’s still a long way to go to make this technology a commercial success, it promises a great potential in the field of wireless internet. The commercial deployment of Li-Fi will result in inexpensive and fast internet service world-wide.  Widespread migration to cleaner, greener and safer communication networks such as Li-Fi will have a positive impact on the current global climate crisis too. 

## Further Readings and Resources

[Gigabit Li-Fi integration into our smartphones](https://purelifi.com/wp-content/uploads/2019/04/Why-Design-In-Gigabit-LiFi-pureLiFi.pdf)

![Gigabit Li-Fi integration into our smartphones](/blog/assets/img/a-comprehensive-guide-to-lifi/9.png)

[LiFi-XC: The current state-of-the-art amongst consumer-oriented LiFi devices](https://www.youtube.com/watch?v=yzWNB9CkpmA)  
[Press Release of the Global LiFi Congress 2019](https://www.lificongress.com/Press-release-93-2.html)  
[A small-scale DIY Li-Fi tutorial](https://www.youtube.com/watch?v=1JxImoxlq_Q)  
[Integrating Li-Fi receivers in Solar Cells](https://www.youtube.com/watch?v=iHWIZsIBj3Q)  
[Gigabit Li-Fi demonstration](https://www.youtube.com/watch?v=ybK9AgRey1o)  
[A deeper dive into the technical aspects of Li-Fi](https://www.researchgate.net/publication/279530585_Li-Fi_Technology_Data_Transmission_through_Visible_Light)  
[Li-Fi products by Oledcomm](https://www.oledcomm.net/)  

## References

[https://purelifi.com/faq/how-does-lifi-work/](https://purelifi.com/faq/how-does-lifi-work/)  
[https://www.lifi-centre.com/about-li-fi/faqs/](https://www.lifi-centre.com/about-li-fi/faqs/)  
[https://en.wikipedia.org/wiki/Li-Fi](https://en.wikipedia.org/wiki/Li-Fi)  
[http://www.axrtek.com/how-does-liFi-work.html](http://www.axrtek.com/how-does-liFi-work.html)  
[http://tec.gov.in/pdf/Studypaper/lifi%20study%20paper%20-%20approved.pdf](http://tec.gov.in/pdf/Studypaper/lifi%20study%20paper%20-%20approved.pdf)  
[https://www.youtube.com/watch?v=iHWIZsIBj3Q](https://www.youtube.com/watch?v=iHWIZsIBj3Q)  
[https://www.fibre-systems.com/news/lifi-technology-piloted-scotland-s-south-ayrshire-school](https://www.fibre-systems.com/news/lifi-technology-piloted-scotland-s-south-ayrshire-school)  
[https://www.sciencedirect.com/science/article/pii/S2405428317300151](https://www.sciencedirect.com/science/article/pii/S2405428317300151)  
[https://purelifi.com/lifi-technology/](https://purelifi.com/lifi-technology/)  
[https://www.archlighting.com/technology/li-fi-high-speed-communication-via-led-modulation_o](https://www.archlighting.com/technology/li-fi-high-speed-communication-via-led-modulation_o)  
[https://purelifi.com/lifi-misconceptions/](https://purelifi.com/lifi-misconceptions/)  
[https://www.archlighting.com/technology/li-fi-high-speed-communication-via-led-modulation_o](https://www.archlighting.com/technology/li-fi-high-speed-communication-via-led-modulation_o)


