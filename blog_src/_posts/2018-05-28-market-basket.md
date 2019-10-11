---
layout: post
title: "Market Basket Analysis"
date: 2018-05-28 23:32:44
image: '/assets/img/'
description: 'Market Basket Analysis in retail market'
tags:
- Data mining
- Apriori
categories:
- CompSoc
github_username: 'anumehaagrawal'
comments: true
---

# Market Basket Analysis

Ever wondered how Flipkart knows what items to suggest to you before and after you make a purchase? The is an aspect of analysis created specifically to promote sales called market basket analysis (MBA).  In the retail industry, MBA refers to an unsupervised data mining technique that discovers co-occurrence relationships among customers’ purchase activities. The technique is based on the theory that if you buy a certain group of items, you are likely to buy another group of items. For example: while at McDonald’s, if you buy sandwiches and cookies, you are more likely to buy a drink than someone who did not buy a sandwich.

![Example](/blog/assets/img/market-basket/mba.png)


This technique  involves finding a relationship between purchased products by discovering links using simple rules, known as the rules of association. Market basket analysis can effectively present product offers, create more effective promotions and develop more efficient marketing campaigns.  The quality of rules determines several measures like support,confidence and lift which are important from business point . 


### Apriori Algorithm

In data mining, Apriori is a classic algorithm for learning association rules. Apriori is designed to operate on databases containing transactions (for example, collections of items bought by customers, or details of a website frequentation). . The whole point of the algorithm (and data mining, in general) is to extract useful information from large amounts of data. For example, the information that a customer who purchases a keyboard also tends to buy a mouse at the same time is acquired from the association rule below:

#### Support
The percentage of task-relevant data transactions for which the pattern is true.
Support (Keyboard -> Mouse) =  ![Support](/blog/assets/img/market-basket/support.png)

#### Confidence
The measure of certainty or trustworthiness associated with each discovered pattern.
Confidence (Keyboard -> Mouse) = ![Confidence](/blog/assets/img/market-basket/conf.png)

MBA is being used in all aspects of business from small scale retailing to large scale marketing .Its being used extensively in the food industry as well .Suppose that the sales report in a confectionary shop shows that on the first Monday of the month of 1,000 customers, 200 bought cupcakes, and from those who bought cupcakes , 50 bought chocolates as well . Here we see a rule that if someone buys cupcakes, also buys chocolates, which support is 5% (50/1000), and the confidence is 25% (50/200). 

### How can you use MBA for your own store !

1. Store Organisation:
Based on the insights from market basket analysis you can organize your store to increase revenues. Items that go along with each other should be placed near each other to help consumers notice them.
2. Spam Messages:
By using data from MBA you can suggest the next best product which a customer is likely to buy. Hence you will help your customers with fruitful suggestions instead of annoying them with marketing blasts.
4. E-Commerce Websites:
In case of e-commerce businesses, website content placement is very important. MBA can be used to predict what a customer will buy next based on the items the customer has viewed . This will not only increase revenue but also bring in more customers 
5. Recommendation Engines:
Recommendation engines are already used by some popular companies like Netflix, Amazon, Facebook, etc. If you want to create an effective recommendation system for your company then you will also need market basket analysis to efficiently maintain one. 

