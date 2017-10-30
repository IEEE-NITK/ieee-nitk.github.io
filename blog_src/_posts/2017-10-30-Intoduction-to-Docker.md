---
layout: post
title: "Docker"
author_github: mahim23
date: 2017-10-30 10:10:10
image: '/assets/img/'
description: 'A brief introduction to Docker'
tags:
- Docker
- Containers
- DevOps
categories:
- CompSoc
github_username: 'mahim23'
---

Docker is probably the most talked-about infrastructure technology of the past few years. And why not? It makes managing and deploying applications so much easier without the overhead of a Virtual Machine. Here's how:

**Docker** is a tool designed to make it easier to create, deploy, and run applications by using containers. **Containers** allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing so, thanks to the container the developer can rest assured that the application will run on **any other machine** regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.

In a way, Docker is a bit like a virtual machine. But unlike a virtual machine, rather than creating a whole virtual operating system, Docker allows applications to use the same Linux kernel as the system that they're running on and only requires applications be shipped with things not already running on the host computer. This gives a significant performance boost and reduces the size of the application.

## Containers

An image is a lightweight, stand-alone, executable package that includes everything needed to run a piece of software, including the code, a runtime, libraries, environment variables, and config files.

A container is a runtime instance of an image—what the image becomes in memory when actually executed. It runs completely isolated from the host environment by default, only accessing host files and ports if configured to do so.

Containers run apps natively on the host machine’s kernel. They have better performance characteristics than virtual machines that only get virtual access to host resources through a hypervisor. Containers can get native access, each one running in a discrete process, taking no more memory than any other executable.

## Containers vs. Virtual Machines

![Containers vs VM](/blog/assets/img/Docker/docker-vm-container.png)

**Virtual Machines** run guest operating systems—note the OS layer in each box. This is resource intensive and the resulting disk image and application state is an entanglement of OS settings, system-installed dependencies, OS security patches, and other easy-to-lose, hard-to-replicate ephemera.

**Containers** can share a single kernel, and the only information that needs to be in a container image is the executable and its package dependencies, which never need to be installed on the host system. These processes run like native processes, and you can manage them individually by running commands like docker ps—just like you would run ps on Linux to see active processes. Finally, because they contain all their dependencies, there is no configuration entanglement; a containerized app **“runs anywhere”**.

## Who is Docker for?

Docker is a tool that is designed to benefit both developers and system administrators, making it a part of many DevOps (developers + operations) toolchains. For *developers*, it means that they can focus on writing code without worrying about the system that it will ultimately be running on. It also allows them to get a head start by using one of thousands of programs already designed to run in a Docker container as a part of their application. For *operations*, Docker gives flexibility and potentially reduces the number of systems needed because of its small footprint and lower overhead.

## In a nutshell, here's what Docker can do for you: 

It can get more applications running on the same hardware than other technologies; it makes it easy for developers to quickly create ready-to-run containered applications; and it makes managing and deploying applications much easier. Put it all together and I can see why Docker is riding the hype cycle as fast as I can recall ever seeing an enterprise technology go.

## Setup 

Docker is available on multiple platforms, on cloud and on-premises. It can be downloaded and installed by following the instructions [here](https://docs.docker.com/engine/installation/)

> Installation on Windows and Mac OS have standalone install packages with some prerequisites for the OS.
If your system does not meet the requirements, you can install Docker Toolbox.

You should be able to run docker run hello-world and see a response like this:

```sh
$ docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
...(snipped)...
``` 

> Note: version 1.13 or higher is required
