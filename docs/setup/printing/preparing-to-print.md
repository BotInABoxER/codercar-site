---
layout: default
title: Preparing to Print
parent: Printing
nav_order: 2
---

Now that you've found yourself a 3D printer, it's time to prepare your 3D models.

Download the latest Project Rover models from GitHub here:

[Get the Code!](https://github.com/botinaboxer/project-rover){: .btn .btn-blue }

Once you're on GitHub, click the green **Clone or Download** button, then select **Download ZIP**.

(Alternatively, if you know how to use Git, you can download the code with `git clone https://github.com/botinaboxer/project-rover.git`)

Once you've downloaded the project-rover-master.zip file, look for it in your computer's Downloads folder and extract its contents. Most modern operating systems (like Windows 10, macOS, and many Linux distributions) come with programs that do this for you. In the rare case you don't have an unzipper program, download [7Zip](https://www.7-zip.org/).

Anyway, once you have extracted your files, open a **slicer** program like [Cura](https://ultimaker.com/en/products/ultimaker-cura-software). Slicers convert 3D models in file formats like STL to .gcode, which is a set of mathematical instructions that 3D printers, CNC machines, and other Computer-Aided Manufacturing devices use. GCODE files are **toolpaths** - literally paths for a machine's tool (like a 3D printer's extruder, a CNC mill's drill, or a laser cutter's laser) to follow.

So, open Cura, go to the "File" menu at the top-left of its window, go to "Open..", navigate to your Downloads folder, and select an STL file in the project-rover-master file that you want to print. In newer versions of Cura, you can even drag the files directly into the window and drop them there, and Cura can load them.

Now, you need to actually slice the model. You can drag other files onto the print bed in Cura; as many as will fit on the bed. When you've arranged the parts in a way you like, click on the "Prepare" button at the bottom-right of the window, and Cura will generate a toolpath by "slicing" your 3D models into 2D layers. You can rename the toolpath by clicking on the name in the bottom-left above the models' dimensions, then you can save/print the model from Cura. If your printer is connected with OctoPrint or if it's an Ultimaker, you'll see an option to Print the model directly. Otherwise, you can save the toolpath in a .GCODE file to an SD or microSD card, which you can insert into your printer.

At some point, I'll release a video detailing how this whole process works, but in the meantime if you need any more information, contact me at [matthew@botinabox.ca](mailto:matthew@botinabox.ca).

Let the printing begin!
