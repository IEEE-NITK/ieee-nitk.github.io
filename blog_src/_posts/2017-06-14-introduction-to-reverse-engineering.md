---
layout: post
title: "Introduction to Reverse Engineering"
author_github: jeshventhraja
date: 2017-06-14 12:10:44
image: '/assets/img/'
description: 'Learn how to break your code and make it better!'
tags:
- CTF
- Ethical Hacking
- Security
categories:
- CompSoc
github_username: 'jeshventhraja'
comments: true
---
I am sure you would have fixed a bug if you have done programming. Going through your code, identifying places where it could have gone wrong, trying out different inputs to make it easier, each one with your own different methods! You also would have learnt to make your debugging process simpler with your experience for sure. Congratulations for your first step towards an important skill required for reverse engineering :)

Lets begin with a simple intuitive understanding of reverse engineering. You have a toy gun in which you can load bullets and shoot. One fine day, it stops working! (Hmm, not a fine day maybe). Having “Jugaad” skills, you will surely not throw it :P You open it and understand how it works. You find that it works on spring mechanism. Being a little technical (:P), You provide potential energy when you compress the spring and at a stage, it gets locked. It is released by pressing the trigger (releasing the lock effectively) and give the bullet kinetic energy and BOOM!
You find the trigger was displaced and unable to release the lock and hence you fix it! Feels good isn’t it? :D Not a bad day after all :) Similar process takes place with a software product too. From the application, you extract the source code and understand the logic, flow of information and the loopholes.

People who enjoy debugging will love this field. But don’t think it’s very easy. A complete understanding of the system is very important. Say in the case of your toy gun, an improper understanding could have worsened the situation of the gun. You can start by learning how your computer works, going deeper and deeper eventually. Slowly you will start identifying possible bugs and might end up finding out how it is taken care off also. This also is an important step because this is how you learn great ideas!

I will share how I gained interest in this field with the same example I saw. Instead of explaining the whole assembly code obtained from the executable of a program, I will concentrate on attacking the loophole found.

This a simple program which takes a password as input and grants access only if the password is “password1” or “password2”. You will soon find out this is not true! Let us go through the program.

![Image1](/blog/assets/img/introduction-to-reverse-engineering/4.png)

The program intends to grant access only when auth_flag is 1, which happens when right password is submitted. But any positive value of auth_flag will also grant us access. See an example run of the program.

![Image2](/blog/assets/img/introduction-to-reverse-engineering/3.png)

The program gave access with not only password1 and password2 but also a sequence of ‘a’s. Lets see what the flaw here is.

![Image3](/blog/assets/img/introduction-to-reverse-engineering/5.png)

![Image4](/blog/assets/img/introduction-to-reverse-engineering/1.png)

We use gdb to find the addresses of password_buffer and auth_flag variables and find that there is 28 bytes gap between them. Hence any string of greater length will write in the address of auth_flag giving it a positive value and hence grant access. Hence we have broken into the password checking system!! In fact, this is a common method called buffer overflow. Well, that was fun. **Fire in the** loop**hole**!(CS fans here? :P ). Unfortunately, most compilers do not allow overflow these days. We have allowed overflow in this program by using the command ‘-zexecstack -fno-stack-protector -g’ while compiling (Don’t worry, even I cannot read that xD).

Lets see what you can do with the understanding you gained. You can:
*	replicate the product
*	fix bug issues
*	add extra features
*	acquire extra access
*	find loopholes to understand the flaws in your software
*	Or do it for fun :)

All these things can result into ethical or unethical hacking, hackers and crackers respectively. An interesting question for everyone. Is it legal? If you have got the software legally, you are free to reverse engineer it but replicating it exactly will be a problem. Check this interesting solution to the problem! :P

![Image5](/blog/assets/img/introduction-to-reverse-engineering/6.jpg)

How to start?
1. “Hacking – The art of exploitation” is a good book
2. Learn how computers work at lower level
3. Programming in assembly language
4. Tools like gdb, radare2 will help you disassemble the executable
5. Play CTFs – They are fun and will help you improve your skills!!

So, That was about it! Have a great Summer!
Any doubts, feel free to ask :) !
