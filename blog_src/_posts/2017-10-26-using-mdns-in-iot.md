---
layout: post
title: "Making Iot communications easy using mDNS"
date: 2017-10-26 0:0:0
image: '/assets/img/'
description: 'Forget IP addresses when in local network'
tags:
- Iot
- Networking
categories:
- CompSoc
github_username: 'hrily'
comments: true
---

A project in Iot often requires multiple devices communicating with each other. This is usually done through sending messages over sockets. To locate a device, usually addresses are used. This is good technique, but due to commom use of DHCP, the IP addresses change constantly. So one needs to keep track of these changing IP addresses.

What if you don't need to remember the changing IP addresses? That's where mDNS comes into picture.

# What is mDNS?

[mDNS](https://en.wikipedia.org/wiki/Multicast_DNS) stands for Multicast Domain Name System. Apple needed to use readable machine names on a local network without a nameserver, so implemented multicast DNS in their [Bonjour](https://en.wikipedia.org/wiki/Bonjour_(software)). Multicast DNS uses a special domain called `local`. Host names are automatically registered in this domain.

mDNS uses multicast address `224.0.0.251` and UDP as it's transport layer protocol on port `5353`.

# How to use mDNS?

I found about this cool feature recently. Most of the modern OSes support mDNS out of the box. In dedication to popular Iot device Raspberry Pi, I will tell you the usage of mDNS in linux. 

Linux uses [Avahi](https://www.avahi.org/) library for mDNS. To install Avahi on your linux/ubuntu system

~~~~
$ sudo apt-get install avahi nss-mdns
~~~~

<br>
Most probably above packages are installed by default. Now start `avahi-daemon` which will handle mDNS functions.

~~~~
$ system-ctl start avahi-daemon
$ system-ctl enable avahi-daemon
~~~~

<br>
Now we'll need to configure our system to listen to mDNS. To do this, edit `/etc/nsswitch.conf` and modify the `host :` line as follows:

`hosts:	files mdns_minimal [NOTFOUND=return] dns mdns`

If you’re using IPv4 only, then use mdns4_minimal and mdns4 instead.

Now you are all set to go. You can check by resolving your own domain:

~~~~
$ dig +short <hostname>.local @224.0.0.251 -p 5353
~~~~

<br>
Here the `<hostname>` is the system's hostname. If you don't know this, then execute `hostname` to get it. For example, my hostname is `hrily`, so following is the output of `hostname`.

~~~~
$ hostname
hrily
~~~~

<br>
So when I resolved my hostname, I got:

~~~~
$ dig +short hrily.local @224.0.0.251 -p 5353
10.50.47.112
~~~~

<br>
<br>
# Applications

Now that we know how to use hostnames instead of IP addresses, we have a cool set of applications. Whenever you want to ssh to your RPi with hostname `myrpi`, you just need to do:

~~~~
$ ssh user@`dig +short myrpi.local @224.0.0.251 -p 5353`
~~~~

<br>
This is really good usage that I need constantly. When I'm in my cammpus network, but not in reach of my laptop and need to do some work on it, I just ssh into it using my phone using above command. I don't really need to know what IP address was assigned to my laptop. 



I hope you find mDNS useful. Untill then, this is _hrily_ signing off...