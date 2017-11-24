---
layout: post
title: "Generative Adversarial Networks"
author_github: mj10
date: 2017-10-16 05:05:00
image: '/assets/img/'
description: 'A brief overview of GANs'
tags:
- Deep Learning
- Generative Adversarial Networks
- GANs
- Generative Models
- Machine Learning
categories:
- CompSoc
github_username: 'mj10'
---
In the last 2 years, **Generative Models** have been one of the most active areas of research in the field of Deep Learning. The paper on **Generative Adversarial Networks** (a.k.a GANs) published by **Ian Goodfellow** in 2014 triggered a new wave of research in the field of Generative Models. Today we'll explore what makes GANs so different and interesting. 

## Introduction

![Ideal Generative Model](/blog/assets/img/GAN/ideal-gen-model.jpeg)

The main objective of a Generative Model is to learn the *probability distribution* from which the training data is sampled. Once the model learns the probability distribution, it can sample new data from it. For eg. If the model is trained on a sufficiently large dataset consisting of images of handwritten digits, we expect the trained model to then generate images of handwritten digits, which are not a part of the training data. Now, in reality, it is very hard to build models which can learn the *exact probability distribution*. So we usually try to build models that can just **estimate the distribution** or generate samples from the distribution **without explicitly learning the distribution** itself. 

## Generative Adversarial Networks 
Even before the introduction of GANs, there existed several Generative Models such as **Variational Autoencoders**, **Boltzmann Machines** and **Deep Belief Networks** among others. But GANs provide a totally new way of building Generative Models.

### So, what is a GAN?
The key feature of a GAN is that the **generative model** is pitted against an *adversary*; a **discriminator model** which learns to determine whether a *sample is generated from the model or belongs to the actual data distrubution*. The generator works like a currency counterfeiter, who generates notes that are as close as possible to the original. The discriminator works as a bank that determines whether a given currency sample is fake or real. In other words, the generator tries to fool the discriminator, while the discriminator tries to prevent this from happening.

![Generative Adeversarial Network](/blog/assets/img/GAN/GAN.png)

More concretely, the discriminator and generator can be represented by *two separate neural networks*, **G** and **D**. G takes *random noise* as input and outputs a sample from the learned probability distribution. D takes in a sample and outputs the *probability that the given sample is real*. So we would train the discriminator to *maximise the probability of correctly determining whether the given sample is real or fake*. Whereas for the generator we would like to *minimise the probability that the discriminator correctly guesses the sample being fake*. We can then determine losses for both G and D, and train them using backpropagation. 

This is equivalent to G and D playing a **two-player minimax game**. In the ideal scenario, the generator would generate samples that are indistinguishable from the real data and the output of D would be *1/2*, that is the sample is equally likely to be either real or fake. 

__Value function V(G, D) for the minimax game__ 

![G and Minimax Game](/blog/assets/img/GAN/minimax-objective.jpeg)

### Advantages and Disadvantages

This adversarial approach is very effective in building generative models. GANs have a number of computational as well as statistical advantages such as using only *simple backpropogation to obtain gradients*, *no need of inferences during training* among others. It also comes with its own set of drawbacks. One of them is the difficulty in training the model. **The Helvetica Scenario** occurs quite often during training, where the generator finds one sample which fools the discriminator, and then keeps on generating simple variations of the same sample without learning to generate other distinct samples.

## _Fantastic GANs And Where To Find Them_
As mentioned earlier, GANs are one of the most active areas of research in Deep Learning. Hundreds of papers have been published since the original paper 2014, detailing various modifications and applications for the GAN framework. The applications range from Image to Image Translation to Image Style Transfer. Here are a few examples:

\> [**DCGAN**](https://arxiv.org/abs/1511.06434)
![DCGAN](/blog/assets/img/GAN/dcgan.jpeg)

\> [**acGAN**](https://arxiv.org/abs/1702.01983)
![acGAN](/blog/assets/img/GAN/acgan.jpeg)

\> [**DiscoGAN**](https://arxiv.org/abs/1703.05192)
![DiscoGAN](/blog/assets/img/GAN/discogan.png)

You can find a complete list of various GANs at the [GAN Zoo](https://github.com/hindupuravinash/the-gan-zoo)

## References
1. [Generative Adversarial Networks, Ian Goodfellow et al., 2014](https://arxiv.org/abs/1406.2661)
2. [Deep Generative Models](http://www.deeplearningbook.org/contents/generative_models.html)
3. [GAN Tutorial, NIPS 2016](https://arxiv.org/abs/1701.00160)