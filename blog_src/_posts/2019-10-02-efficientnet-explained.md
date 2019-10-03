---
layout: post
title: "EfficientNet Explained."
author_github: geekswaroop
date: 2019-10-03 23:32:44
image: '/assets/img/'
description: 'New technique which acheives state of the art image classification accuracy'
tags:
- IEEE NITK
- CompSoc
categories:
- Compsoc
github_username: 'geekswaroop'
---
***Compound Scaling***  achieving state of the art image classification accuracy from Google AI Research. This changes the way we think of scaling up CNN.

*So, What are the ways to scale up a CNN?*

One way to scale up will be to add more layers, for example from RESNET-18 to RESNET-200. The goal of [this paper](https://arxiv.org/abs/1905.11946) is to systematically scale up depth, width, and resolution of CNN. But, the process of scaling up CNN’s are not well understood. There are many ways to do this and most of them are arbitrarily chosen. That would mean randomly choosing to double the depth of the network, or randomly choosing to double the width of the network, etc.

![Various Scaling](/blog_src/assets/img/efficientnet/VariousScaling.png)

Given above, are the various ways you can scale a CNN Architecture.

1. This could be **Width Scaling** (b): Adding more feature maps in each layer
2. **Depth Scaling**(c): Adding more layers 
3. **Resolution Scaling**(d): Increasing the resolution of the input image. For example, instead of downsizing the images to 224x224, you can upscale it to 360x360.

And compound scaling refers to the combination of increasing the depth, adding more layers and increasing the input image resolution.

If you try scaling up along a single dimension, the accuracy will continue to improve but quickly saturate as you can see below.
![FLOPS](/blog_src/assets/img/efficientnet/FLOPS.png)
(Here ‘r’ coefficient denotes the multiplicative factor for resolution, Ex: r=1 denotes = 224x224 and so on.)

**But wait, What are FLOPS?**

FLOPS, stands Floating Point Operations per Second.

The dependence among scaling dimensions shows that scaling dimensions isn't independent. For example, if you increase the depth, you will find a better performance by increasing the input resolution also.
So, the Compound Scaling method is the key idea in EfficientNet as discussed in the paper. 

 The idea is to up-sample the width, depth, and resolution by scaling them with a constant ratio. These constant ratios are determined by the following constraints.

![Flops Relation](/blog_src/assets/img/efficientnet/FlopsRelation.png)



And they are exponentiated by 
$$
\Phi
$$
 which denotes the increase in computational resources to the network. So, 
$$
\alpha*\beta^2*\gamma^2 = 2
$$
 is the constraint, and the specific values are found by doing grid-search in the search space.

So, basically the idea is that they construct a small network and grid-search the parameters under the given constraint. We find, 
$$
\alpha=1.2, \beta=1.1, \gamma=1.16.
$$
Now, in each iteration, these values are used to scale up the various dimensions, the width, depth, and resolution respectively.
Intuition:
If the input image is bigger, then the network needs more layers to increase the receptive field and more channels to capture more fine-grained patterns on the bigger image.
To test the technique introduced in the paper, EfficientNet was used. EfficientNet is the idea from NAS (Neural Architecture Search) for Mobile-Nets where they optimize the network for accuracy and also penalizing if it's too computationally heavy. 

So, this is how the Efficient-Net B0 looks like (The baseline model)

![EfficientNet](/blog_src/assets/img/efficientnet/efficientnet.png)

These new architectures attain state-of-the-art on ImageNet and in addition, it’s much more computationally efficient with much fewer parameters than the existing Architectures.
But, do not get confused. Compound Scaling doesn’t work only on EfficientNet. They work on all exisiting famous architectures such as ResNet, MobileNet etc as the results show below.

![Results](/blog_src/assets/img/efficientnet/Results.png)

This is probably one of the best papers regarding scaling of CNN's in 2019. Although researchers have worked on the problem of scaling for a long time, they didn' get a high hit of accuracy. But, this new technique, tries to reduce the number of parameters and FLOPS so that they can run on resource-constrained devices. Also, it is the very first time where we have seen huge gains in the parameter reduction along with huge gain in accuracy!
