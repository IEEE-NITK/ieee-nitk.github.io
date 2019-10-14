---
layout: post
title: "Space-based Solar Power"
author_github: JyotsnaMeda
date: 2019-10-07 19:29:30
image: '/assets/img/'
description: 'Space-based Solar Power'
tags:
- Diode
- Space
- Solar Power
categories:
- Diode
github_username: JyotsnaMeda
---

# Introduction

Can you imagine deploying solar panels in space and efficiently converting the solar power that is received right from space and then transmitting the energy back to earth wirelessly, interesting right?
>`Space-based solar power` project is a daring effort that collects the solar energy from the sun in space, converts it to energy and sends it down to Earth via microwaves.
`Energy transmitting satellites` that are placed in the geosynchronous orbit of the earth collect high intensity uninterrupted solar radiation by using giant mirrors that reflect huge amounts of solar rays onto two smaller solar collectors. This radiation is then wirelessly beamed to earth in a safe and controlled way as either a microwave or `laser beam`.

# But first, we need to understand: 
- `Why space..`?
- Don't ground-based solar conversion units do the same? 
- Why spend so much effort on implementing this system in space?


# Here's why,
In space there is no atmosphere, it's never cloudy and in geosynchronous orbit, it is never night. The intensity of sunlight in space is 10 times more compared to its intensity on earth. Moreover, 30% of all incoming solar radiation is reflected by the earth's atmosphere and doesn't even make it to the ground. Solar power on earth is greatly affected by weather conditions and isn't an uninterrupted source of energy. Space is the perfect place for a solar power station to harvest uninterrupted power and can provide the earth with massive amounts of clean and renewable energy. lt has the potential to solve the energy crisis in the near future.

In the near future humanity will have to make a transition from an energy based on fossil fuels, an exhaustible resource that is damaging our atmosphere and causing unknown long term effects on the climate-to a system based on clean, safe, reliable and renewable source of energy. Space-based solar power seems to be a perfect fit solution to this. It is an innovation designed to retain the advantages of traditional solar power while at the same time eliminating its disadvantages.

The idea behind this is quite simple. Instead of coping with the unpredictability and intermittency of solar power on the ground, implement it in space where the sun always shines.

In Geostationary orbit, the intensity of the sun is 36% more compared to that on the ground and Solar arrays in space can collect almost 10 times the amount of energy as the same configuration placed somewhere in the mid-latitude region on earth.

This technology is not something that has been thought of recently but has been in research since the early 1970s. Though this idea has been around for a decade now, it has become increasingly feasible, now that the launch costs are getting into the economically feasible zone for power satellites. In the last few years, however, scientists around the globe and several researchers at the US energy department have shown how recent technological developments could make this concept a reality.

# How does it work?
Design for a Space-based solar power system was developed by an American engineer, Peter Glacer, who in 1973 also received a patent for his design (which is as shown in the figure):
 ![how it works](/blog_src/assets/img/space-based-solar-power/first_im.jpg)
 According to this design, the solar power that would be collected by the solar panels is converted into electrical energy and would be transmitted by a microwave antenna, which is built onto the satellite, to a large ground-based receiver called Rectenna.
 
After Glacer's patent work, significant developments in this design have been taken place in the US, Canada, Europe, Japan, China, and India.
 
In 2011 the `International Academy of Astronautics` then produced it's highly detailed first International Assessment of space solar power. According to the IAA report:
`"There are no fundamental technical barriers that would prevent the realization of large-scale SPS platforms during the coming decades."`
 This tells us that this project is technically achievable

Space-based solar power essentially consists of three elements:
- A means of `collecting solar power` in space. For example, via solar concentrators, solar cells or heat engines.
- A means of `transmitting power` to earth. For example, via microwave or laser.
- A means of `receiving power` on earth. For example, via a microwave antenna or rectenna.
![receiving power](/blog_src/assets/img/space-based-solar-power/second_im.jpg)

## According to the IAA, there are 3 types of satellite architectures that can perform this task :
### 1.  Type one architecture :

![type one architecture](/blog_src/assets/img/space-based-solar-power/third_im.jpg)

Very large PV array with microwave power transmission, i.e.,
Multiple solar panel arrays are deployed in space and all of them integrated into one singular system that converts solar energy into electrical energy and this energy can be beamed down to earth using microwaves.
### 2. Type two configuration:

![type two config](/blog_src/assets/img/space-based-solar-power/fourth_im.jpg)

Large PV array with laser power transmission, i.e.,
A constellation of small satellites can be used, where each satellite has its own solar power conversion unit and all the converted energy is beamed down to earth in the form of laser energy, which is close to the visible spectrum. They are typically placed about 100 kilometers above the earth’s surface.

### 3. Type three configuration: 
![type three config1](/blog_src/assets/img/space-based-solar-power/fifth_im.jpg)

![type three config2](/blog_src/assets/img/space-based-solar-power/sixth_im.jpg)

Optical concentrator with microwave power transmission, i.e.,

