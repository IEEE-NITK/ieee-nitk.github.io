---
layout: post
title: "A step ahead in Reverse Engineering!"
author_github: adwait1-G
date: 2017-12-07 2:00:10
image: '/assets/img/'
description: 'A peek at how a computer can be fooled because of bad coding practices'
tags:
- CTF
- Ethical Hacking
- Security
categories:
- CompSoc
github_username: 'adwait1-G'
comments: true
---

Hello to all the computer enthusiasts out there!

In this article,we will look into a simple C program intended to perform a particular task is MADE to perform a task it was not supposed to perform.
SO,WE WILL BE TRYING TO FOOL THE COMPUTER!

Pre-requisites :
1.A computer which runs linux
2.A curious mind which wants to know how stuff actually works!

We will be using GDB(GNU Debugger) to understand the C program at the assembly level.

If GDB is not installed in your box,you can type in this command to install it.

__$sudo apt-get install gdb__

Here is the source code of the executable we will be dealing with. It is named overflow.c. You will know by the end of this article,Why it was named so.
![Image1](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/source_code1.png)

__1.What does this program do?__

__a.__ In the main function,a printf() function is called to print the string “Before function call” .
__b.__ The main function simply calls another function “print_string()” .
__c.__ In the print_string() function , We have an uninitialised character array and WE HAVE ALLOCATED 30 BYTES OF SPACE for it.
__d.__ In this function,Using gets() function , it asks us to enter a string.
__e.__ It will simply print the string that we have entered.
__f.__ After the “print_string” function is executed completely,CONTROL IS TRANSFERED BACK TO THE main function.
__g.__ At the end,there is another printf () statement which prints “After function call”.

Think for a moment why the 2 printf() statements are present before and
after the function call.

__2.Compile the program(normally) using gcc :__

__$gcc overflow.c -o overflow__
This gives an executable named "overflow".

![Image2](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/warning.png)

It is important to note the second warning(the overflow.c : (.text + 0x39))
__It says "the gets() function is dangerous and should not be used".__

You would have used gets() before.__Have you given a thought of why this warning came up?__

__3.Running the executable with random inputs and observing what happens.__

![Image3](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/random_input.png)

Let us go step by step.

__a.__ The first 2 times it was executed,These are normal cases because the number of characters were less than 30.
__b.__ The third time,The string length is greater than 30 but nothing __wierd__ happened.
__c.__ The last time it was executed,we get this "__stack smashing detected__" and the program is terminated right there. IF YOU NOTICE,The string "After function call" is not printed. This means BEFORE THE CONTROL GOT TRANSFERRED TO THE main function,THE PROGRAM WAS TERMINATED. Why did this happen? __One obvious guess is that our string length was way more than 30 bytes.__ But what exactly happened??

__d.__ To analyse this,we will have to compile our code in the following manner.

__$gcc overflow.c -o overflow -fno-stack-protector -zexecstack -g__

__e.__ One more thing,we will have to give random inputs like above to analyse
the behavior of the executable. So everytime typing “aaaaaaaaaaaaaa....”
100 a’s for example is very cumbersome.WE HAVE A SOLUTION!

We will use __python__ to solve this problem.
Execute the program in following manner :

__$ python -c "print 'a' * 35" | ./overflow__

![Image4](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/use_python.png)

The 35 can be replaced by any number you want as showed in the above screenshot.

__4.Analyse the above screenshot :__

__a.__ Though the string storage capacity is 30 bytes,in the first case,the program is able to take 35 bytes.
__b.__ In the third case,something __wierd__ happened. It says "__Illegal Instruction__" and "After function call" was __not__ printed. So,control didn't get transferred to the main program.
__c.__ In the last case,again something __wierd__ happened. It said "__segmentation fault"__ and the program was __terminated right away__.

We obviously have to investigate the wierd cases and know if we can do something about it.

__5.Finally,it is time to fireup your debugger!__

__$ gdb -q overflow__

![Image5](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/disass.png)

Follow the instruction in the screenshot.

__a. (gdb)set disassembly-flavor intel__ : This means there are other flavors also right?Research about them.
__b. (gdb)disass main__  : This dumped the assembly equivalent of the main function written in C.
__c. (gdb)disass__ print_string() : This dumped the assembly equivalent of the print_string() function.

__6.ANALYSIS OF main() :__  
__a.__ In the main function,we had 3 main tasks 1.printf() , 2.function call 3.again a printf().
__b.__ We can easily figure out that tha main<+9> instruction is the printf("\nBefore function call\n"), and main<+29> is printf("\nAfter function call\n");
__c.__ What does main<+19> do? It says __<+19> call 0x40058f__ < print_string > . From this,it is clear that our "print_string" function is __called at <+19> instruction.(Address of this instruction is 0x400579)__.

__7.ANALYSIS OF__ print_string() :

__a.__ push rbp
       mov rbp,rsp
       sub rsp,0x20

