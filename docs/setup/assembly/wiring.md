---
layout: default
title: Wiring
parent: Assembly
nav_order: 5
---

Now that you have the Motors, Motor Controllers, and Raspberry Pi Zero W in place, it's time to wire everything up. Surprisingly enough, if you have all the right [parts]({{ site.url }}/docs/setup/bom/materials.html), this should be one of the easier steps.

Before you begin wiring, make sure you have gathered the following things:

- 12 Female-to-Female Dupont Jumper Cables (having all different colours except two reds and two blacks is nice, but optional).

That's it, actually. So, what you have to do is fairly simple: connect the pins on the Motor Controllers to the proper pins on the Raspberry Pi Zero W.

For an easy reference, you can print out the [Wiring Cheat Sheet]({{ site.url }}/assets/files/truth_tables.pdf) PDF, which has a spot for writing your own Truth Tables. More on them in a bit.

Now that you've gathered all the materials, you can start wiring. Position your CodeRcar Body so the Pi is positioned the same way it's shown on your Cheat Sheet. The red wires should go from the VCC pins on the Motor Controllers to the two 5V pins on the Pi. The black wires should go from the GND pins on the Motor Controllers to any two of the GND pins on the Pi. As for the other four wires per Controller, they can go to any GPIO port, excpet GPIO2 and GPIO3 (because they're used for other things, like the [I<sup>2</sup>C](https://www.i2c-bus.org/) protocol).

If you have one of the newer CodeRcar Top Mounts (version 0.5.2 onward), you can thread the wires through the wire holder loops at either end of the Top Mount before connecting them to your Pi if you want to have less of a mess when you're finished.

Now, you don't have to, but if you have coloured markers/pens corresponding to the other wires' colours, you can circle the pin numbers on the Cheat Sheet to which each of the wires is connected. Or, you can just use a pencil to circle the pin numbers.

The next thing you'll want to do is right down the pins you're not using for 5V or GND in the Pin section of the Truth Tables. This will come in handy later.

Finally, to test your wiring, carefully connect your Pi to a power source, be it by a Raspberry Pi Power Adapter connected to a wall outlet or a USB Power Bank. If you did it correctly, the Motor Controllers' red LEDs should be on and bright. If they aren't on, check their 5V/GND connections. If one Controllers' light is brighter than the others', try checking its specific 5V connection. The Controllers' lights will probably light up if they're only connected to GND and at least one GPIO pin, but the GPIO      **(General Purpose Input/Output)** pins are only for data transfer, *not* for giving things power.

Click/tap on the image below to open up a slideshow to get a better idea of what exactly you're trying to do.

{% include image.html links="wiring-motors-setup.jpg,wiring-motors-redblack.jpg,wiring-motor-finished.jpg,wiring-motors-redblack-finished.jpg,wiring-motors-finished.jpg,cheatsheet-gpio.jpg,cheatsheet-pluggedin.jpg" titles="Motor Wiring Setup,Red --> VCC; Black --> GND,One Hooked-Up Motor Controller,Red --> 5V; Black --> GND,GPIO Pins Circled,GPIO Pins Recorded,It\'s Alive!" %}
