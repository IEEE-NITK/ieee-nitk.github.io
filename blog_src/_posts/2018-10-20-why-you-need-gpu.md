---
layout: post
title: "Why 'you' need GPU"
author_github: rohit-mp
date: 2018-10-20 18:30:00
image: '/assets/img/'
description: 'What more can you do with a GPU other than play games?'
tags:
- GPU
- parallel computing
categories:
- CompSoc
github_username: 'rohit-mp'
---
# Why you need GPU

You've probably wanted to buy a laptop/desktop with a GPU to play those awesome high graphics games that your friends keep talking about, and yes your parents wouldv'e probably said "You're not going to get that. You need to study now". But is that all the use there is for a GPU?  

### GPU vs CPU  

Yeah we all know what they stand for, so let's skip that and get a little technical.  

![GPUvsCPU](/blog/assets/img/why-you-need-gpu/cpuvsgpu.jpg)

To put it in one line, we can say that if the CPU is being used for computations, then the GPU is a computational warehouse. What I mean is that while a normal CPU has 4-16 cores which can each run a few threads at once, a GPU has around 1000-4000 cores with each core capable oh handling a certain number of threads.  
You might want to take a look at this link if you aren't sure about what I just said  [https://www.howtogeek.com/194756/cpu-basics-multiple-cpus-cores-and-hyper-threading-explained/](https://www.howtogeek.com/194756/cpu-basics-multiple-cpus-cores-and-hyper-threading-explained/)

![flops](/blog/assets/img/why-you-need-gpu/flops.png)

Now yes, this means that the graphics in a game will render faster with a GPU than without and everything appears fast and smooth, but it also has other implications. It literally means that the GPU can process more infomation that a CPU in the same time.  

Now does this mean that a GPU is the same as many CPUs put together? This will answer your doubt  
[https://blogs.nvidia.com/blog/2009/12/16/whats-the-difference-between-a-cpu-and-a-gpu/](https://blogs.nvidia.com/blog/2009/12/16/whats-the-difference-between-a-cpu-and-a-gpu/)  
which brings us to the point of this article - GPU computing

### GPU Computing  

Now how a GPU can process more information per second might be a doubt to few of you. It is all because of the concept of parallelism. With so many cores in a GPU and with each core capable of running numerous threads, _each thread runs parallely_ and is independent of the other. To understand the significance of this, let us take the example of running errands. Let us say we have 10 items to buy and each item is available in a different store. The CPU version of running these errands would be that a single person would go to each of the stores one by one and buy all the required items whereas the GPU version would be that there are ten people and each person would go to a store and buy the item. Get the idea?  

A simple practical problem where this can be used is calculating the sum of two large arrays. We can have the CPU compute the sum of respective array elements one by one or we can make the GPU compute the sum of the elements parallelly. Yes GPU can make executing a lot more efficient in some cases and in some, the presence of the GPU makes no difference (as in suppose the same store had all 10 items).  

A major practical applications some of you might come across is using GPU for training [neural networks](http://pages.cs.wisc.edu/~bolo/shipyard/neural/local.html)  

![waiting for my neural network to train](/blog/assets/img/why-you-need-gpu/nntrain.jpeg)

Yeah we're gonna GPUs for this.  

The end goal of all of this is to get high performance and for that, NVIDIA provides a parallel programming or heterogenous computing model called [CUDA](https://www.nvidia.in/object/cuda-parallel-computing-in.html) which help developers create more efficient applications or achieve high performance in their task.  

Also, note that this doesn't mean everything can be made better with a GPU. Considering different factors such as cost, increase in performance as compared to CPUs, sometimes GPUs are not a good idea. So I hope that you have a better understanding of GPUs now and that gaming isn't the only thing that comes to your mind when you hear GPU.