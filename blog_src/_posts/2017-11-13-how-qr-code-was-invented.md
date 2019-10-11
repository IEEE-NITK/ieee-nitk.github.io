---
layout: post
title: "How QR code was invented"
author_github: shreeramhegde
date: 2017-11-12 16:37:21
image: '/assets/img/'
description: 'Ever wondered how QR Code is scanned by your mobile?'
tags:
- QR code
categories:
- Diode
github_username: 'shreeramhegde'
---

## How QR code was invented

Denso Wave a subsidiary of the Toyota Group are attributed with the creation of the QR Code back in 1994. Originally it was used to track parts in the vehicle manufacturing industry, but its use and scope has since grown tremendously. One of the main objectives when creating the QR Code was to come up with a new barcode that allowed more data to be encoded without increasing the size (dimensions / surface area) of existing barcodes. This was achieved by including a second dimension.

The QR Code was born.

## Working of QR code

The conventional one dimensional barcodes used on virtually every consumer product are mechanically scanned. That is, they're read by physically bouncing a narrow beam of light onto the code, which can be interpreted using the pattern of light reflected off the white gaps between the lines.

![QR](/blog/assets/img/qrCode/image1.jpeg)

QR codes, on the other hand, can not only hold 100 times more data than 1D barcodes—they can also be digitally scanned. The block of smaller black and white squares is read by a smart phone's image sensor, then interpreted by the system processor. The three large squares act as alignment targets, while the smaller square in the remaining corner acts to normalize the size and angle of the shot. The blue strips near the alignment squares contain formatting information, and the remaining yellow area is the actual data that's converted into binary code and checked for errors before being displayed. The encoded data can be interpreted as one of four primary modes—numeric, alphanumeric, byte/binary, and Kanji. Other forms of data can also be displayed with the appropriate extensions.

The most common QR Code type is broken down in the following information identifiers:

![QR](/blog/assets/img/qrCode/image2.png)

**Version** and **format** information are important for the scanning device to know what kind of data to expect. Meanwhile, the **data** can be slightly smeared or missing and still be readable. This depends on the error correction level being used when writing the code.

And did you know that you can rotate QR Codes however you like? Upside down will still work! This is a courtesy of the position patterns (squares with dots in the middle) that allow the code to be read from any direction in 360 degrees.

Meanwhile, the **alignment** patterns are used to assist in navigation of larger codes and the **timing** patterns are used to determine the size of modules. The **quiet zone** requires a margin of at least 4-module worth.

## How much can we store?

We can store up to 4,296 alphanumeric characters. One alphanumeric character is either a character from A to Z or a number from 0 to 9. With the need of special characters like ,.!/$§% or öÖäÄüÄß, the capacity shrinks down to 2.956 Bytes. But that’s still plenty.