---
layout: post
title: "Ever wondered how the Internet works"
date: 2019-10-02 00:24:44
image: '/assets/img/'
description: 'A brief account of how the internet has evolved and how it works today'
tags:
- Networking
categories:
- CompSoc
github_username: 'adityachirania'
comments: true
---

## EVER WONDERED HOW THE INTERNET WORKS?

From the instant I search for a website to the instant the webpage loads on our browser, there are a lot of things that happens in between these two instants. Let’s take the example of [Google](http://google.com/) which most of us have searched for. The browser does not know what [Google](http://google.com/) is, so it sends a message to the internet service provider asking if it knows what Google is. The internet service provider passes on the URL to the DNS servers. A DNS server is a computer server that contains a database of public IP addresses and their associated hostnames. The DNS server returns the IP address of the Google servers and now the browser makes a request to the Google servers for the webpage. So, the google servers send the HTML, CSS and JavaScript files back to the browser and the browser loads these files and then finally the webpage appears in front of us. So, if you directly search for the IP address of [Google](http://google.com/) your webpage will still load and that too a little faster because, now we would not need the DNS server to look up the website’s server address for us.

What do you think these numbers and dots were? That number is an IP address.

## What is an IP address?
We have come across the term IP address various number of times. An Internet Protocol (IP) address Is a number assigned to each device that uses the Internet protocol to communicate. Earlier an IP address was defined as a 32-bit number but as the Internet grew there was a need for many more distinct IP addresses. Hence an IP address was standardized as a 128-bit number since 1998. The IP address helps in identifying each device in the network uniquely and also helps in locating a node in the network. 

## To really appreciate how the internet works in the present lets go back into the past and see how it all started.
It all started with the ARPANET. ARPANET was an academic research project funded by the Advanced Research Projects Agency, a branch of the military known for funding ambitious research projects without immediate commercial or military applications. Initially, the network only connected the University of Utah with three research centres in California. By the end of 1970, ARPANET had grown to 13 different locations including HARVARD and MIT. By 1982, the network only had about 100 nodes. The increasing rush on the ARPANET led to the creation of TCP/IP. During the 1980s, the National Science Network funded several supercomputing centres around the United States. And in 1986 the agency created a TCP/IP-based network called NSFNET to link those supercomputing centres together and allow researchers across the country to use them. The primary goal was to allow computer science researchers to log into the supercomputers and perform academic research. But NSF decided not to limit NSFNET to that purpose, allowing the network to be used for a wide variety of academic purposes. As a result, the NSFNET became the internet's "backbone," the high-speed, long-distance network that allowed different parts of the internet to communicate. Soon, commercial firms took over the job of carrying long-distance internet traffic, allowing the government-funded NSFNET to be decommissioned. Officials were careful to ensure that no single company controlled too much of the backbone, helping to create a competitive market for internet connectivity that still exists today.


## The present Internet Backbone
Let’s just take a very simple example. We have a house and there is WiFi connection available in the house. This WiFi gives us internet from the router. The router is connected to the modem. The modem allows the internet service provider to connect to it. The modem has the signal towers that transmit signals of the URL we search for. Finally, the signal tower is connected through wires to the ISP (Internet service provider). The internet service provider is connected with the help of a cable to the Internet Backbone. So, the house with WiFi connection is essentially a part of a Local Area Network.

What is the internet backbone that I have referred to in the above paragraph? Well the internet backbone consists of various submarine cables connecting various servers across the world. Yes! That’s true! You read it right! The servers across the world are actually connected through physical cables that are made to pass under the ocean. So, the backbone of the internet is the dense of network of cables that connect numerous servers across the world. These cables also do get damaged at times and they manually have to be fixed. This picture below pictorially represents how dense the network of the cables are. Each shining node represents an IP address of a server.

![THE INTERNET](/blog_src/assets/img/how-the-internet-works/img1.jpg)

So, when we search for a website, the files don’t directly come to us from the concerned server. They hop over many servers around the globe before reaching us. For windows users, try typing “tracert URL” in your command prompt. This would give you the IPs of all servers’ the files hopped over before reaching your computer.


## WWW vs The Internet
There are many people who confuse the World Wide Web to be the Internet. The World Wide Web is not the same as the Internet.	
English scientist Tim Berners-Lee invented the World Wide Web in 1989. The World Wide Web is a global collection of documents and other resources, linked by hyperlinks and URLs.   On the contrary the Internet is the collection of various connected computers throughout the globe. The Internet is the infrastructure while the World Wide Web is service on top of that infrastructure.

## HTTP AND HTTPS
Now that we know that the Internet is such a vast network, we must also know that there is so much of transfer of information with the help of the Internet. The information could be a personal message or even your personal details for that matter. What if somebody else intercepted your message and read them? Ever wondered what http or https before a website’s link is?

*HTTP (Hyper Text Transfer Protocol)*: HTTP used to be the most widely used protocol or a set of rules for the transfer of data over the Internet. But it wasn’t as secure at all. The HTTP transfers data as plaintext and if anyone else intercepts our message they would easily be able to read it. Hence HTTPS was introduced.

*HTTPS*: HTTPS meant HTTP + some cryptography rules. All the data that is sent as per this protocol is encrypted before it is sent. Encryption simply means that the original message is converted to some other form that wouldn’t make any semantic sense to anyone who manages to intercept the message. The data is decrypted when it reaches the person it was intended for. Hence HTTPS is a more secure protocol for transfer of data over the internet. 

So, this was a brief account of how the internet works! Hope you enjoyed reading!