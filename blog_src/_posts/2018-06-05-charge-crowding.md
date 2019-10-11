---
layout: post
title: "Charge Crowding"
author_github: sampathkoti
date: 2018-06-05 23:32:44
description: "The smallest entity 'charge' can cause the greatest disasters in electronic devices"
tags:
- CAS/SPS
- electronic devices
categories:
- Diode
github_username: 'sampathkoti'
---

# Charge crowding

## Electrostatic Discharge

Electrostatic Discharge, or ESD, is a single-event, rapid transfer of electrostatic charge between two objects, usually resulting when two objects at different potentials come into direct contact with each other.  ESD can also occur when a high electrostatic field develops between two objects in close proximity.  ESD is one of the major causes of device failures in the semiconductor industry
Electrostatic charge build-up occurs as a result of an imbalance of electrons on the surface of a material.  Such a charge build-up develops an electric field that has measurable effects on other objects at a distance.  The process of electron transfer as a result of two objects coming into contact with each other and then separating is known as 'triboelectric charging'.  
     
This charging process results in one object gaining electrons on its surface, and therefore becoming negatively charged, and another object losing electrons from its surface, and therefore becoming positively charged. A person can get triboelectrically charged in a number of ways, even by just walking across a room. The tendencies of various materials to charge up either positively or negatively are shown in a Triboelectric Series.      
There are three (3) predominant ESD models for IC's: 1) the Human Body Model (HBM); 2) the Charged Device Model (CDM); and 3) the Machine Model (MM).  The HBM simulates the ESD event when a person charged either to a positive or negative potential touches an IC that is at another potential.  The CDM simulates the ESD event wherein a device charges to a certain potential, and then gets into contact with a conductive surface at a different potential.  The MM simulates the ESD event that occurs when a part of an equipment or tool comes into contact with a device at a different potential. HBM and CDM are considered to be more 'real world' models than the MM. .


## ESD Control With Ionization 

### Introduction

Electrostatic charge attracts contamination to surfaces of semiconductor wafers and flat panel displays, as well as to critical surfaces of process tools. Electrostatic discharge (ESD) damages electronic components as well as the tools used to manufacture them (for example, semiconductor photomasks).  
 
The ESD sensitivity of semiconductor components is routinely decreasing with each succeeding semiconductor generation. While typical damage thresholds for semiconductors may range from 50 volts to over 10,000 volts. Technology trends in all areas of electronics production will make existing static problems worse. 

### Static charge control with ionisation

Static charge generation is unavoidable. Triboelectric charging occurs through the contact and separation of materials. A charged surface can also induce an electrostatic potential (voltage) on conductive objects close to the static charge without any actual contact.  Avoiding charge generation and transfer throughout the electronics manufacturing process is essentially impossible, but with a comprehensive program, it can be controlled. Every static control program starts with extensive grounding of all conductive and static dissipative materials including personnel.  
 
Non-conductors are required in process areas (most often, they are the product itself). Since charged non-conductors will not consistently lose their charge by grounding, methods of neutralization are needed.  Ionization is the most used technology for the neutralization of static charge on non-conductors and conductors that are isolated from ground. Room ionizers provide neutralization over large areas, worksurface ionizers target smaller production areas, and point-of-use ionizers are included in production equipment. Ionizers used in electronics production areas must follow the same general guidelines for material compatibility as other equipment in the area.


### Challenges

Most current ionization techniques used in electronics production are electronic, employing corona ionization. Efficient designs, providing sufficient ion densities for fast neutralization, use the AC, steady-state DC, and pulsed DC technologies currently available.  Increasing future requirements for low levels of ionizer balance require the use of sophisticated methods of monitoring and feedback control. We have already learned in disk drive production that there is a practical limit of about 3-5 volts in control of corona ionizer balance. This has produced a shift to the use of alpha or soft x-ray ionizers. Physics dictates that these ionizers produce a continuous balance of positive and negative ions without feedback and control methods. They will find increasing uses in applications requiring low levels of ionizer balance, particularly in industries shifting to automated production techniques.  Maintenance of these ionizers involves the periodic replacement of their active elements and compliance with the applicable government regulations.  
 
Measuring methods of ionization may need to be changed to better represent the range of sizes of ESD sensitive components. Static charge issues for a one-meter square of glass (flat panel display) are very different than for a GMR head, and neither is adequately represented by measurements made with a CPM. Yield analysis needs to establish requirements for ionizer balance, as well as the applicability of existing ionizer technologies (particularly AC ionizers) in handling extremely static-sensitive components.  
 
Close attention must also be paid to turbulence generation by the ionizer.  Cleanrooms use laminar airflow to prevent particle deposition on critical surfaces.  The use of ionizing blowers or other ionizers placed in the airflow path means that turbulence could compromise the laminarity of the airflow.  Therefore, bar ionizers, ionizing blowers or other types of ionizers must be carefully selected to minimize this effect.  The cleanroom compromises between contamination control and ESD control must be well understood.  
 
The following are some recommendations that will assist manufacturers of ionizer products in updating equipment specifications:   
 
1. Establish the “real” damage thresholds of electronic devices with a well-defined testing program, including simulation methods that reflect the ESD hazards that devices will encounter. For example, the increasing use of automation tends toward CDM and MM testing rather than HBM.  Estimate how sensitive devices will be in the future.
2. Establish ionizer neutralization time and balance specifications for standard airflow rates (both laminar and turbulent) and operating distances. Relate this information, if possible, to production yield or defect rates. 

## Conclusion

Ionization continues to be an essential element in a static control program. As with other elements in the program, control of the operating parameters will become more critical with technological change. Product design to maximize ESD damage thresholds may not be able to keep up with this rapid change, putting more dependence on ionizers and other static control methods to protect products. In all areas we are looking at rapidly approaching technology barriers. Surmounting these barriers means, “static control is not an option”. Ionizers and ESD control methods will need to keep pace with rapid technology change or they will become the barriers to future production.
