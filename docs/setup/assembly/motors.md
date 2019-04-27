---
layout: default
title: Motors
parent: Assembly
nav_order: 4
---

Now that you have the Motor Controllers and Raspberry Pi Zero W in place, it's time to tackle placing the motors. Other than wiring, this part is arguably the most complicated, but if you're careful, read the instructions properly, take your time, and ask someone like a parent, teacher, or local electronics aficionado to give you a hand, everything should go just fine.

Before you even think about screwing the motors onto the Body, you'll need to solder jumper wires onto each of the motors' two electrical contacts. Technically speaking, this shouldn't be too hard, but if you're new to soldering or unsure of exactly what you're doing, it can be quite difficult.

At the moment, you should do some research into what exactly soldering is, including the equipment, tools, and necessary safety precautions. Soldering can be tricky, but with the right amount of practice it really shouldn't be too hard for anybody that can hold a pencil, a drill, or chopsticks correctly to learn how to solder. That being said, soldering has inherent dangers. It is *not* something that should be done without a responsible adult present, since it can easily lead to burns, eye irritation, and fires (not to mention messy soldering joints and ruined electronics). However, soldering doesn't have to be any more dangerous than using power tools or an oven, and it's a fairly easy and highly rewarding skill to pick up. At the moment, do your research. What videos, read articles, maybe even build a soldering station of your own (including safety eye goggles, a soldering iron, some solder, a soldering stand, a burn-proof silicone mat, some test components, and maybe helping hands) and practice. Soldering the motors on your Project Rover doesn't have to be difficult, because it really isn't.

In the near future, be on the lookout for a Bot-In-a-Box-themed Learn to Solder website, similar to this one. Maybe it'll be hosted at soldering.botinabox.ca or something. The link will be here when it's live, at any rate.

If you're confident and OK with soldering, here's how to ready your kit's motors:

- Take a Male-to-Male Jumper Cable, cut it in half, and strip about two centimetres of insulation from each of the cut ends.
- Heat up the soldering iron.
- Twist the stripped wires with your fingers to make them thin enough to fit through the tiny holes on the motor's contacts.
- Bend both of the stripped wires over themselves, and twist them again.
-  Tin the iron, put a bit of solder flux on the stripped wires if you have any, and carefully place the tip of the soldering iron on one of the stripped wires, being careful not to touch the motor's plastic shroud or the wires' plastic insulation.
- With your other hand, take a stick of solder and touch it against the heated wire. If you're doing it correctly, it should almost instantly melt and coat the wire.
- Pull the iron back, and repeat the soldering process for the other wire.
- Unplug the soldering iron, let it cool, and wait a couple minutes for the motor's contacts to cool down as well. You can now put some electrical tape over your newly-soldered joints, if you want to give them a bit of protection from oxidization (exposure to oxygen) which can hurt their electrical connection.

Remember, soldering isn't about getting a big blob of metal on a wire, or about glueing/welding two pieces of metal together. It's all about ensuring an electrical contact between two pieces of metal, so electrons can flow freely between them.

Below is a slideshow with some helpful images for each of the steps listed above.

{% include gallery.html num = 10 links = "solder-setup-2wires.jpg,strippers-clipping.jpg,strippers-stripping.jpg,stripped-4wire.jpg,motor-bentwires.jpg,motor-twistedwires.jpg,motor-solderedwires.jpg,electrical-tape-scissors.jpg,motor-snipping-tape.jpg,motor-finished.jpg" titles="Soldering Setup,Snipping a Jumper Wire,Stripping a Snipped Wire,Prepared Wires,Wires in Place,Wires Twisted,Soldered Wires,Snipping some Electrical Tape,Covering with Tape,Finished Motor" %}

Next, you're going to want to get 12 M3 screws and an M3 screwdriver to attach the motors to the Body:

{% include image.html title="Preparing to Screw in the Motors" alt="An orange and black M3 screwdriver sits on a table beside four yellow motors with two wires sticking out of each; 12 black M3 screws and a grey 3D-printed robot car chassis with two blue Motor Controllers and a green Raspberry Pi Zero W screwed into it lay nearby" src="motors-presetup.jpg" %}

Place a motor in a slot as shown below, and carefully screw in an M3 screw to the hole on the bottom. Once it is as tight as it can get (make sure it is lined up with the hole in the motor, otherwise you could risk snapping the motor mount), screw in the top screw as well.

{% include image.html title="Outside Screws" alt="An orange and black M3 screwdriver sits on a table beside a yellow motor; the motor is attached to a grey post by two black M3 screws, and its white shaft protrudes from the motor to the left of the image" src="motor-outsidescrews.jpg" %}

Next, screw in the remaining screw by hand. It might be a bit tricky to start, and if you can fit an Allen Key in the slot to do the job, it'll work, but the screw hole should have enough clearance to allow you to tighten the screw in by hand, and tightening it in with an Allen Key can be tedious work. Besides, it is only there to ensure the motor doesn't wobble, not so much to secure it in place. Again, make sure it's actually tightening into one of the motor's holes, and not the side of it.

{% include image.html title="Inside Screw" alt="A yellow motor is attached to a grey post with a black M3 screw. To the motor's right is a Motor Controller, also screwed in place" src="motor-insidescrews.jpg" %}

Once your motors are in place, screw in the male Dupont part of each's wires to one of the screw terminals on the Body, like so:

{% include image.html title="Screwing in the Jumper Wires" alt="An orange and black Philips J0 screwdriver screws in a red jumper wire, that extended from a yellow motor to the right, onto a Motor Controller" src="motorcontroller-philipsscrews.jpg" %}
