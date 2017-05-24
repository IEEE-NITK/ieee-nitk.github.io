---
layout: post
title: "Installing Ubuntu For Windows Users"
date: 2017-05-23 20:03:44
image: '/assets/img/'
description: 'Detailed Instructions on installing Ubuntu on your Windows machine'
tags:
- Linux
- Ubuntu
github_username: 'hrily'
comments: true
---

# Installing Ubuntu For Windows Users

![Ubuntu](/blog/assets/img/installing_ubuntu/ubuntu.png)

Hie

Installing Ubuntu on your machine is really helpfull in college days. It comes free and there are lots of open source softwares available for it.
Last year, a lot of people came to my room for installing ubuntu on their machine. I once thought of opening shop for installing ubuntu (Just Kidding :P)

So, this brief blog gives instructions on installing Ubuntu alongside Windows as a dual boot OS. 

### 1. Creating a partition for Ubuntu

First thing we need to do is create a partition to install ubuntu. If you already have a partition, empty it and format it. If you don't have one, follow this [page](http://www.wikihow.com/Partition-Your-Hard-Drive-in-Windows-7).
*Remeber the size of the partition you desire, it will be usefull later.*

### 2. Create Bootable Live USB

[Download](https://www.ubuntu.com/download/desktop) and create a live USB or DVD. In Windows, my favorite tool to create a live USB is [Universal USB Installer](http://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/).

### 3. Boot up the Live USB

Now insert the USB into machine, restart and boot into USB drive from the **Boot Options Menu**. Google for hotkey to get into **Boot Menu Options** of your machine model.

### 4. Start Installation

When prompted for options on booting, select **Install Ubuntu**

![Install Ubuntu](/blog/assets/img/installing_ubuntu/install_ubuntu.jpg)

Select *Continue* for first few screens

![First Few Screens](/blog/assets/img/installing_ubuntu/first_few.jpg)

### 5. Preparing Partition for Ubuntu

After few screens, you will be prompted for **Installation Type**. Choose **Something Else** and continue.

![Installation Type](/blog/assets/img/installing_ubuntu/installation_type.jpg)

Now select desired partition (match the size of partition with one you created in step one), and click on **-** to delete the partition

![Ubuntu](/blog/assets/img/installing_ubuntu/delete_partition.jpg)

### 6. Create root, swap and home partition

Now selecting the same partition, click **+** to create **root** partition.
Enter size *14000 MB*, select *Logical Partition type*, *Begining of space*, and select **/** as *Mount Point*. Create the partition.

![Create Root Partition](/blog/assets/img/installing_ubuntu/create_root.jpg)

Follow similar steps for *swap* and *home*

#### swap
+ Size: 16000 (two times your RAM)
+ Logical Partition
+ Begining of Space
+ Use As: swap area

![Create Swap Partition](/blog/assets/img/installing_ubuntu/create_swap.jpg)

#### home
+ size: (remaining space)
+ Logical Partition
+ Begining of Space
+ Mount Point: /home

![Create Home Partition](/blog/assets/img/installing_ubuntu/create_home.jpg)

Now select **Install Now**

### 7. Follow next screens

Your ubuntu installation should begin by now, follow the screens prompted for user name and password and general system setup. 
After few minutes, the installation will complete

### 8. Reboot and Enjoy!

Your ubuntu installation is complete. Reboot the machine to get into Ubuntu. Don't worry, you can still use Windows.

If you ran into any issue during installation, try googling it or you can always ping me over mail.

Untill then, 
This is *hrily* signing off...