This configuration is based on a symmetrical optical concentrator or "sandwich" design which does not require very large photovoltaic panels, rather vast arrays of mirrors, several kilometers across, that collect and redirect sunlight onto much smaller photovoltaic solar cells. The electricity so created is then transmitted to the earth through a simple microwave link. In this configuration, the satellite is placed 36,000 kilometers above the ground.

Such an approach simplifies the power management and distribution arrangement compared to Type one or Type two configurations, as captured solar energy can be largely moved around by redirection rather than through physical electrical infrastructure.

Type three systems may, therefore, prove the most viable to construct. Power in this system would be transmitted using a technique called `Retro-directive Phased Array` where an encrypted pilot signal from the ground handshakes with the satellite's active electronic beam steering system to link the transmitter and receiver. 
 
# Laser solar satellites  Vs  Microwave solar satellites 

### Pros of laser solar satellites:

- Relatively low startup costs in the $500 million to $1 billion range.
- The single launch per laser transmitting satellite would be self-assembling, lowering the cost and risks substantially.
- The small diameter of the laser beam would make it simpler and cheaper to implement on the ground.

### Cons of laser solar satellites:

- Comparatively low power of each individual satellite, in the area of one to ten Megawatt per satellite would require several satellites to make a substantial impact.
- There are several safety concerns with lasers in space such as blinding and weaponization.
- Laser transmitting satellites would have trouble beaming power through heavy clouds and rain.

### Pros of microwave satellites:

- Steady uninterrupted transmission of power through rain, clouds, and other atmospheric conditions.
- Safely transmits power through the air at intensities no greater than the midday sun.
- It provides up to one Gigawatt of energy to a terrestrial receiver, enough to power a large city.

### Cons of microwave solar satellites:

- Production costs in the tens of billions of dollars range requiring as many as 100 launches into space, with space-based assembly required.
- The terrestrial receiver would be several kilometers in diameter.
- The long-distance of the satellite from earth would make it nearly impossible to repair.

# Rectenna
![rectenna](/blog_src/assets/img/space-based-solar-power/seventh_im.jpg)

The beam terminates on an earth-based receiver called a Rectenna with a maximum intensity at the rectenna’s center and tapering to nearly nothing at the periphery. The rectenna could be just about the size of a municipal airport and is made up of a mesh of dipole antennas that capture all the incident energy from the beam. It is nevertheless 80% transparent to sunlight, allowing the land beneath to remain available for agricultural uses.

According to the November 2011 IAA report, these satellites could transmit as much as 1 to 10 GW of constant energy as compared to a typical nuclear power station's output of 0.5 to 1.0 GW. A GW could light 750,000 homes. That is the potential of this satellite!

# Challenges:

Some of the challenges involved in implementing this project are as follows:

- low-cost reusable space access.
- dealing with launch costs.
- demonstration of space to earth power beaming.
- efficient and light spaced, qualified with solar arrays
- space assembly maintenance and servicing.
- large in-space structures.

Nearly every assessment has concluded that SBSP is technically achievable. Few argue that SBSP is impossible because of its economic costs. But a system that is actually capable of solving the serious problems on the global agenda such as sustainable development, climate change, energy security and simultaneously enhancing mankind’s ability to access and make the best use of the resources of space deserves serious consideration.

While the satellite would suffer degradation due to space environment factors such as particle radiation and meteor material impacts, as would any satellite, it would provide a lifetime of 20 to 30 years for every satellite. It does not require the kind of heavy maintenance that is required by a ground-based power plant either (which is subject to weather damage). A nation with the capability to launch 100 satellites to construct an SPS would certainly have the access and capability to service it.

If successful in the market, ultimately thousands of systems could be launched to geosynchronous orbit to supply a part or all of the estimated 55 terawatt power requirements for all earthly needs by the year 2100.

Humanity has never contemplated either a space or energy project on such a vast scale or one which would alter our relationship with the cosmos. It is a space project, an energy project, a transportation project, and an infrastructure project. It is a project that could solve the future energy crisis with clean and renewable energy.

Space solar power can completely solve our energy problems in the long term. We could stop burning coal, we could stop burning fossil fuels, we could even shut down our nuclear power plants if this system gets implemented. Remote areas on earth that don't have access to electricity due to the sheer difficulty of drawing out electric cables to those areas to transmit power could be easily powered with this technology!  It would be the key to humanity’s survival. The sooner we start and the harder we work, the shorter “long term” will be.

References for further reading :

- [https://en.wikipedia.org/wiki/Space-based_solar_power](https://en.wikipedia.org/wiki/Space-based_solar_power)
 
- [https://earthsky.org/earth/space-based-solar-energy-power-getting-closer-to-reality](https://earthsky.org/earth/space-based-solar-energy-power-getting-closer-to-reality)

- [https://www.youtube.com/watch?v=eBCbdThIJNE](https://www.youtube.com/watch?v=eBCbdThIJNE)
 
- [https://iaaweb.org/iaa/Studies/sg311_finalreport_solarpower.pdf](https://iaaweb.org/iaa/Studies/sg311_finalreport_solarpower.pdf)
