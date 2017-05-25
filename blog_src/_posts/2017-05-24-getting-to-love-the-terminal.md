---
layout: post
title: "Getting to love the Terminal"
author_github: kaushiksk
date: 2017-05-25 10:48:33
image: '/assets/img/'
description: 'Getting started with exploring the Bash shell'
tags:
- IEEE NITK 
- CompSoc
- Unix
- Terminal
- Bash
categories:
- IEEE
github_username: 'kaushiksk'
comments: true
---
## I Just Got Ubuntu!
<sub>But I'm not so sure about this command line</sub>

Early days with the Unix command line interface, or the terminal (bash shell by default) can be pretty annoying and intimidating.

But it doesn't have to be. Getting to know the shell and writing shell scripts is exciting as well as extremely useful and something everyone should get familiar with. Once you get a hang of it you'll start loving the flexibility Unix provides [in no time](https://xkcd.com/456/). But I wont go into too much details about shell scripting here, I'll leave resources at the end so you start learning on your own.

In this post I'll focus a bit more about making your life easier with a few tricks on the command line.
We'll mainly talk about bash [aliases](https://en.wikipedia.org/wiki/Alias_(command)) and the `.bashrc` file.

If you're completely new to Unix then it might be a good idea to have a look at this [book](http://linux-training.be/files/books/LinuxFun.pdf) to get familiar with some basic commands and then come back here.

## Aliases

Bash aliases are placeholders. You can think of them as shortcut commands for a longer command. They are extremely useful when you want to perform some operation that requires you to type a long command with a whole lot of options frequently.

For e.g this line prints out all the hidden files and folders in the current directory.

`$ ls -A|grep '^\..*'`

<sub>**Note:** Whenever you see a $ in a line of code online, it is an indicator that it is a shell command and should not be typed in while you write the command in your terminal, i.e, you will only copy paste `ls -A|grep '^\..*'` into your terminal from above.</sub>

The above command lists out all the files in the current directory, pipes the output to the `grep` command which then filters out only those files which have a `.` in the beginning. (Hidden files in begin with a `.` in Unix).

Now what if you want to go to all your favourite folders and check all the hidden files there? You'll have to navigate there and type out the whole command again. Of course, you can press the `Up Arrow Key` to access your command history and keep pressing it until you reach this command, but that can get pretty boring.

 There's a better way.

`$ alias lhid='ls -A|grep '^\..*''`

<sub>Make sure there no whitespace around the '=' sign. The shell is very particular about that.</sub>

Now type `lhid` in your terminal and it should perform the same operation as the command we aliased it to.

You can remove the alias by typing `unalias lhid`. We'll not do that for now.

Some other common aliases you would like to use can be

```
alias ..="cd .."
alias ...="cd ../.."
alias myfolder="cd path/to/my/folder"
```

You can now just use the placeholders instead of the entire command. I use a lot of aliases to `cd` into my frequent folders and it really saves a lot of time and a lot of typing.

But there's a catch. These placeholders we created are available only inside the *current shell*. Open up a new terminal and type `lhid` and it will tell you that the command was not found. This is because the variables you create in a shell are local to that shell only. 

## .bashrc

Thankfully there's the [.bashrc](https://superuser.com/questions/49289/what-is-the-bashrc-file#49292) file. This is the file that is run every time you fire up a new terminal. So all we need to do is add our aliases at the end of our `.bashrc` file and they'll be loaded every time we open a new terminal.

The `.bashrc` file exists in your home directory. Open it with any editor. I'll use nano here, you can use vi or gedit or any editor you wish.

`$ nano ~/.bashrc`

<sub>**Note**: The `~` is a placeholder for the user's home directory.</sub>

Now move all the way down to the bottom of the file and add the following lines there.

```
alias lhid='ls -A|grep '^\..*''
alias ..="cd .."
alias ...="cd ../.."
alias myfolder="cd path/to/my/folder"

```

Save the file and exit (`Ctrl X + Y` in nano).

Now open up a new terminal and try using those aliases and you'll see that it works like a charm! This is because those commands in the `.bashrc` file are run every time you open a new terminal.

You can notice that the terminal opens up in your home directory by default. Changing this is simple.

Open the `.bashrc` file and at the end add the line `cd path/to/my/directory`. For e.g if you want every new terminal to open up the Downloads folder just add the line `cd ~/Downloads` at the end and that's it!

And with just a few simple commands you've already made your life so much more easier on the terminal!

### Resources:

[Basic Unix commands](http://freeengineer.org/learnUNIXin10minutes.html)

[Bash Scripting Guide](http://www.tldp.org/LDP/Bash-Beginners-Guide/html/Bash-Beginners-Guide.html)
