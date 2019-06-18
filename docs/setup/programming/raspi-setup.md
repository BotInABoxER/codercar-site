---
layout: default
title: DietPi Setup
nav_order: 4
parent: Programming
---

After your Pi reboots, try to log back into it.

You'll probably get some sort of error (like a man-in-the-middle attack warning), and you won't be able to connect. Now, normally, this is something to take very seriously, as it's a pretty clear sign that a hacker has compromised your connection to the device to which you want to connect. However, in this case, it's just a sign that the SSH server software on your Pi has changed from DropBear to OpenSSH. This is actually what's supposed to happen, since DietPi comes pre-installed with Dropbear, but a program that you installed, Gogs, needs an OpenSSH server to be running. Functionally, both programs are quite similar (though admittedly Dropbear does seem to be ever-so-slightly faster than OpenSSH on a Pi Zero W), but your SSH client software has correctly detected that they are indeed different. 

So, how do you connect now? The answer is actually quite simple. You may have remembered that, when you first SSH'd into your Pi, your SSH client asked if you wanted to add the Pi's IP address to your known hosts file, to which you agreed. So, now, you just have to get rid of that entry in your known hosts file (which can be done by deleting it if you have never used SSH on your computer before, though it's safer to just open it in Notepad++ or a similar program and simply remove the line with your Pi's IP address, than save the file and try again.

Alright, so login to your Pi via SSH again, this time as the dietpi user, and wait for the shell to come up. When it does, you're going to want to install some more preliminary software by using the command below:

```sh
sudo apt-get install git curl python python3 python3-pip python-pip wget make cmake mosh python3-dev python-dev python3-pil gpg2 man ca-certificates
```

```sudo``` is a special word that means "do this as a Superuser." A Superuser, or *root* user (sound familar? eh?) is one that basically has full access to the system, and can do everything they want to do. That might sound good, so why shouldn't you login as a root user all the time? The simple answer is "just in case." Being a Superuser comes with a lot of responsibility, since with one command you could erase all the files on a computer or stop important programs from running. If a hacker gets ahold of a root account on a computer, that computer may as well be their own. So, in case you make a mistake while typing in a command, or want to restrict users from doing certain (often destructive) things to a system, you should always login as a non-root account, like dietpi, in this case.

Now, sometimes you *need* to have root privileges to do certain commonplace things, like installing software from the ```apt``` package manager for instance. In that case, you can preface the command you want to run with ```sudo```. On a normal system, after doing this, you should be asked to enter the root password. However, on Raspian by default (DietPi is a form of Raspbian) you can just run ```sudo``` without your password. I would recommend only using ```sudo``` when the command would not work without it, such as when accessing/deleting/modifying write-protected files or installing software from ```apt```. 

```apt```, the Advanced Package Tool, is a tried-and-true package manager for Unix-like operating systems (like DietPi!). You can use it to install programs much in the same way you can download apps from F-Droid, the Windows Store, the App Store, or Google Play. Using ```sudo apt install``` followed by the names of the packages you want to install, typing ```y``` for yes or ```n``` for no when prompted, and waiting for ```apt``` to do its thing will allow you to download any of literally hundreds of thousands of packages for Linux. However, keep in mind that ```apt``` can only find a package if it is in one of its repositories. ```sudo apt update``` is a command you should run frequently to update the list of repositories that ```apt``` searches, and ```sudo apt upgrade``` allows you ```apt``` to download and install newer versions of the packages you currently have installed, when they become available.

At any rate, the software packages you will install with the above command are the following (note that although some have already been installed during the automated DietPi installation, the above command ensures they are all up-to-date):
- ```git```: Made by Linus Torvalds, the creator of Linux, Git is a super-simple version control software (VCS). VCS allows software developers to make and store different copies of the programs they write, so they can try out new things without worrying that they'll lose all their progress by making a code-breaking mistake or overwriting an important file. It's also the technology that drives popular code-hosting websites like GitLab, Bitbucket, and GitHub. While setting up your CodeRcar, you'll be using Git to download files from GitHub, and you can also use it with Gogs, the Go Git Service, that you should have installed already.
- ```curl```: Curl, or Client URL (Universal Resource Locator) is a simple data transfer utility. You can use it to download scripts and other files easily.
- ```python```: The Python programming language (note that this package installs Python 2, which is older and different from Python 3).
- ```python3```: The newer version of Python (you'll need both for the time-being, even though Python 2 is older, because some programs only work with a certain version of Python).
- ```python-pip```: Pip, the Package Installer for Python (Python 2 version).
- ```python-pip3```: Pip for Python 3 packages (pip is kinda like ```apt```, but just for Python packages).
- ```wget```: Similar to Curl, wget is a program you can use to download files from webservers using HTTP/HTTPS or FTP.
- ```make```: Make is a utility that helps you compile certain programs (turning human-readable code into computer-executable code).
- ```cmake```: Cmake is a program to generate Makefiles, which ```make``` can then be used to compile. They go hand-in-hand.
- ```mosh```: Mosh is actually an alternative protocol to SSH, and it is often more reliable. You can use mosh instead of ssh to connect to your Pi if you install mosh first
- ```python-dev```: This package consists of some development utilities for Python 2.
- ```python3-dev```: Same as ```python-dev```, just for Python version 3
- ```python3-pil```: The Python Image Library; you can use this to import/export pictures using Python 3 (and you can use it with the Adafruit Nokia 5110 Library in Python 3).
- ```gpg2```: This is a PGP (Pretty Good Privacy) encryption tool, which you can use later to download ```rvm```
- ```man```: This package allows you to read man pages of packages (think of them like tiny manuals for a package); once installed you can run ```man package-name``` to get information about that package (try ```man apt```).
- ```ca-certificates```: This package is a compilation of HTTPS certificates (put together by Mozilla, of Firefox fame) from the most popular CAs (Certificate Authorities) so you can connect to HTTPS sources from the command line or a web browser.

```sh
gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```
^ the above command uses gpg to add two keys to your system's keyring, for use with ```rvm``` later.

```sh
cd ~
```
^ this command **c**hanges your working **d**irectory to ~ - your home directory, which defaults to /home/dietpi in this case. (~, or the tilde, can be typed by holding down a shift key, pressing the key to the left of the 1 key on your keyboard, and letting go of a shift key).

```sh
mkdir software
```
^ this command **m**a**k**es a **dir**ectory (or folder) called **software**

```sh
cd software
```
^ changing your working directory to /home/dietpi/software

```sh
curl https://getmic.ro | bash
```
^ using ```curl``` to download a script, then running it with ```bash``` (bash is the shell you're currently using, and the | or pipe symbol can be typed by holding down sift then pressing the backslash key (often under the backspace/delete key), then letting go of shift). This particular script downloads the ```micro``` code editor, which is a very cool terminal editor which you will most definitely find to be handy. But, please at least take a look at the script before running this command by navigating in your web browser to [https://getmic.ro](https://getmic.ro) and checking it out. It isn't a good idea to just randomly download and run files from the Internet, so at least familiarize yourself with the script. Don't worry, it's harmless (but please don't take my word for it).

```sh
\curl -sSL https://get.rvm.io | bash -s stable --ruby
 ```
 ^ now, we're installing ```rvm```, the Ruby programming language's Version Management utility. Again, take a look at the script before running it. You'll notice the ```-sSL``` on the ```curl``` command and the ```-s``` and ```--ruby``` on the ```bash``` command. Anything with a ```-``` (single hyphen, type one by tapping the key directly to the right of 0 on your keyboard) is considered a **flag**, and flags are like mini commands you can tack onto terminal commands to tell the program what you want it to do. Double-hypen things (```--```) are **options**, which can either be true or false, and they tell the program how to do what you want it to do. It's a little meta, but with enough practice you'll get the hang of it.

 This command downloads and installs ```rvm```, and then tells ```rvm``` to download the latest **stable** version of the Ruby programming language, which you can use to write some cool programs.

 ```sh
./micro ~/.profile
```
^ This opens the file at /home/dietpi/.profile with ```micro```. ~.profile is a textfile that you can use to set **environment variables**, which modify the way your terminal works. You can use them to create your own custom commands. You'll notice the ```./``` (period and forward-slash, which are right next to each other on your keyboard, to the left of the right shift key usually) before ```micro```. Normally when you install a package with ```apt```, the program's command is automatically-accessible globally (not all across the planet, though; installing something globally means making it accessible system-wide). However, since you just used ```curl``` to download a copy of ```micro``` locally (inside the /home/dietpi/software directory), you need to run it locally, and ```./micro``` is a way to do that with a **relative path**. Alternatively, you could use ```/home/dietpi/software/./micro``` from any folder (an **absolute path**)

Go to the top of the .profile file, and add this line: (use the arrow keys to navigate)
```sh
export PATH=$PATH:"/home/dietpi/software"
```
Next, use CTRL+S then CTRL+Q to save the file and quit the ```micro``` editor, returning to the command-line. (Note that whenever you see CTRL+something, it means to hold down a control or CTRL key on your keyboard, tap the key after the ```+``` sign, and then let go of the CTRL/control key. Also note that on Mac keyboards the command key is not the same as the control key, even though certain shortcuts like CTRL+C to copy and CTRL+V to paste work as COMMAND+C and COMMAND+V.)

```sh
./micro ~/.bashrc
```
^ Now, open the ```~/.bashrc``` file in ```micro``` (yes, there are different profile files. This one's specific to the ```bash``` shell you're using right now. It's a little complicated, so it's OK to just roll with it for the time-being). Add the following command to the bottom of the ```~/.bashrc``` file:

```sh
source ~/.profile
```
^ This will load the ```~/.profile``` file every time you start ```bash``` (including every time you initiate an SSH connection to your Pi), including the new ```$PATH``` variable's definition you just put there. Press CTRL+S then CTRL+Q to save the file and quit ```micro```. Now, ```micro``` should be accessible globally (along with any other programs that are in the /home/dietpi/software folder), so you can just type ```micro``` followed by a filename you want to edit/create, instead of having to type ```/home/dietpi/software/./micro```, even though that will still work.

```sh
python3 -m pip install --user setuptools
```
^ Now, you're using Python 3's ```pip``` to install ```setuptools```, a handy Python 3 package that helps when building/installing Python 3 software packages. Note the ```--user``` option, it's a way to get around using ```sudo```, which can mess things up when you're using ```pip```, because there are multiple versions of Python, mutliple folders where ```pip``` can install packages, etc. It's generally not a great idea to use ```sudo python3 -m pip install package_name```.

```sh
python3 -m pip install --user wheel
```
^ Another package to install via ```pip```. ```wheel``` is also helpful for installing/builing Python 3 packages.

```sh
python3 -m pip install --user crypto
```
^ Another one. This time for cryptography purposes (though it's really just because it's an optional dependency of the next package to install).

```sh
python3 -m pip install --user suplemon
```
^ Like ```micro```, ```suplemon``` is a powerful command-line text editor. You don't really need to have them both installed, but it's possible you might like one better than another, and they don't take up much space, so I figured it's worth installing both, even if you only use the one you like better. You can check out ```suplemon``` by using the command ```python3 -m suplemon```, optionally followed by the file you want to edit/create. If you like it better than ```micro```, feel free to use it for the rest of the setup progcess.

```sh
mkdir ~/.npm-global
```
^ If you remember watching the DietPi software installation, you may have noticed NodeJS being installed. NodeJS is a powerful tool that allows you to use JavaScript to do pretty much anything that any other programming language could do, and since a lot of people really like JavaScript and it's fairly easy to learn, NodeJS has become really popular. Like ```apt``` and ```pip```, node has it's own Package Manager (it's ```npm```; can you guess what it means? :) )

This command makes a directory called .npm-global in your ~ (home directory, /home/dietpi/ in this case). This will be helpful when we want to install packages globally with npm later on, without using ```sudo``` (since it's really advisable to not use root privileges unless you absolutely need them).

```sh
npm config set prefix '~/.npm-global'
```
^ Now, this command tells ```npm``` that, from now on, any packages it installs globally ought to go in the ```~/.npm-global``` folder. This is a workaround from the official ```npm``` website.

```sh
micro ~/.profile
```
^ Now, open up the ```~/.profile``` file again, in your favourite text editor. (```python3 -m suplemon ~/.profile``` works too.)

At the end of the file add this line:
```sh
export PATH=~/.npm-global/bin:$PATH 
```
^ Like you did with ```micro```, this command makes everything inside the ```.npm-global/bin``` folder accessible as a command, since it adds the folder onto the ```$PATH``` environment variable.

```sh
source ~/.bashrc
```
^ You probably know the drill by now...

```sh
sudo micro /dietpi/config.txt
```
^ Note the ```sudo```; sometimes you can't avoid it...

```sh
dtparam=spi=off
```
^ Search in the ```config.txt``` file for this line. Change the ```off``` to an ```on```, thus enabling SPI (the Serial Peripheral Interface; you can use it to control a Nokia 5110 LCD directly from your Pi). Press CTRL+Q, then type Y to save the file (on Suplemon, press CTRL+S, then CTRL+Q).

```sh
node --version
npm install -g n
n install version
```
^ After writing down the output of ```node --version``` (like, on paper, or somewhere you'll remember it), it's time to use ```npm``` to install ```n```, which is actually itself a NodeJS version manager. ```n``` is helpful because there are actually several dozen versions of ```node```, and some programs written in NodeJS only work in certain versions. This *can* be a nuisance, unless you use a nice version manager, like ```nvm``` or ```n```. (You can use ```nvm``` too, but I like ```n``` better and I think you might too.) Note the ```-g``` flag, as you're installing ```n``` globally. Finally, replace the ```version``` in ```n install version``` with the output of ```node --version``` from earlier. This way, you'll ensure compatibility with any ```npm``` modules which may have been already installed in the DietPi automatic installation process.

```sh
npm install -g --verbose tldr 
```
^ Here's a fun one. ```tldr``` is like a more user-friendly version of ```man```, which makes it even easier to get help with certain commands. Note the ```-g``` flag and the ```--verbose``` option. Using ```--verbose``` is optional, but it's a good example of what a verbose option does. (Many commands have verbose options, which can give you a **lot** more information about what the command is doing, though more often than not it's **too** much information...) After it finishes installing, try ```tldr apt```.

```sh
curl -sSL https://git.io/g-install | bash
```
^ Guess what? It's another version manager! This time it's ```g```, a Golang version manager (Golang is a cool, peppy programming language originally developed by software engineers at Google, and there are some really awesome programs written in Golang or Go for short, like Gogs - the Go Git Service). Remember to take a look at the script in your web browser before installing it instead of just assuming it's safe. Having Golang installed allows you to write and run some awesome programs, and to install ```go``` after installing ```g``` just do the following two commands:

```sh
source ~/.profile
g install latest
```
^ Typing in these commands, one after the other (and pressing ENTER after each) will get ```g``` to install the latest-available version of the Golang package. If you're thinking that this process is similar to what you did with ```n```, you're right. The main developer of ```g``` was inspired by ```n``` to create an easy-to-use Golang version manager.

```sh
cd /home/dietpi/software
wget https://downloads.arduino.cc/arduino-cli/arduino-cli-latest-linuxarm.tar.bz2
```
^ This command downloads the latest version of the Arduino CLI (Command-Line Interface) for ARM versions of Linux as a .tar.bz2 file. You can use the Arduino CLI to upload code to your Arduino Nano. 

```sh
tar -xvf arduino-cli-latest-linuxarm.tar.bz2
rm arduino-cli-latest-linuxarm.tar.bz2
```
^ Using the ```tar``` command, which comes pre-installed on many Unix/Linux systems, allows you to manipulate archive files in the .tar format. This particular file that you downloaded from arduino.cc is **compressed** with a BZip v2 compression algorithm. Much like a .7z, .zip, or .rar file, a tar.bz2 file is an archive that has its contents compressed to make them take up less space. Collectively, ```.tar, .tar.bz2, .tar.gz, and .tar.xz files``` are referred to as **"tarballs"**. There are several different ways to use ```tar``` (see ```man tar``` or ```tldr tar``` for more info), but in this particular instance you can use the ```-xvf``` flags (note how I said flag*s*; you can often add flags together) to **extract** the contents of the .tar.bz2 archive.

The next command removes the archive file you downloaded, leaving only the extracted file. 

```sh
ls
```
^ Use this command to list all the files in the current directory, in this case ```/home/dietpi/software```. You should see ```micro``` as well as another file, which likely looks something like ```arduino-cli-0.x.x-alpha.preview-linuxarm``` though your mileage may vary. Use the following command (substituting in the actual name of your file) to change its name to arduino-cli:

```sh
mv file-name-here arduino-cli
```
^ The ```mv``` or move command can be used to move a file/folder from one place to another, though you can also use it to rename files/folders.

```sh
arduino-cli core update-index
```
^ Since you've updated the ```~/.profile``` and ```~/.bashrc``` files, any programs in the ```/home/dietpi/software``` directory can automatically be used as commands. Pretty cool, huh? (Please use this new-found power only for good.)

This command gets the ```arduino-cli``` to update its list of cores, which are a bit like Makefiles for different Arduino and Arduino-compatible microcontroller boards. Having a core for a board allows you to write code that can be compiled for its microntroller, and uploaded onto it.

```sh
arduino-cli core install arduino:avr
```
^ This command installs the ```arduino:avr``` core, which includes support for many of the most-common Arduino boards, like the Uno, Leonardo, and Nano to name a few.

```sh
arduino-cli lib install "Servo"
```
^ Now you're installing the ```Servo``` library with this command. Libraries in programming are basically pre-written code that you can use to write your own code faster and easier. This library is meant for controlling little servo motors. Even though CodeRcar doesn't have official support for a servo (yet), you still need to install this library as it is a dependency of PingFirmata, which you'll be installing shortly.

```sh
arduino-cli lib install Firmata
```
^ The Firmata library allows an Arduino to interface with a connected computer using the Firmata protocol, which is basically a nice go-between that allows you to program an Arduino in a lot of different programming languages.

```sh
arduino-cli sketch new PingFirmata
rm /home/dietpi/Arduino/PingFirmata/PingFirmata.ino
```
^ The Arduino CLI stores different programs you write for Arduino boards in folders with special file/folder combinations called sketches. The first command makes a new blank sketch, called PingFirmata. The second gets rid of the **boilerplate** file in the new sketch's directory, which will be replaced with the next command.

```sh
curl -sSL https://raw.githubusercontent.com/BotInABoxER/codercar-utils/master/ping-firmata.ino | micro /home/dietpi/Arduino/PingFirmata/PingFirmata.ino
```
^ This command downloads a PingFirmata sketch from GitHub, and then it pipes it into micro, which opens it as a file called ```/home/dietpi/Arduino/PingFirmata/PingFirmata.ino```, replacing the basically-blank file you just deleted. You should take a look at what this Arduino sketch does, but it's totally OK if you don't really understand all of it. This is a modified version of the StandardFirmata sketch, which allows Arduinos to communicate using the Firmata protocol (but it's modified so you can use things like Ultrasonic Sensors, which send out high-pitches pings - hence the name of the sketch - and receive their echos. From this, Ultrasonic Sensors can be used to calculate how far away from the sensor an object is. This will come in handy later.).

Save the file with CTRL+S, then quit with CTRL+Q

```sh
arduino-cli compile --fqbn arduino:avr:nano:cpu=atmega328old /home/dietpi/Arduino/PingFirmata
```
^ Now, compile the PingFirmata sketch for an Arduino Nano (if you're using an official Arduino Nano board - which will probably be a shade of teal instead of blue - you should use ```arduino-cli compile --fqbn arduino:avr:nano:cpu=atmega32 Arduino/PingFirmata``` instead).

The ```fqbn``` option stands for "Fully-Qualified Board Name," and it's a way of telling the Arduino CLI which board type and microcontroller you want to target. Unofficial/clone Arduino Nanos you're likely to find on eBay/Amazon use a different chip to allow the board's Atmel Mega 328 microcontroller to communicate with a computer, and the Arduino CLI therefore recognizes it as being different, so you have to use the above command with ```cpu=atmega328old``` to signify that the microcontroller the board uses is using the older Arduino bootloader... You really didn't have to know this but I'm just trying to be thorough and complete.

Anyway... plug your Arduino Nano into your Raspberry Pi Zero W's USB port (you will likely have to connect a Micro USB OTG Hub to the Pi's Micro USB Dataport - the one closer to the middle of the board - not the one you use to power the Pi - and connect a Mini USB Cable to the Hub from the Arduino Nano). Wait a few seconds, then execute the following terminal command:

```sh
dmesg | grep tty
```
^ ```dmesg``` is a handy tool for printing Linux kernel messages. You don't need to know exactly how it works to understand its function - in essence, it allows you to see what your computer is up to behind-the-scenes. Piping the output of this command (which often gives you a wall of text - try just ```dmesg``` to see it) through ```grep``` (which is another handy tool that basically allows you to search and parse text) and using ```tty``` (as in AlacriTTY - it's short for teletype) as the search term gives you a list of currently-connected serial devices.

Among them should be a ch348 on ```/dev/USB0, /dev/USB1``` or something like that. That's the serial port of the Arduino Nano. If you don't see it right away, try unplugging the Nano, waiting a few seconds, plugging it back in, running the above command again, and noticing the change in its output. Remember the Nano's serialport for the next command.

```sh
arduino-cli upload -p /dev/ttyUSBx --fqbn arduino:avr:nano:cpu=atmega328old /home/dietpi/Arduino/PingFirmata
```
^ Obviously replace the ```/dev/ttyUSBx``` with your Nano's serial port, like ```/dev/ttyUSB0``` for example. This command will upload the PingFirmata sketch onto the board. If it works, you're ready to continue.

```sh
cd ..
mkdir libraries
cd libraries
git clone https://github.com/adafruit/Adafruit_Nokia_LCD adafruit-nokia5110
```
^ The first command changes your working directory to the one **above** ```/home/dietpi/software``` in the folder hierarchy. That would be ```/home/dietpi``` in this particular scenario. The second creates a folder called libraries in ```/home/dietpi```. THe third changes your working directory to that newly-created folder. Next, use git to clone (make a copy of) the Adafruit Nokia 5110/3310 LCD Library, written in Python 3. The third **argument** of the git command (adafruit-nokia5110) tells ```git``` to store the copy of the Library that it downloaded from GitHub.com in a folder called ```adafruit-nokia5110```.

```sh
cd adafruit-nokia5110
```
^ Once ```git``` has done its thing, enter the directory it just created.

```sh
sudo python3 setup.py install
```
^ Note the ```sudo``` again. This command uses Python 3 to run the ```setup.py``` file, and uses the ```install``` directive to install the Adafruit Nokia LCD Library onto your system, so you can use it.

```sh
python3 -m pip install --user SPI
```
^ The Python 3 SPI library (remember enabling SPI earlier?) is also necessary if you want to connect and program a Nokia 5110 LCD.

```sh
python3 -m pip install --user paho-mqtt
```
^ The Python 3 Eclipse Paho library allows you to write Python 3 programs that interface with an MQTT broker. This will come in handy later.

```sh
npm install mqtt -g
```
^ Installing MQTT.js is basically the same thing as installing Eclipse Paho, but for Node.js. It allows you to write JavaScript code that interfaces with an MQTT broker.

```sh
cd ..
git clone git://github.com/rwaldron/johnny-five.git && cd johnny-five
npm install
```
^ Now use ```cd``` to navigate back to ```/home/dietpi/software```, and use ```git``` to download the Johnny-Five.js library, which is all about using JavaScript to program robots and electronic components. Notice that you can perform multiple commands, one after the other, in one line of command, using the ```&&``` (double-ampersand or concatenation operator - hold down a shift key on your keyboard, then tap the 7 key twice, then let go of the shift key to type this operator). 

Once you are inside the new johnny-five folder, use ```npm``` to locally install all the dependencies of Johnny-Five.js (```npm``` looks at the ```package.json``` file and tries to download and install all the Node packages listed on it). This could take a while, but it should eventually finish, giving you a command prompt again.

```sh
sudo usermod -a -G dialout dietpi && sudo usermod -a -G dialout nodered
```
^ These commands are helpful for adding the ```nodered``` and ```dietpi``` users to the ```dialout``` group, which means they can use the Pi's serial ports without having to ask for root permission. Doing something like this on any system for no reason is not really a good idea - but in this case it's OK because you may run into some issues while using your Arduino Nano if you don't do this. 

```sh
npm install -g yarn
```
^ ```yarn``` is an alternative package manager for NodeJS. It's very powerful, and some people like it better than ```npm``` because it is often faster, but it *is* slightly different. It's a good idea to install it, though, since there are some NodeJS applications that need ```yarn``` to operate, and it is useful.

```sh
yarn global add wetty.js
```
^ Optional: Using this command, you can use ```yarn``` to install ```wetty.js``` (WeTTY is a web-based terminal - if you for some reason want to use a web browser like Chromium or Firefox to connect to your Pi instead of a terminal emulator like AlacriTTY, iTerm, or Powershell, you may want to install it).

```sh
wetty -p 3333
```
^ If you installed WeTTY, you can use the above command to start an instance of WeTTY on port 3333. Navigate in your web browser to http://ip-of-your-pi:3333/wetty to see the terminal, which will prompt you for a username and password. (Note that you may have to dismiss security warnings in your browser and you also need to change ```ip-of-your-pi``` to your Pi's actual private IP address, which might be something like ```192.168.0.155``` or whatever it happens to be for you). 

Caveat: I haven't yet figured out how to use HTTPS with the new version of WeTTY, so it isn't really secure. Defintely it isn't something I would suggest using on a Public WiFi network, since people could easily intercept the communicates between you and your Pi, and that is a security risk. Obviously all of this is do-at-your-own-risk territory, but I thought I'd give a fair warning regardless. One of these days I'll make this better... One of these days... (Though, if you do happen to know how to do this, please let me know.)

```sh
gem install bundler
```
^ Now, install ```bundler``` with ```gem```, which is yet another package manager, this time for Ruby. (It's worth noting that ```rvm``` is a version manager, not a package manager, though you can install some Ruby packages with it, like the popular ```Rails``` web framework.)

Bundler is a very useful program that reads a Ruby package's Gemfile, makes a list of the Ruby packages it needs to install, and installs them. It's a lot like ```npm``` or ```yarn``` in that regard.

```sh
gem install jekyll
```
^ Jekyll is a powerful static website generator that you can use to make websites using HTML, CSS/SCSS, JavaScript, and Liquid.

Install dashboard and in node-red
