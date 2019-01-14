---
layout: post
title: "Why Machine Learning Matters ?"
author_github: siddhartha15
date: 2018-10-13 19:05:44
image: '/assets/img/'
description: 'A primer on Machine Learning and Introduction to Supervised Learning'
tags:
- IEEE NITK
- CompSoc
- Machine Learning
- Artificial Intelligence
categories:
- Compsoc
github_username: 'siddhartha15'
---
**Hello everyone !**

This article is for people who want a primer on *Machine Learning* and anyone who is curious about how Machines think.If you are already familiar with ML, this may not be the right place for you.

## Why Machine Learning matters ?

**Artificial intelligence** will shape our future more powerfully than any other innovation this century.
The rate of acceleration is already astounding. After a couple of AI winters and periods of false hope over the past four decades, rapid advances in data storage and computer processing power have dramatically changed the game in recent years.

In 2015, *Google* trained a *conversational agent (AI)* that could not only convincingly interact with humans as a tech support helpdesk, but also discuss morality, express opinions, and answer general facts-based questions.
The same year, *DeepMind* developed an agent that *surpassed human-level performance* at *49 Atari games*, receiving only the pixels and game score as inputs. Soon after, in 2016, *DeepMind* obsoleted their own achievement by releasing a new *state-of-the-art* gameplay method called **A3C**.

Meanwhile, **AlphaGo** defeated one of the best human players at Go — an extraordinary achievement in a game dominated by humans for two decades after machines first conquered chess. Many masters could not fathom how it would be possible for a machine to grasp the full nuance and complexity of this ancient Chinese war strategy game, with its 10¹⁷⁰ possible board positions (there are only 10⁸⁰atoms in the universe). 

Artificial intelligence is the study of agents that perceive the world around them, form plans, and make decisions to achieve their goals. Its foundations include *mathematics, logic, philosophy, probability, linguistics, neuroscience,* and *decision theory*. Many fields fall under the umbrella of AI, such as *computer vision*, *robotics*, *machine learning*, and *natural language processing*.

**Machine learning is a subfield of artificial intelligence.**

![Image 1](/blog/assets/img/Why-Machine-Learning-Matters/MLimage_1.png)

**Strong AI** will change our world forever; to understand how, studying *Machine Learning* is a good place to start ...

## Machine Learning covers a lot

Machine Learning is **self-explanatory**. Instead of you telling the machine what decisions and rules to make, you **teach** it. A machine that **learns**. So that leaves the methods of teaching and learning pretty wide open. So what can you teach a machine, and what can it learn?

![Image 2](/blog/assets/img/Why-Machine-Learning-Matters/MLimage_2.png)

> **Classification** algorithms can be taught to split existing data into classes, like say names of animals.Then when you give it new data, it will tell you which class it belongs to, like say this is a cat and not a dog.

> **Regression** algorithms basically try to learn the function of a dataset,by predicting future data based on past data.

> **Unsupervised Learning** can be used if you’ve got lots of data and you can’t make sense of it,so you teach the machine to try and make sense of it instead.

> **Reinforcement Learning** is how to beat every human on Earth in games like GO and Chess,or drive autonomous cars and drones. And a lot more.

So let us talk about **Supervised Learning** now.

>How much money will we make by spending more dollars on digital advertising? 

>Will this loan applicant pay back the loan or not? 

>What’s going to happen to the stock market tomorrow?

In supervised learning problems, we start with a **data set** containing training examples with associated correct **labels**. For example, when learning to classify handwritten digits, a supervised learning algorithm takes thousands of pictures of handwritten digits along with **labels** containing the correct number each image represents. The algorithm will then learn the **relationship** between the images and their associated numbers, and apply that learned relationship to **classify** completely new images (without labels) that the machine hasn’t seen before. This is how you’re able to deposit a check by taking a picture with your phone!

To illustrate how supervised learning works, let’s examine the problem of **predicting annual income** based on the number of years of higher education someone has completed. Expressed more formally, we’d like to build a model that approximates the relationship **f** between the number of years of higher education **X** and corresponding annual income **Y**.

![Image 3](/blog/assets/img/Why-Machine-Learning-Matters/MLimage_3.png)

**X** (input) = years of higher education

**Y** (output) = annual income

**f** = function describing the relationship between **X** and **Y**

**ϵ** (epsilon) = random error term (positive or negative) with mean zero 

In supervised learning, the machine attempts to learn the relationship between income and education from scratch, by running **labeled training data** through a **learning algorithm**. This **learned function** can be used to estimate the income of people whose income **Y** is unknown, as long as we have years of education **X** as inputs. In other words, we can apply our model to the **unlabeled test data** to estimate **Y**.

The **goal** of supervised learning is to predict **Y** as accurately as possible when given new examples where **X** is known and **Y** is unknown.

Therefore **predicting annual income** comes under **classic regression** problem. Your input data **X** includes all relevant information about individuals in the **data set** that can be used to predict income, such as years of education, years of work experience, job title, or zip code. These attributes are called **features**, which can be *numerical* (e.g. years of work experience) or *categorical* (e.g. job title or field of study).

You’ll want as many training observations as possible relating these features to the target output **Y**, so that your model can learn the relationship **f** between **X** and **Y**.

The data is split into a *training data set* and a *test data set*. The training set has labels, so your model can learn from these labeled examples. The test set does not have labels, i.e. you don’t yet know the value you’re trying to predict. It’s important that your model can generalize to situations it hasn’t encountered before so that it can perform well on the test data.

**Regression**

**Y = f(X) + ϵ**, where **X** = (x1, x2…xn)

**Training:** machine learns **f** from labeled training data

**Test:** machine predicts **Y** from unlabeled testing data

![IMAGE4](/blog/assets/img/Why-Machine-Learning-Matters/MLimage_4.png)

## So how do we solve these problems? 

How do we build models that make accurate, useful predictions in the real world? We do so by using supervised learning algorithms.
The above problem of predicting annual income can be solved using [Linear regression](https://towardsdatascience.com/linear-regression-simplified-ordinary-least-square-vs-gradient-descent-48145de2cf76) method and [gradient descent](https://spin.atomicobject.com/2014/06/24/gradient-descent-linear-regression/) algorithm.

Do read on supervised learning algorithms for better uderstanding and you can take a well known and free course - [MACHINE LEARNING by ANDREW NG](https://www.coursera.org/learn/machine-learning) on [Coursera](https://www.coursera.org/).