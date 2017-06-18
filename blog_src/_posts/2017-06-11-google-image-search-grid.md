---
layout: post
title: "Implementing Google Image Search Style Grid"
date: 2017-06-10 12:10:44
image: '/assets/img/'
description: 'A walkthrough of implementing image grid similar to Google Search'
tags:
- Design
- Grid
categories:
- IEEE
github_username: 'hrily'
comments: true
---

# Implementing Google Image Search Style Grid

I love design principles of Google. The way they present things is really awesome. One such presentation is Google Image Search.

![Google Image Search](/blog/assets/img/google_image_search/google_image_search.png)

Look at the way they arrange images. Each row has a fixed width, but their are no columns. The images have arranges themselves, intelligently, just enough to fit the row. I always wondered, what algorithm they must have used to achieve this.

### What I thought

So my search began. Initially I thought they might have used some kind of knapsack algorithm to fit images to the row width. It means rearragning the positions of images, shifting them from one row to another. But if you inspect, the images don't change their positions, yet they can fit in the row, amazing!

I searched the internet to find whats behind the amazing grid. It turns out that, the technique which is used is far simpler than knapsack and yet brilliant. So, here I present you a really simple technique to achive the **Google Image Search style grid**

*NOTE: This post does not provide any 'ready to copy+paste' code. I will only provide pseudo code, you are free to implement it in any language you prefer.*

### Initial intuition

If we look closely, we can see that the images in a row have equal height. Also, the heights of rows are not same. So the first intuition is to make the heights of images equal. Lets say we have list of `images` which stores `height` and `width` of each image.

~~~~
Set CONST_HEIGHT := 160
For each image in images:
	Resize image to height CONST_HEIGHT, constraint ratio
~~~~

### Building a Row

So now that we have normalized the image heights, let's build a row. First we'll have a look at the pseudo code, explanation is on the way...

~~~~
/**
 * Procedure to build a single row
 * parameter: images - list of images
 * returns: row - list of images in the built row
 */
BUILD_ROW(images):
	SET row_width := 0
	Initialize row_list
	While row_width < MAX_WIDTH AND images.size > 0:
		Dequeue an image from images
		Append image to row_list
		row_width := row_width + image.width
	If row_width > MAX_WIDTH:
		Create new image row_image, with height = CONST_HEIGHT and width = row_width
		Resize row_image to width MAX_WIDTH, constraint ratio
		For each image in row_list:
			Resize image to height row_image.height, constraint ratio
	return row_list
~~~~

So let's see whats happening here. First we intialized row_list which stores the images in that particular row, and a variable row_width which will store the total width of the row. 
Now we keep adding images to row from original list until the row_width exceeds the `MAX_WIDTH`, which is maximum width of the screen. Now we have a row which looks something like this.

![Row](/blog/assets/img/google_image_search/row.jpg)

Now comes the trick. We won't try to fit the images in row, instead we will try to fit our created row in the maximum width of the screen. So we create an dummy `row_image`, which represents the entire row, with height equal to `CONST_HEIGHT` and width equal to `row_width`. Now we resize the `row_image` to width equal to `MAX_WIDTH` and then we resize all the images in `row_list` to height equal to the new height of `row_image`.
Here's a depiction of the process...

![Resized Row](/blog/assets/img/google_image_search/resized_row.jpg)

### Building the Grid

Now that we know how to build a row, building the grid is easy.

~~~~
/**
 * Procedure to build the grid
 * parameter: images - list of images
 * returns: grid - list of rows
 */
BUILD_GRID(images):
	Initialize grid
	While images.size > 0:
		SET row := BUILD_ROW(images)
		Append row to grid
	return grid
~~~~

Nice, we just made a Google Image Search style grid, where images fit in a row, intelligently. 

### There's more

Hold on, there's little more. While resizing the images, due to floating point divisions and floor operations, we lose some units in the row. If we neglect them, the rows won't have equal widths. To overcome this, we just need to know the units we have lost and divide them equally among the images.

~~~~
BUILD_ROW(images):
	...
	// After resizing the images
	// Calculate width of resized row
	SET row_width := 0
	For each image in row_list:
		row_width := row_widt-h + image.width
	// Calculate the lost units
	SET delta := MAX_WIDTH - row_width
	// Divide the lost units among the images
	While delta > 0:
		For each image in row_list:
			image.width := image.width + 1
			delta := delta - 1
	return row_list
~~~~

You might be thinking that, aren't we changing image aspect ratio here? Yes, but one can lose a single unit in a single division. So the maximum number of lost units is equal to number of images in row. So width of each image will be increased by atmost one, which isn't a big deal. Also you can center crop the images, so that there isn't any empty space left out.

Go ahead, try implementing it in your next web or mobile app. If you find any issues, you can always mail me...

That's it guys, until then, 
This is *hrily* signing of...