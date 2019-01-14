---
layout: post
title: "Computational Approaches of Shock Waves"
author_github: shashank-ravichandir
date: 2018-06-05 23:32:44
description: 'CFD approaches for solving involving shock waves'
tags:
- Shock Waves
- CFD 
categories:
- Piston
github_username: 'shashank-ravichandir'
comments: true
---

In this article I would like to discuss the two different CFD approaches while solving for flows involving shock waves.

In flow fields involving shock waves there is a sharp discontinuous change in the flow variables like pressure, density, temperature, etc. across the shock. The first approach is to have the shock wave appear naturally in the computational domain as a direct solution of the governing equations. This is called the *shock capturing method.* The second approach is to explicitly introduce the shock wave into the flow and then solve the governing equations for the rest of the domain (between the shock and some boundary) to determine the effect of the shock on the flow field. This is called the *shock fitting method.*

The shock capturing method is used for complex flows for which we do not know the location or number of shock waves. This approach also does not require any special treatment of the shock within the algorithm used and hence simplifies programming. The disadvantage of this approach is that the shock wave obtained is smeared over a finite number of grid cells and rarely resembles the shape of the physical shock wave and hence the precise location of shock discontinuity and the shock thickness are uncertain within the mesh elements’ size.

In contrast in the shock fitting method, the shock is treated as a discontinuity and its location is defined numerically. However prior knowledge of the shock’s location and the number of shocks is required which is a major disadvantage while dealing with complex flows.

Hence a combination of these two methods is generally used whenever possible. A shock capturing approach is used to predict the approximate location of shocks and then these shocks are fit midway during computation. Another combination is to fit shocks explicitly in those parts where we know they occur and to employ a shock capturing method for the remainder of the flow field.
