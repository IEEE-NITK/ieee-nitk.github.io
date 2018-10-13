---
layout: post
title: "Evolving Strings with Genetic Algorithms"
author_github:  gurupunskill
date: 2018-06-19 16:44:03
image: '/assets/img/'
description: 'A short introduction to Neuroevolution'
tags:
- Machine Learning
- Genetic Algorithms
- String
- Genes
- Chromosome
categories:
- CompSoc
github_username: 'gurupunskill'
comments: true
---
## Introduction

A **Genetic Algorithm** is a search heuristic inspired by Darwin’s theory of natural evolution. A genetic algorithm reflects the process of natural selection: the fittest survive and breed.  

The process of natural selection begins by selecting the fittest individuals from a population. The cross to produce offsprings that have characterestics of both parents. If both parents have good fitness, then their child is also likely to inherit their characterestics and have better fitness.

In this introduction, we will be trying to match a string from scratch.  

## Environment and Population

First, we need to define an environment that would determine the fitness of an individual. Here, our environment would be the String that we're trying to create.  

So, a string S of some length with alphanumeric characters.  
```
	String = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
```  
   
Any string of any length is an individual in this environment.  
   
```
	Individual = "LAKSKDJLKMCasdkjAKSDjkj"
```
Our initial population would we filled with multiple such individuals with random letters and numbers.  

## Fitness

The fitness of an individual is proportional to how close it is to the defined string S for this environment.  
  

```
	Individual = "ABCDEFGHIJKLMNOPQRSTUVWXYS"  
	Fitness(Individual) = (Number of characters in Individual same as String)  
			      / (Number of characters in String)  
						= 25/26
						= 0.962
```


The python code below implements the fitness function we've defined.  

  
```python	
    def evaluate_fitness(actual, new):
        together = itertools.zip_longest(actual, new, fillvalue=None)
        cost = len([a for a,b in together if a == b])
        cost /= max(len(actual), len(new))
        return cost
```
  
  
### Breeding and Mutation
As per Natural Selection laws, the fittest individuals should survive (along with some random unfit undividuals) and breed to create the next generation of individuals.  

Given two parents, We can define breeding to select a character from the two parents at random. That is, We would choose the `i`th character of `Parent 1` or the `i`th character of `Parent 2` at random for the `i`th character of the `Child`.  

To simulate mutation, given a `0 < mutation rate < 1`  if a uniformly generated pseudorandom floating point number is greater than this defined `mutation rate`, then an alphanumeric character is randomly chosen to be in that position `i` for the child. We can also used the same `mutation rate` to randomly add or remove an extra character in the child.  

```python
    def make_child(parent_1, parent_2):
        longer_parent  = list(parent_1 if len(parent_1) > len(parent_2) else parent_2)
        shorter_parent = list(parent_2 if len(parent_1) > len(parent_2) else parent_1)
    
        child = longer_parent.copy()
        n = len(shorter_parent)
        i = 0
        while i < n:
            child[i] = random.choice(characters) if random.uniform(0, 1) > mutation_rate else child[i]
            
            if (i < len(shorter_parent)):
                child[i] = shorter_parent[i] if random.uniform(0, 1) > 0.5 else longer_parent[i]
            
            if(len(child) < length_max):
                if (random.uniform(0,1) > mutation_rate):
                    child.insert(i, random.choice(characters))
                    n+=1
                
            if (random.uniform(0,1) > mutation_rate):
                child.remove(child[i])
                n-=1
            i+=1
        return "".join(child)
```
  
### Wrapping it all up
  
After concretely defining our environment, to genrate a random population and choosing the best indiviuals and breeding them to create the next generation is trivial.  

Check out the full notebook [here](https://github.com/gurupunskill/string-matcher/)