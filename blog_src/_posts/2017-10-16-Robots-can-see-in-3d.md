---
layout: post
title: "Robots Can Now See In 3D"
author_github: sinchana-hegde
date: 2017-10-16 05:05:00
image: '/assets/img/'
description: 'Exploring how a robot perceives depth'
tags:
- Robots
- Computer Vision
categories:
- Piston
github_username: 'sinchana-hegde'
---

Autonomous robots can inspect nuclear power plants, clean up oil spills in the ocean, accompany fighter planes into combat and explore the surface of Mars.

Yet for all their talents, robots still can't make a cup of tea.

That's because tasks such as turning the stove on, fetching the kettle and finding the milk and sugar require perceptual abilities that, for most machines, are still a fantasy.

Among them is the ability to make sense of 3-D objects. While it's relatively straightforward for robots to "see" objects with cameras and other sensors, interpreting what they see, from a single glimpse, is more difficult.

Now researchers have developed a new computer vision algorithm that gives a robot the ability to recognize three-dimensional objects and, at a glance, intuit items that are partially obscured or tipped over, without needing to view them from multiple angles. For instance, objects with flat square tops tend to have legs. If the robot can only see the square top, it may infer the legs. All pots are hollow in the middle. When the algorithm was being trained to recognize pots, it didn’t spend time analyzing the hollow parts. Once it knew the object was a pot, it focused instead on the depth of the pot or the location of the handle. It sees the front half of a pot sitting on a counter and guesses there’s a handle in the rear and that might be a good place to pick it up from.

![Visualisation](/blog/assets/img/Robots-can-see-in-3D/visualisation.jpg)

The researchers trained their algorithm on a dataset of roughly 4,000 complete 3-D scans of common household objects: an assortment of bathtubs, beds, chairs, desks, dressers, monitors, nightstands, sofas, tables and toilets.

Each 3-D scan was converted into tens of thousands of little cubes, or voxels, stacked on top of each other like LEGO blocks to make them easier to process.

The algorithm learned categories of objects by combing through examples of each one and figuring out how they vary and how they stay the same, using a version of a technique called probabilistic principal component analysis.

Researchers have been teaching robots to recognize 3-D objects for a while now. What's new is the ability to both recognize something and fill in the blind spots in its field of vision, to reconstruct the parts it can't see.

That has the potential to be invaluable in a lot of robotic applications.