What this does is,The system is making space(__in the stack__) to store our 30 bytes(string) .
__b.__ print_string<+20> ,the __gets()__ is called.__(important!)__
__c.__ print_string<+32> ,the __puts()__ is called.

After the execution of print_string(), How does the computer know that control should __return__ ed back to main() again? __Notice that there is something called "ret"__ in print_string<+39> .

(__NOTE : The 0x0000000000400566 is the starting point of main() IN MY COMPUTER. IT MIGHT BE DIFFERENT IN DIFFERENT COMPUTERS__).

__8.Note our observation points and then run the program.__

__a.__ Let us stop before print_string() is called.
__b.__ Let us stop after print_string() is called and then go step by step.

We can stop using the "__break__" instruction of gdb.

![Image6](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/break_points.png)

First,we break at main() and then at print_string() .Now we run the program.__$(gdb)run__

__c. (gdb)ni__-> means __next instruction__.Using "ni",we can analyse each instruction as we go.
__AT 0X400579__,print_string() is present.This is __important__.

Finally,we have stopped at gets(a).This instruction is not yet executed.

![Image6](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/before_gets.png)

In the above screenshot,
__d. (gdb) x/32xw $rsp__ shows us the memory space (the space in stack) that system has allocated to store the string we input. There is something that is highlighted in the screenshot. Can you guess what this could be??

__e. 0x0040057e__ -> Address of the instruction after "call print_string() " in the main() function . [Go back to the assembly code of main() and check] . This means,when print_string() function is called, __THIS "0X0040057e" or THE RETURN ADDRESS is stored.__

![Image7](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/after_gets.png)

__f.__ After a few "ni"s,gets(a) is executed and we input our string.
Then again,check the stack by using __$(gdb) x/32xw $rsp__ . (refer the above screenshot).

__g.__ We will run it again with nore 'a's and see what happens.

__The space where return address or 0x0040057e is supposed to be present has now become 0x00400061.__ 0x61 is the ascii equivalent of 'a'.So, __Our string this time tried to overwrite the return address.__

The computer now __thinks__ that the return address is __0x00400061__ ,but that is an __invalid address__ (Or an address which is not used in this particular program).

Check out the screenshot below .

![Image8](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/illegal_instruction.png)

Let us see and check what happens . After a few "ni"s,The string is printed and then "__Segmentation fault__"Remember we had got the same error in the very beginning . (before we started analysing with gdb) .

Now __we know__ why the error occurred. __The address "0x00400061" was not accessible(or not a valid address)__ and that's why we got an error. The control was __NOT__ transferred back to main() .

Think about it once,__What if we overwrite the actual return address by a new VALID address where the new address has instructions that WE want to execute?__

THIS WAY,WE CAN EXECUTE WHICHEVER INSTRUCTIONS WE WANT.The statement we had at the beginning (trying to fool the computer) is slowly coming to our light right?

__h.__ Ok,now that we know the trick,we can give any valid address and the instruction in that address will be executed.

WHAT IF WE GIVE THE ADDRESS OF "print_string()", will it be executed twice,__Will it print the inputed string twice?__ . Let us see..

__Let us note that the address of the instruction which calls__ print_string() __is at 0x0000000000400579 .__

![Image9](/blog/assets/img/A-step-ahead-in-Reverse-Engineering/final.png)

Instead of using python,we will use another useful tool,the __printf__ .

__$ printf "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\x00\x79\x05\x40" | ./overflow__

There are 39 a's and the address which calls print_string() in the reverse order.(WHY IS THAT??)

AND WE HAVE ACHIEVED IT!!The print_string() function was executed twice silently(with no wierdness) and control was returned back to main() again silently.

__(Note:The number of a's that I have put to reach the space where return address is stored may or may not be same as the number of a's you might have to put to reach it. AND AGAIN,Our addresses need not be same.)__

So,analyse the assembly code properly,make a note of all the important addresses and then proceed.


There are a few things that were left unexplained:

__1.__ Why the source code was named "overflow.c" :What you have just done is a simple but an authentic example of what is known as "BUFFER OVERFLOW" . The a[30] is the buffer we had to store the string. When the strig length exceeded 30,the string is said to have overflown the buffer.

__2.__ When compiled normally,we could not have done all the analysis that we did now. The latest compilers keep a check on buffer sizes and protects us from buffer overflows.

__3.__ Check why we added -fno-stack-protector and -zexecstack while compiling the sourcecode.

__4.__ Why we typed in the address in the reverse order in the last part?

And a few more for you to research.


There was one more thing. __Executing instruction that WE wanted.__ That is definitely possible but is beyond the scope of this article. READ ABOUT THE ACTUAL IMPLICATIONS OF A BUFFER OVERFLOW. It is very interesting!


I know this is a lot of stuff to know at once.Go through the article several times,understand each and every bit.

I hoped you enjoyed the article and learnt something new out of it.
Any kind of suggestion,feedback or appreciation:P ,leave a comment below.

If you have any doubts regarding the article,feel free to email me.
__EMAIL: adwait.gautham@gmail.com__
