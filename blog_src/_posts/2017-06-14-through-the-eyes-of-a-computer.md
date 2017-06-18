---
layout: post
title: "Through the eyes of a computer"
author_github: mohita
date: 2017-06-14 13:10:44
image: '/assets/img/'
description: 'Learn how to make your computers see the world like you do'
tags:
- Computer Vision
- CompSoc
- Diode
- Image Processing
- artificial intelligence
categories:
- IEEE
github_username: 'mohita'
comments: true
---
![Intro](/blog/assets/img/through-the-eyes-of-a-computer/image001.jpg)

**Robot** -- A word that might remind you of a Rajnikanth starrer or give you the picture of a metallic body going here and there and doing things that humans do quite naturally, on their own. All of us have at least once thought of owning a robot that could do our assignments, or just do things that we are lazy to do. And then, as you enter your college, you take online courses for learning how to build robots that follow lines, identify colours and do all sorts of things that you think it should do. You brag about it in front of your friends and later come to me and say, “Oh well, I have designed a robot that can follow a line!” and I would ask you a simple question. Can your robot see the line? Now, when I ask you this question, I mean to know if the robot can see like humans. A robot isn’t fully automated if you restrict what it should see. You can use sensors to detect lines but that doesn’t mean that the robot has its own vision. Our ability to see and perceive the things around us is perhaps the greatest ability we all have. And when you pass on this ability to a computer or any machine per se, that’s what you called Computer Vision or more generally, Machine vision. Many of you would have already heard a lot about it, it’s the future of artificial intelligence. But truly speaking, this futuristic topic isn’t that new.

Have you heard about the Robot Sony Aibo, if not you got to look at this video!

<iframe width="560" height="315" src="https://www.youtube.com/embed/RDdpqlZ1N4Y" frameborder="0" allowfullscreen></iframe>

These robots were conceptualized in the 1990s and made available to the general public in 1999. They went on to become very popular and stayed in the market till 2005. Millions of models were sold world wide! But what made these robots so popular?

![img2](/blog/assets/img/through-the-eyes-of-a-computer/image002.jpg)

They were one of a kind. They could identify charging stations around the house and charge themselves. They behaved like actual dogs, they would grow and learn based on their owner ,who could teach their dog whatever they wanted using visual cues. They made use of the most efficient CV and ML algorithms of those times. Many of you would have heard of the famous SIFT ( Scale Invariant Feature Transform ) detector. It was patented by David Lowe ( who is currently working as a research scientist at Google) in 1999. This feature detection algorithm was readily used in Aibo making it very autonomous. Eventually, Sony came up with Sony Qrio, which was a human-like robot that was so efficient that it could learn a dance by looking at the choreography!
Have a look at this video!

<iframe width="560" height="315" src="https://www.youtube.com/embed/Qv_4eR-P58E" frameborder="0" allowfullscreen></iframe>

It’s not only the robots that steal the show. We all are fascinated by the idea of self-driving cars and would want to own one. There are numerous other examples illustrating how Computer Vision had its aura in the past and has been continuing to amaze us with inventions happening almost every day.

With the advancements happening in this field, it’s good to have some genuine idea of what takes you into this field and how you can build upon it.

I’m pretty sure, that by now, you are ready to take a dive into the world of Computer Vision!

First of all, let me make somethings clear! There are many misconceptions people have about Computer Vision, atleast I was one of them and I always thought it was a perfect blend of Image Processing and Machine Learning. So, I went on to learn Image processing and Machine learning separately and when I arrived at a real CV problem during my internship, I realised that this perfect blend isn’t complete without a few other important ingredients that go into the making. So, I am going to tell you some important topics you need to know before you start with Computer Vision. Of course having the knowledge of Image processing helps us a lot in getting acquainted with some basics of Feature Extraction. But the real world of Computer Vision is full of cameras and geometry.

![img3](/blog/assets/img/through-the-eyes-of-a-computer/image003.jpg)

Didn’t like Geometry in school? I bet you will start loving it when you are introduced to problems that transform basic geometry into a higher level of application. Loved geometry, you will start loving it more! :P

Most of the online tutorials on Computer Vision properly cover the basics of Cameras and Geometry but the major struggle is understanding the algorithms without a proper knowledge of Linear algebra. Reducing huge matrices and finding eigenvectors (oh! Jargons: P) never made so much sense when we were doing them in our 3rdSEM. But as they say, everything happens for good :P. You will realise that it is indeed true and it’s worth spending time on basics of linear algebra. It not only helps in the understanding the existing algorithms, but also helps in getting the intuition with which those great scientists came out with those algorithms. And when you know this formula, you are ready to devise algorithms of your own!

![img4](/blog/assets/img/through-the-eyes-of-a-computer/image004.jpg)

When you start learning the epipolar constraints and camera calibration, it does get intimidating at first. But don’t worry my friend, it’s just a phase :P. It’s just a simple change of coordinates – You project your point in the world frame to the camera frame (using Extrinsics) and then bring it from the camera frame to the image frame(using Intrinsics). Well, it’s not this simple , but trust me, it’s really interesting. And if you want to go further, you can use Machine Learning to unleash the power of your CV algorithms.

I will give some references in the end so that you can also embark onto this journey.
Talking about applications, I forgot to mention about Virtual Reality (ahh! That’s what we wanted to hear :P). There is enormous scope of Computer Vison in this field. Imagine clicking pictures of a place you are holidaying at and your friend gets to see the entire place in a 3D view in Real time! Won’t that be cool? Well, of course it will be unless you spent lakhs to actually go to that place :P.

That was a lot of introduction I suppose. So, let’s start learning!
Here are some good resources to get started :D –
1.	Introduction to Computer Vision by Udacity. A well designed and fun filled course that takes you from the theory to https://www.youtube.com/watch?v=Qv_4eR-P58E
2.	This course is good for deep intuition in the image processing part
https://www.youtube.com/watch?v=715uLCHt4jE
3.	The book “Multi view Geometry” for those who want to go into the depths of geometry.

These are the resources that should be more than enough to get a little idea on how you do things. To actually do things, you can solve problem sets online or pick up OpenCV documentation and start exploring. By the way, OpenCV is a library that has millions of functions already implemented for you so that you can get yourself involved in what’s yet to be done :)

Now that you have read this loooong post, Go explore the fascinating and futuristic world of Computer Vision!

Happy CV :)
