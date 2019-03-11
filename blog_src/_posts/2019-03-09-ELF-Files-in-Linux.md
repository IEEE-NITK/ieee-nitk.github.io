---
layout: post
title: "ELF Files in Linux"
author_github: arpi-r
date: 2019-03-09
image: '/assets/img/'
description: 'An introduction to ELF Files in Linux'
tags:
- ELF
- Linux
- Binary
categories:
- Compsoc
github_username: 'arpi-r'
---

Have you ever tried to print the a.out file generated when you compile your C program? It prints gibberish! Ever wondered how the computer produces a valid, sensible output from this? Read ahead to find out.

## Introduction

ELF stands for Executable and Linkable Format. ELF files are usually the outputs of compilers. They exist in binary format (hence, the gibberish when printed). This format helps the operating system interpret the underlying machine instructions correctly. ELF is not only used for binaries and executables but also object code, shared libraries and core dumps.
Any program is first translated by a compiler to object code. This object code is then linked with system libraries using a linker tool. This produces a binary file which can be executed on that specific platform and CPU type. This file follows the ELF format.

## Structure

You can look at the structure of an ELF file using the *readelf* command in the terminal.

### ELF Header
![ELFHeader](/blog/assets/img/ELF-file-in-Linux/ELFHeader.png)

The first mandatory part of an ELF file is the ELF header. It makes sure that the data is correctly interpreted during linking and execution.
Its first 4 bytes are the *Magic Number*. A magic number is the first few bytes of any file in Linux which helps the operating system understand what type of file it is. The ELF Header begins with the following bytes (hexadecimal parts): 7f 45 4c 46. 45=*E*, 4c=*L* and 46=*F* in ASCII. 

The next byte indicates the architecture required for the file. 01 is for 32-bit and 02 is for 64-bit architecture. This is the *class field*.

The following byte represents the type of encoding. 01 indicates LSB (Least Significant Bit) or little-endian. 02 indicates MSB (Most Significant Bit) or big-endian. This value is important in interpreting the remaining objects in the file as they are specified in the corresponding format. Different processors represent data and addresses in various formats, and hence, this field becomes 
very significant. This is the *data field*.

The 7th byte is the *version byte* which as the name suggests gives the version of ELF. Currently, there is only one version, and so its value is 01.

The ELF Header follows an alignment, every field of n bytes starts at a byte which is a multiple of n. So, if a field is 4 bytes then it starts at a byte which is a multiple of 4, say the 20th byte. The 8th to 16th byte is 0. This space is a *buffer.* This provides extensibility to future versions of ELF, in case additional fields are needed and helps provide alignment.

The 17th and 18th byte are the *type field* of our ELF file. Type can take on four values. 01 indicates Relocatable file (before linking), 02 indicates Executable (binaries), 03 stands for Shared object files (libraries) and 04 for core.

Apart from the ELF Header, the ELF file has three parts: Program headers (Segments), Section headers (Sections) and Data.

### Program Headers
![ProgramHeader](/blog/assets/img/ELF-file-in-Linux/ProgramHeader.png)

This describes how to create a process/memory image for run-time execution. The kernel uses these segments to map them into virtual address space. It converts predefined instructions into a memory image. To run a binary ELF file, program headers are required. It uses these headers, with the underlying data structure, to form a process. This process is similar for shared libraries. Examples of program headers include *GNU_EH_FRAME and GNU_STACK*.

### Section Headers
![SectionHeader](/blog/assets/img/ELF-file-in-Linux/SectionHeader.png)

The section headers define all the sections in the file. This is used for linking and relocation. Once the GCC compiler converts code to assembly and the GCC assembler converts that to object code, these sections appear in the ELF file. Any segment (mentioned above) can have zero or more sections. Executable files have four main sections: *.text, .data, .rodata, and .bss.* Each of these sections is loaded with different access rights.

## Conclusion

ELF is a formal specification that defines how instructions are stored in executable code. The ELF file type is extremely flexible. It provides support for multiple CPU types, machine architectures, and operating systems. It is also very extensible. This article is an introduction to ELF Files in Linux. To know more check out the links in References.

## References

 - [https://medium.com/@MrJamesFisher/understanding-the-elf-4bd60daac571](https://medium.com/@MrJamesFisher/understanding-the-elf-4bd60daac571)
 
 - [https://linux-audit.com/elf-binaries-on-linux-understanding-and-analysis/](https://linux-audit.com/elf-binaries-on-linux-understanding-and-analysis/)




