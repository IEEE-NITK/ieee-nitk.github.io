#!/usr/bin/python2

from PIL import Image
from os import walk
from os import listdir
from os.path import isfile, join
from sys import argv

#files_list = [f for f in listdir(".") if isfile(join(".", f))]
#print(files_list)

max_height = 400

if len(argv) != 2:
    print("Incorrect usage: %s <filename>" %(argv[0]))
    exit()

file_name = argv[1]

with Image.open(file_name) as img:
	width,height = img.size
	print(str(width) + " " + str(height))

	if height > max_height:
		new_width = ((int)((width*1.0/height)*max_height))
		print(width/height)
		img = img.resize((new_width,max_height), Image.ANTIALIAS)

	width,height = img.size
	print(str(width) + " " + str(height))

	img.save(file_name, optimize=True, quality=75)
