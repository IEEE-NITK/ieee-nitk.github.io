---
layout: post
title: "Envision Project 1 - Professor Matching for Research Internships"
author_github: anirudh0707
date: 2018-05-05 23:32:44
image: '/assets/img/'
description: 'Matching students with professors based on similar interests for Research internships'
tags:
- Android
- Web 
- Django
categories:
- Envision
github_username: 'anirudh0707'
---

## Idea
Finding research/internship opportunity under a professor’s guidance is exceedingly difficult because the professors are very busy and students are not well aware of the professors who are ready to give internship opportunities. The professor has to shortlist the resumes and the student has to find out and send a resume to every professor offering a research opportunity. Obviously, this is a time consuming and tiresome process for both students and the professors.
    
We came up with a idea which not only speeds up this process but also makes it hassle-free. The idea is to create a platform which comprises of students and professors and then, try to create a match from their preferences. The professor and student both login into this platform and set their preferences (for example professor sets his minimum cgpa as 8 while the student can set the cgpa he secured as 8.2). A recommender system works in the background which takes up each professor, one at a time and tries to create a match with the students in the platform. It then generates a list of students which match the criteria and the professor can just pick the students from the list.

## Implementation

The front-end of the project comprises of an Android app and a Website. Android app is developed on Android Studio using libraries such as Volley and Gson and with Java as the primary language. The Web Frontend is built using the standard web technologies like HTML, CSS , JavaScript , libraries and Frameworks of JavaScript. Login and signup system is implemented using the OAuth standards via Google/Facebook.

The back-end of project used python as a primary programming environment and Django framework. It uses MySQL database. The algorithm tries to create an overlap in the student profile and professor requirements and make a ranked list of recommended candidates.

## How did IEEE benefit us?

IEEE envision project helped us to learn different programming languages and technologies. In the process we also learned how to use GitHub effectively. We also learned how to work as a team, how to devise a plan and how to go about developing such projects. Also, helped us in getting along with a better peer group with like minded people! Basically, IEEE mentors helped us whenever we had any problem, hence we could develop such a good platform even though we were first years’.

## Why should you take this up?

Taking up this project in your first year is a good idea as it helps you in learning new stuff. It makes you do something productive. You would be learning so many new things while developing this project which makes it worth the time you spend on it. One will get to meet seniors and get to know about their project, hence a great exposure. Also… Club recruitments. :P

## Team
* Prajwal S Belagavi
* Vaibhav G
* Ranjana K
* Nisarg S. Joshi

![The Team](/blog/assets/img/prof-matching/team.jpg)
The Team

## Mentors
* Mahim Agrawal
* Ashwin Joisa
* Praveen Gupta
* Moksh Jain

## Images form the App

![Login Screen](/blog/assets/img/prof-matching/login.jpg)
Login Screen

![List of Students](/blog/assets/img/prof-matching/list-of-students.jpg)
List of students who match a Professor’s Criteria