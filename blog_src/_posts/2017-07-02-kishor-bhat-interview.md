---
layout: post
title: "Peeking into a hacker's mind - an Interview with Kishor Bhat"
date: 2017-07-02 0:0:0
author_github: swathisbhat
image: '/assets/img/'
description: 'Capture the fun and magic of hacking along with a great insight to the field of cyber-security through this interview with Kishor Bhat'
tags:
- Cyber Security
- CTFs
categories:
- CompSoc
github_username: 'swathisbhat'
comments: true
---

![Kishor Bhat](/blog/assets/img/kishor-bhat-interview/kishor.jpg)

 As our world becomes increasingly networked, protecting these networks is no longer optional. A majority of today’s companies are insufficiently prepared for a cyber attack. Unfortunately, very few in NITK have cyber-security as their interest.I hope this interview with Kishor Bhat ,a cyber-security enthusiast motivates the readers into understanding the importance of cyber security in today’s digital world.


### 1. How important are CTFs to a security enthusiast? Give an account of your experiences from playing CTFs

In my opinion, pretty important.

For the uninitiated, CTFs or Capture the Flag contests are security competitions that come in two flavours: jeopardy and attack-defense.
Jeopardy games involve a number of challenges dealing with cryptography, exploitation and reverse engineering of binaries, forensics, web security, and general programming. The objective of a challenge is to get a string, or "flag", that you then submit to the game server in exchange for points. Popular ones include Boston Key Party, Ghost in the Shellcode, and Plaid. There's a yearly circuit wherein CTF teams get ranked, and different CTFs serve as qualifiers for the annual grand finale at DEFCON in Las Vegas. Attack-defense games, on the other hand, involve teams receiving servers loaded with insecure software. The goal here is to patch and protect your server while exploiting those held by other teams.

So, why are these important? For a student of security, they serve as a regular means of honing one's skills. Good CTFs often involve knowledge of the latest CVEs and exploitation techniques. If you're playing with a team, it helps you learn cooperation and patience. Doing well regularly lets you climb the leaderboard and flaunt your international rank. Finally, they're a ton of fun!

I've already waxed eloquent on my adventures with my CTF teammates; read "Questing with No Internet Access" in Shoreline 2017! (http://www.nitk.ac.in/shoreline)


### 2. I believe cryptography interests you the most in cyber security. What pulls you towards it?

I wouldn't say that it interests me the most, but I've certainly done a bit of work in the area. What fascinates me about cryptography is how it can be used to solve an eclectic mix of problems, ranging from secure communications to verifying download integrity, from zero-knowledge proofs to ensuring that an election is clean. The elegance of the mathematics behind the protocols involved, the quest for crypto usable by the common man, and the sheer joy of working on, understanding, and solving crypto challenges both in CTFs and in real-world open-source tools like radare2 and MIG have pushed me forward. That said, I have a long way to go, and lots to learn.


### 3. Do you feel that the private sector does a better job than academia in the field of security?

While I haven't done any research internships in the area, I can speak a bit about the topic based on my experiences here at NITK. In academia, we often think that we've solved a problem, not realizing that implementing the solution we've arrived at is a whole 'nother ballgame. Chinmay and I saw this while working on our major project involving the optimisation of search strategies for binary analysis. From what I've observed in the real world, academia is often a couple of years ahead of industry in terms of solutions, and it takes a while for research to trickle into the mainstream industry. Many times, industry is concerned with putting together building blocks supplied by the research community into coherent, usable tools. I wouldn't say one is better than the other; they are two different realms, and two faces of the same coin.



### 4. List your all time favorite security tools and a line about why you prefer them over others

A lot of tools I use are in the context of CTFs. The list at [here](https://github.com/zardus/ctf-tools) more or less sums that up. A security practitioner should be versatile and capable of using a wide variety of tools, but some that deserve mention if only for the sheer number of times I fire them up include:
- John the Ripper, rsatool, various CLI hashing utilities, etc. for crypto tasks
- radare2 and gdb for binary analysis
- curl and Burp Suite for investigating web applications
- wireshark and nmap for network file inspection and port scans respectively

There are a ton of open source security projects that could use your help. Prominent ones often provide funding for contributions through GSoC or similar summer programs. Dive in!


### 5 . Best books you would recommend to a security enthusiast

Some books that I've read and enjoyed are:
- Understanding Cryptography by Paar and Pelzl
- The Web Application Hacker's Handbook by Stuttard and Pinto
- The Tangled Web by Michał Zalewski
- The radare2 book
- Practical Packet Analysis by Sanders

I have a ton more on my to-read list. Blog posts, Reddit and the neverending stream from the Twitterverse are also excellent ways to stay abreast of current security news.

### 6. Your approach to learning....

If a topic catches my fancy, I find out what resources are the leading references in that area, gather secondary resources like blog posts, and then set about devouring this information. It's certainly time-consuming, and my Pocket and bookmarks are overflowing, but it certainly keeps you occupied.  



### 7.  Any advice or suggestions you’d like to give us?

Everyone learns in a unique way. What works for me may not work for you. I found that I absorbed material better when I was putting it to practical use, such as by playing CTFs, working on academic endeavours involving actual implementations, or by contributing to open source tools and projects.
That said, I do suggest that everyone try their hands at CTFs; IMO, they're one of the best ways to get started in the field.


#### Contact Details:
**Twitter** - [@therealkbhat](https://twitter.com/therealkbhat)  
**Email** - [kishorbhat@gmail.com](mailto:kishorbhat@gmail.com)  
**Website** -  [https://kbhat.rocks](https://kbhat.rocks)  


{% if page.comments %} • <a href="{{site.url}}{{site.baseurl}}{{ page.url }}#disqus_thread">0 Comments</a>{% endif %}



