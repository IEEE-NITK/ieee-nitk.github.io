---
layout: post
title: "Solving Switch Riddle using RL"
author_github: Madhuparna04
date: 2019-02-28
image: '/assets/img/'
description: ''
tags:
- Switch Riddle
- Reinforcement Learning
- DIAL
- RNN
categories:
- Compsoc
github_username: 'Madhuparna04'
use_math: true
comments: false
---

In this article, we will use a Reinforcement Learning based method to solve the Switch Riddle problem. So, let's start with defining the riddle.


## Switch Riddle

There are n prisoners in prison and a warden. The Warden decides to free the prisoners if they can solve the following problem. So, every day the Warden will select one of the prisoners and send him to an interrogation room which consists of a light bulb with a switch. If the prisoner in the room can tell that all other prisoners including him have been to the room at least once then the Warden will free all of them otherwise kill all of them.
Except for the prisoner in the room, other prisoners are unaware of the fact that who got selected on that particular day to go to the interrogation room.

![Switch Riddle](/blog/assets/img/Solving-Switch-Riddle-using-RL/SwitchRiddle.png "Switch Riddle")

[Image Source](https://github.com/iassael/learning-to-communicate)

Now, the prisoner in the interrogation room can switch on or off the bulb to send some indication to the next prisoner. He can also tell the warden that everyone has been to the room at least once or decide not to say anything. If his claim is correct, then all are set free otherwise no.

## Problem Formulation

So we see that the switch riddle problem consists of many prisoners trying to establish a single task. Therefore, the puzzle fits in a Multi-Agent setup where the agents are collaborating to complete the task.
We will use a Reinforcement learning based algorithms called the **DIAL( Differential Inter Agent Learning)** to solve this riddle.

The things that we need to define for most of the RL tasks are states, actions, and rewards. So let's formulate these:

#### State
The state for each agent or prisoner is whether the agent is in the interrogation room or not, i.e., if the prisoner n is in the room, then he receives a 1 and others 0 for that particular day or time step.

#### Action
There are two choices the prisoners have 

1 - Tell the Warden.

2 - Don't tell the Warden.

#### Reward
The reward is received at the end of the episode.

+1 - Completing the task.

-1 - Telling the Warden before everyone has gone to the room once.

0 - If the prisoners can't conclude within the max number of time steps.

In the implementation, the maximum number of timesteps is set to $$4 \times n - 6$$ where n is the number of agents.
In addition to state, action, and reward, since the agents need to communicate through the light bulb to send some information to the next prisoner, we also have this one-bit communication channel, i.e., the bulb.

#### Messages
Training Time - In DIAL during training, the messages are continuous; i.e., it can take values ranging from 0 to 1.

Test Time - While testing the agents can only communicate with 0 or 1.

 0 -> Bulb is off

 1 -> Bulb is On

## DIAL Algorithm

The following diagram shows the architecture of the model used in DIAL.


![DIAL](/blog/assets/img/Solving-Switch-Riddle-using-RL/DIAL.png "DIAL")

[Image Source](https://papers.nips.cc/paper/6042-learning-to-communicate-with-deep-multi-agent-reinforcement-learning.pdf)


There are two possible ways in which we can train our model -

1) Without Parameter sharing

2) With Parameter sharing

Parameter Sharing means all the agents share the same neural network parameters or we can say that there is a single central network that learns for all the agents.

While in No-Parameter sharing there are separate networks for each agent.

### Implementation details -

Following is the model architecture used in the paper -

![DIAL Architecture](/blog/assets/img/Solving-Switch-Riddle-using-RL/DIALarchitecture.png "DIALarchitecture")

[Image Source](https://papers.nips.cc/paper/6042-learning-to-communicate-with-deep-multi-agent-reinforcement-learning.pdf)

1. Instead of directly giving input observation as 0 or 1 to the neural net, it is passed through an embedding layer.

2. The message from the previous agent is passed through a 1-layer MLP before giving it as an input to the RNN.

3. The previous actions of the agent and agent id are passed through lookup tables.

4. The final state embedding is given by - 

$$ z^a_t = (TaskMLP(o^a_t) + MLP[|M| , 128 ](m_{t-1}) + Lookup(u^a_{t-1}) + Lookup(a)) $$

5. For better stability and performance a batch normalization layer can be used to preprocess $$ m_{t-1} $$.

6. $$ z^a_t$$ is processed through a 2-layer RNN with GRUs, $$ h^a_{1,t} =GRU[128, 128] (z^a_t, h^a_{1,t−1}) $$, which is used to approximate the agent’s action-observation history.

7.
Finally, the output $$ h^a_{2,t} $$ of the top GRU layer, is passed through a 2-layer MLP $$ Q^a_t, m^a_t =MLP[128, 128,(|U| + |M|)](h^a_{2,t})$$.

## References -

- [Original Lua Implementation](https://github.com/iassael/learning-to-communicate)
- [Pytorch implementation of DIAL -By Moksh Jain](https://colab.research.google.com/gist/MJ10/2c0d1972f3dd1edcc3cd17c636aac8d2/dial.ipynb)






