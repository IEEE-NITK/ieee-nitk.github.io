---
layout: post
title: "An Introduction To WebSockets"
author_github: aksh555
date: 2019-12-30 1:32:44
image: '/assets/img/'
description: 'Evolution of WebSockets'
tags:
- Web
- Web Sockets
- Networks
categories:
- CompSoc
github_username: 'aksh555'
---

# Introduction

*Have you ever wondered how the extremely volatile stock/share market prices are constantly updated on online portals?*
*To have a glimpse of how rapid the changes are, head here* [Cryptowatch portal](https://cryptowat.ch/markets?types=spot%2Bfutures "Cryptowatch")
*Similarly how do new messages automatically pop up in Whatsapp Web or Facebook Chat?*

# A Brief History of Real-Time Web Applications

When a user surfs the web, the browser (client) establishes a HTTP connection with a server; sends certain requests via RESTful routes (‘GET’, ‘PATCH’, ‘POST’, etc) to the server that hosts the website. The server receives the requests and sends information as responses back to the client, which receives and renders the response information on the page. Following this the connection would close. Any further request, (by the user to the same server also) required the opening of a new HTTP connection.

![Image1](/blog/assets/img/websockets/image1.png "Normal HTTP Connection")

This went on just fine until.....
Clients started sending more frequent requests to the server requesting for data.
A good example of this is web apps that need real-time data (like gaming or chat apps). These require an abuse of the HTTP protocol to establish bidirectional data transfer.

# Problem
The main problem in the traditional HTTP model was that it was **always the client that initiated transactions, ie. it was unidirectional**. 
An other reason was increasing overheads due to HTTP. Every time a HTTP request is made, a bunch of headers and cookie data are transferred to the server. This can add up to a reasonably large amount of data that needs to be transferred, which in turn increases latency.

>Basically imagine that each time to get an updated stock's price/a new message from your friend you had to refresh the page, and wait until the new price/message loaded. Firstly how would you even know that there has been a change in price/a new message has been sent to to you? And even if you did, it would take
quite a while to load.

So a number of strategies were proposed to enable the server to 'push' data to the client.
Some of the **startegies** devised to combat the issue were:
### 1. Optimising HTTP Polling
- **Periodic Polling:**
The very first attempt to solve the problem was by polling the server at regular intervals. It could reduce server consumption by increasing time gap between two requests. But ofcourse notifications of server events would be delayed :/
- **Long Polling:**
After the server receives a request, it holds the request open until new data(if any) is available. There were no notification delays.But more server resources were used.
- **Streaming:**
Basically infinitely polling...But the connection could get interrupted by intermediaries serving other requests in a Round-Robin manner.

### 2. AJAX
This technology can be used to create better, faster and more interactive applications using XML, HTML, CSS, and JavaScript. With Ajax, once you submit a form, JavaScript makes a request to the server, finds the result and updates the screen. The end user remains unaware of the fact that information was actually transmitted to the server.
AJAX is asynchronous; thus, a web front-end can send any number of AJAX requests without having to wait for each response. Each AJAX request is associated with a JavaScript callback that gets called when the server sends the response.

![Image2](/blog/assets/img/websockets/image2.jpg "AJAX Connection")


### Then came along WebSockets!!

WebSockets provide a **persistent, duplex connection between a client and server that both can use to start sending data at any time**. Since it maintains a persistent unique connection, latency problems faced previously are eliminated. 
Also, no HTTP/XML headers are needed anymore, as the amount of data simply moving around between the server and cient is cut down.

## Working of WS

The client establishes a WebSocket connection through a process known as the WebSocket handshake. This process starts with the client sending a regular HTTP request to the server. An Upgrade header is later included in this request that informs the server that the client wishes to establish a WebSocket connection.
If the server supports WS, the handshake is completed and the initial HTTP connection is replaced by a WebSocket connection that uses the same underlying TCP/IP connection. At this point, either party can starting sending data. Data is transferred through WebSocket as messages, each of which consists of one or more frames containing the data being sent (the payload).


![Image3](/blog/assets/img/websockets/image3.png "WS")

The WS traffic of a web page can be inspected by viewing the WS tag under the Network section of developer tools.

![Image4](/blog/assets/img/websockets/image4.png)

WS are supported in almost every web browser except Android browser and Opera Mini.

**Note: WebSockets don’t make AJAX obsolete but they do supersede HTTP Long-polling/HTTP Streaming as the solution of choice for true realtime functionality.**
**AJAX should still be used for making short-lived web service calls**

## Further Reading

WebSockets can be implemented practically using Node.js(using Socket.IO), Rails(using Action Cable) and in other frameworks too.

## References

- [Intro tutorial](https://medium.com/@yassimortensen/an-introduction-to-websockets-10b131182559) 
- [Implementation with Node and React](https://blog.logrocket.com/websockets-tutorial-how-to-go-real-time-with-node-and-react-8e4693fbf843/)
