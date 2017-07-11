from PIL import Image
from os import walk
from os import listdir
from os.path import isfile, join
from sys import argv

#files_list = [f for f in listdir(".") if isfile(join(".", f))]
#print(files_list)

if len(argv) != 2:
    print("Incorrect usage: %s <filename>" %(argv[0]))
    exit()

file_name = argv[1]

with Image.open(file_name) as img:
	width,height = img.size
	print(str(width) + " " + str(height))

	if height > 200:
		new_width = ((int)((width/height)*200))
		img = img.resize((new_width,200), Image.ANTIALIAS)

	print("Image size after resizing")
	width,height = img.size
	print(str(width) + " " + str(height))

	img.save(file_name, optimize=True, quality=75)
