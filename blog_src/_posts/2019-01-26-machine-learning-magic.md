---
layout: post
title: "Machine Learning Magic"
author_github: saharsh007
date: 2019-01-26 10:00:30
image: '/assets/img/machine-learning-magic'
description: 'Basic Introduction to Machine Learning'
tags:
- Machine learning 
- Supervised learning
- tweets
categories:
- CompSoc
github_username: 'saharsh007'
---

>"Did you ever wonder how ML algorithms work?"
>"How is the weather forecast done?"
>"How does the self-driving car mimic the way humans drive?"
>"Let's try to find answers to some of those questions..."

# WHAT IS THIS MACHINE LEARNING ?

Assume you have some data, it could be anything like a set of tweets or Images of handwritten numbers or Emails marked as spam.
But you don’t know what to do with it!!!

![img1](/blog/assets/img/machine-learning-magic/1.jpeg)

So you look for an algorithm which can use this data and give you something you are interested in!  
![img2](/blog/assets/img/machine-learning-magic/2.png)
So how does this becomes possible?  
We take the example of marking tweets as suicidal.  
We make an ML model which is a simple function that takes emails as input and gives spam or not spam as output. So now we tell this model to filter out all those tweets which have  #suicide or related words.  
But that can be many different types of tweets, for example-  

* the tweet is posted for suicide awareness and prevention
* the person is talking about suicidal ideation and/or ways to kill himself
* the tweet reports a third person’s suicide eg: news report
* the tweet uses suicide as a figure of speech eg: career suicide

So we have to filter, even more, ex
* The text conveys a serious display of suicidal ideation; e.g., I want to die or I want to kill myself or I wish my last suicide attempt was successful;

* Posts where suicide plan and/or previous attempts are discussed; e.g., ”The fact that I tried to kill myself and it didn’t work makes me more depressed.”

* The tone of the text is cloudy and not serious, eg: This makes me want to kill myself, lol, ”This day is horrible, I want to kill myself hahaha” are not included in this category.

So we filter out tweets containing words like “haha” or “lol”, and include the tweets having “I want to die”, “I want to kill”, occurrences of “I”, “kill” and “myself” together. We train it with labelled test set(tweets labelled as suicidal or not suicidal).  Training means adding features and tweaking parameters of function so that it obtains the same result that is labelled on training data. After doing this our Model is ready.  
Now we can feed any tweet and it’ll use the algorithm and tell us if a tweet is suicidal or not.  
We can’t classify everything correctly, for example,  The tweet ”Is it odd to know I’ll commit suicide?” is a tweet that both human annotators, as well as the proposed methodology, couldn’t classify due to its ambiguity, but still, for normal tweets, these algorithms can achieve remarkable accuracy.
![img3  ](/blog/assets/img/machine-learning-magic/3.png)

So Machine Learning is the science of programming computers so they can learn from data!
ML is a subset of the larger field of artificial intelligence (AI) that “focuses on teaching computers how to learn without the need to be programmed for specific tasks,”  
In fact, the key idea behind ML is that it is possible to create algorithms that learn from data and make predictions on it.

# TYPES OF MACHINE LEARNING

## SUPERVISED LEARNING:<span style="color:red"> Train me!</span>

The case we saw above is an example of supervised learning, we had the labelled tweets and made a function to map tweets with the output

But what if the data we had wasn’t labelled?

## UNSUPERVISED LEARNING:<span style="color:red"> I am self-sufficient in Learning</span>

That is when UNSUPERVISED LEARNING comes into action. It learns from data that are not labelled and does categorization or classification.

And the last one is  

## REINFORCEMENT LEARNING: <span style="color:red">My life my Rules! (hit and trail) 

It is about taking suitable action to maximize reward in a particular situation.
![img5](/blog/assets/img/machine-learning-magic/5.jpeg)

Reinforcement learning differs from the supervised learning in a way that in supervised learning the training data has the answer key with it so the model is trained with the correct answer itself whereas in reinforcement learning, there is no answer but the reinforcement agent decides what to do to perform the given task. In the absence of training dataset, it is bound to learn from its experience.

![img4](/blog/assets/img/machine-learning-magic/4.png)
![img6](/blog/assets/img/machine-learning-magic/6.png)

How to learn more about Machine Learning?

The best place to get Started with basics of ML is [Andrew Ng’s [Machine Learning Course](https://www.coursera.org/learn/machine-learning) from coursera. It’s highly recommended for beginners. It’s easy for anyone who has a minimal amount of knowledge of maths :)type
