import os
import PIL
from PIL import Image

for root, dirs, files in os.walk("."):  
    for filename in files:
    	if ".png" in filename:
        	foo = Image.open(filename)
        	foo.save(filename,quality=95,optimize = True)