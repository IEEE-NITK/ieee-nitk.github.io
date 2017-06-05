---
layout: post
title: "Introduction to GPU Computing"
author_github: vilas897
date: 2017-06-04 12:00:00
image: '/assets/img/'
description: 'An overview of how GPUs and Graphic rendering works along with an introduction to GPGPUs'
tags:
- IEEE NITK
- CompSoc
- High Performance Computing
- Game Development
categories:
- IEEE
github_username: 'vilas897'
comments: true
---
# A Gamer's priced possession - Graphic Cards!

Let's say that you have bought a brand new computer with one of the latest i7 processors but without installing a separate graphics card. And your friend is still using his 5 year PC with an old i3 processor, but with a high end graphics card installed. Both of you play the same game simultaneously on your own computers. But you notice that the gaming performance is better on his PC even though your computer is brand new. You scratch your head not understanding what's going on here. You have a much better CPU and everyone knows that the CPU is the "brain" or the mastermind of the computer.

![GPU](/blog/assets/img/introduction_to_gpu_computing/gpu.jpg)

So lets dive a bit deeper into the technical details. Most of you may already know - GPU stands for **Graphics Processing Unit** and CPU stands for **Central Processing Unit**. Both of them are basically microprocessor chips that reside on a PCB board (A CPU resides on a motherboard while a GPU resides on a graphics card board). From a high level point of view, both of them appear to be the same. After all, they are just crunching a lot of numbers in binary, your typical 0s and 1s, +'s and -'s. So what is the need of a separate GPU when the CPU is capable of doing the same tasks?

## CPU vs GPU

The difference between the two comes in the way they are designed. What tasks can both of them can handle, how fast or efficiently do they handle the same task, how well do they manage multiple tasks together. Things like that.

![CPU vs GPU](/blog/assets/img/introduction_to_gpu_computing/cpu_vs_gpu.png)

CPUs are general purpose processors that are designed to handle a very wide range of tasks. Be it some simple addition, multiplication operations, browsing the internet, playing audio/videos, creating/deleting/searching files in your PC etc. But a CPU has a limited number of cores or processing units. A dual-core CPU has 2 cores, each of which can run only a single process or task simultaneously. (Of course, it is possible to execute multiple processes virtually on each core by the means of **hyper-threading** where a single core is split into various logical CPUs. Read more about multi core CPUs and hyper-threading over [here](https://www.howtogeek.com/194756/cpu-basics-multiple-cpus-cores-and-hyper-threading-explained/)).

GPUs are processors that are designed to take a very specialist workload of rendering 2D/3D graphics and it does it much more efficiently. GPUs generally have around hundreds of cores as compared to a CPU. So given a task - lets say adding 2 matrices having a dimension of 1000 x 1000, the GPU can divide the work or region of data to compute among all the cores, which work in parallel and produce the result almost immediately.

However, a single GPU core has a much lower performance as compared to a single CPU core due to following reasons:
1. GPU cores have a lesser clock frequency (proportional to number of instructions executed per second) as compared to a typical CPU core.
2. GPUs have a smaller instruction set. They deal with mostly floating point arithmetic and instructions like branch predictors are absent. Hence, they struggle while dealing with a lot of conditional statements.
3. They have smaller cache sizes.
4. Hyper-threading is not present in a single GPU core.

GPUs rely mainly on their massively parallel structure. Lets say you give the GPU 2 numbers to add. Sure, you might say it calculates the result slower than a CPU. But if you give the same GPU a million numbers to add, it will return the result almost instantly as compared to a CPU. So what the GPU cares about is not the time taken to do an individual task, but rather what it does when bulk data is given to it.  

## Why is the job of rendering graphics suitable for a GPU?

![Need For Speed](/blog/assets/img/introduction_to_gpu_computing/nfs.jpg)

 Say you're playing Need for speed. What exactly happens while rendering the game screen graphics? Usually, the data is given in the form of a 3D model. So basically there is a car of so and so height, width and depth situated at some position given by a set of 3D coordinates in the world. Similarly, there are buildings, trees, people etc. which are the objects of your world. So firstly, you get the coordinate data which says where exactly is something located. Then you get the information about the color of objects. This is also called the texture. Now, we divide the complex surfaces into smaller triangles or quadrilaterals as they are simple shapes that can be managed easily. Any complex shapes in this world can be broken into triangles. The more the number of triangles you have, the more detailed your objects are.

![Rabbit](/blog/assets/img/introduction_to_gpu_computing/rabbit.png)

 Next, you have a "camera" or the place and angle that you are viewing the entire scene from. Obviously, you can see only 2D images on a computer screen, so the 3D objects in your model have to be projected onto a 2D screen. Firstly, you discard or keep aside the objects that are not visible to your camera and then proceed towards projected all objects in what is called the camera's view space onto a 2D screen. This is followed by rasterization which is to convert the image in vector graphics format to pixels for output on a display screen. After all this, you proceed towards moving your camera so that it gives an impression of moving in a 3D world.

![3D v/s 2D](/blog/assets/img/introduction_to_gpu_computing/3d_2d.png)

So as you can see, there are different types of calculations happening which involves mostly three dimensional matrix operations, representing the 3D coordinates, the RGB values for the colors, and transferring all the pixels of the image into a memory buffer. Floating point arithmetic operations need to be supported as the coordinates are all floating point numbers. A lot of three dimensional plane equations need to be solved. Most of these operations can be parallelized because the results do not depend on each other. If there is an operation which say has to be done for every vertex in our model, or every pixel in the image, since there are millions of such vertices and pixels, we can divide the data into batches, and compute all units in a batch independently and in parallel. This kind of work is exactly what a GPU is designed for.

## General Purpose GPU Computing

![GPU Acceleration](/blog/assets/img/introduction_to_gpu_computing/gpu_accel.png)

Over the years, people realized that some types of computational work can be done better by a GPU as compared to a CPU. They realized this could be applied in situations where the data in motion moves much like images, and the required processing is well-suited for vector and matrix mathematical operations. Subsequently, the term "General Purpose GPUs" or GPGPUs was coined and GPU accelerating computing was used to accelerate applications such as deep learning, analytics, scientific computations etc. Frameworks such as OpenCL, CUDA etc. came into existence that abstracted away the underlying GPGPU architecture that made it easier for programmers to work with it. GPU-accelerated computing offloads compute-intensive portions of the application from the CPU to the GPU, while the remainder of the code still runs on the CPU. From a user's perspective, applications simply run much faster.

## Interested to learn more about GPU Computing?

Great! :) You could get started with learning how to code using one of the frameworks used for heterogeneous parallel computing such as OpenCL or CUDA C/C++ and maybe try out a few programs on your own. (Although, first check if your graphics card is compatible with these frameworks)

Links:
* OpenCL:
    1. [Fixstars OpenCL Programming Book](https://www.fixstars.com/en/opencl/book/)
    2. [Heterogeneous Parallel Computing with OpenCL 2.0](http://www.dahlan.id/files/ebooks2/2015%203rd%20Heterogeneous%20Computing%20with%20OpenCL%202.0.pdf)

* CUDA:
    1. [CUDA C/C++ Basics - Nvidia Corporation](http://www.nvidia.com/docs/io/116711/sc11-cuda-c-basics.pdf)
    2. [CUDA C programming guide - Nvidia Developers Zone](http://docs.nvidia.com/cuda/cuda-c-programming-guide/#axzz4j3ZskSHg)
