---
layout: default
title: Initial Setup (Windows)
nav_order: 1
parent: Programming
---

{% include video.html source="youtube" id="SYrTjBIvC5s" %}

## TLDR:

- Download DietPi for Raspberry Pi

- Download and install:
- Alacritty (extract portable on Windows and put in folder or download the .msi installer)
- 7-Zip 
- balenaEtcher
- Win32 Disk Imager (for Pi backups)
- Notepad++
- Angry IP Scanner
- Java (for Angry IP Scanner)
- QuickHash GUI
- SD Card Formatter

- Insert microSD card, backup if necessary, format (deleting all data on the card)

- Extract the DietPi .img from the .7z file, verify it with QuickHash, and flash it to the microSD card with balenaEtcher

- After balenaEtcher unmounts it, reconnect card and edit dietpi.txt (enable WiFi and Ethernet); edit dietpi-wifi.txt (add WiFi SSID/password); unmount card

- Connect card to Pi, power Pi on, wait a minute or so
- Scan your network with Angry IP Scanner to find your Pi's IP address (all but if you know the subnet than just the subnet)

- Open Alacritty, ssh root@pi-ip-address
- Change the default root password and DietPi system password
- Select your language and time-zone in DietPi-Config
- Install Docker, RPi.GPIO, WiringPi, I2C, Node-RED, Gogs, and ProFTP, from DietPi-Software; select custom.sh for auto-boot
- Wait about an hour
- Press OK near the end for the ProFTP popup and the reboot confirmation

## Full Instructions

Step 0: Determine your OS's architecture
- Press the Windows logo button on your keyboard.
- Type "System Information" into the searchbar.
- Click on the System Information program.
- Look for the "System Type" item and make a note of the value.
- You can close the window, but make sure you remember whether your system is 64-bit (x64 - most likely these days) or 32-bit (x32/x86 - mostly for older computers).

### Step 1: Download AlacriTTY terminal from GitHub
- You'll need a terminal program to connect to your Raspberry Pi Zero W. AlacriTTY is a good choice in my opinion, since it is super-fast, simple, and easy to install.
- If you want to download AlacriTTY, go to [https://github.com/jwilm/alacritty/releases](https://github.com/jwilm/alacritty/releases), and download the latest version for your system (for Windows, I recommend the "windows-portable.zip").
- Right-click the Link to the version you want to download, and click on "Save Link As" in the pop-up context menu; save it somewhere (like in your Downloads folder).

### Step 2: Download DietPi
- DietPi is a lightweight operating system; you can download the Raspbian-based version for your Pi Zero W.
- Go to [https://www.dietpi.com](https://www.dietpi.com). Scroll down to the "Downloads" section of the DietPi website, click on the picture of a Raspberry Pi, then click on the "Download" link.

### Step 3: Download 7-Zip
- 7Zip is a tried-and-true, open-source archive utility. You don't technically need it (since most modern operating systems have basic archive utilities built-in, but I like 7-Zip because it's simple to use, yet powerful).
- If you want to download 7-Zip, go to [https://www.7-zip.org](https://www.7-zip.org) and select a download option for your OS (make sure you get the right version - like 32/64 bit depending on the results of step 0).

### Step 4: Download Notepad++
- If you're on Windows 10, you'll probably realize that Notepad is really not that great. Wordpad, its older sibling, is better (as in more functional), but you really can't beat the power of Notepad++. 
- If you want to download a decent, super-light code editor for windows, Notepad++ is your program. Download version 7.7 at [https://notepad-plus-plus.org/download/v/7.7.html](https://notepad-plus-plus.org/download/v/7.7.html). The "Installer" package for your system is a good choice, in my opinion.

### Step 5: Download Java
- For Angry IP Scanner, which you'll be installing later, support for the Java programming language is necessary. You can download a copy of Java at [https://www.java.com/en/download](https://www.java.com/en/download).
- Click on the "Download Java" button, read the license, and click "Agree and Start Free Download" if you accept it. (You may already have it installed on your system.)

### Step 6: Download Angry IP Scanner
- Go to [https://angryip.org/download/#windows](https://angryip.org/download/#windows) and download the "32/64-bit Installer."
- Angry IP Scanner is how you can find your Raspberry Pi's IP address once it connects to your WiFi network, and it is generally a helpful diagnostics tool.

### Step 7: Download Win32 Disk Imager (Optional)
- If you already have a Raspberry Pi image or something like that installed on your microSD card, and you don't want to completely delete it, a tool like Win32 Disk Imager can come in handy. You can download it from SourceForge at [https://sourceforge.net/projects/win32diskimager](https://sourceforge.net/projects/win32diskimager).
- Win32 Disk Imager makes an image file (like a .img) of the contents of microSD cards, SD cards, and USB Flash drives. 
- If you don't have an operating system installed on your microSD Card, but you do have pictures/other files, you can just copy/move them over to your computer's hard drive/SSD using Windows Explorer (though if you ever plan on backing up a Raspberry Pi microSD card in the future - since it takes a long time to install an operating system and backing it up saves you time so you can re-image your card in the future with a backed-up OS installation.)
- It is not a bad idea to use a tool like Win32 Disk Imager to back up your microSD Card once you've finished setting up your Raspberry Pi Zero W for builing a CodeRcar (so you don't have to repeat the entire process in the future should something go wrong that messes up your operating system or files), so even if your card is blank to begin with, this is a handy tool.

### Step 8: Download balenaEtcher
- balenaEtcher, much like Win32 Disk Imager, is a tool for dealing with removable devices like microSD cards that have operating systems on them. Etcher, however, focuses on flashing images (I am well aware that Win32 Disk Imager can flash images as well, I just think Etcher has a bit of an easier interface and I also like it, so there.)
- You can download a copy at [https://www.balena.io/etcher](https://www.balena.io/etcher).

### Step 9: Install 7-Zip
- Go to your Downloads folder, double-click on the 7z####-xXX.exe file (it'll look something like 7z1900-x64.exe).
- If it asks for administrator priveleges, give them to it by clicking Yes (if for some reason you can't give the installer administrator priveleges, there is a portable version you can find online that doesn't need them to install).
- Click on the "Install" button, and 7-Zip should install itself.
- Click "Close" to exit the installer (in the video 7-Zip was already installed on my system, so the installation was quick).
- **(Note that after an "Install" step you may need to reboot your computer for the program to be fully-installed.)**

### Step 10: Open the downloaded AlacriTTY .zip File in 7-Zip
- If you installed AlacriTTY's Windows Portable version, you can use 7-Zip to **extract** it.
- Right-click on the .zip file in your Downloads folder, click on the "7-Zip" entry in the context menu that pops up, then click on "Open archive".
- A 7-Zip File Manager window should load, and you should see two files inside it.

### Step 11: Extract AlacriTTY to a new folder
- Create a new folder somewhere where you'll remember (like in your Downloads folder) by right-clicking in the folder, clicking on "New" from the pop-up menu, and clicking on "Folder"; you can name the folder whatever you like, but "AlacriTTY" sounds like as good a choice as any.
- Click and drag the mouse in the 7-Zip File Manager window to select the two AlacriTTY files, then drag them to the folder where you want them to be, and let go of the left mouse button when your mouse cursor is over the folder's icon.
- You can close the 7-Zip File Manager window now.

### Step 12: Extract the DietPi .img File
- Go to your Downloads folder, right-click on the "DietPi_RPi-ARMv6-Stretch.7z" file, or whatever it's called, click on "7-Zip" and then "Open Archive" from the pop-up menu, click on and drag the .img file from the 7-Zip File Manager window into your Downloads folder, and let it go.
- After a minute or so, the pop-up window displaying a progress bar for the extraction process should disappear, and the .img file should be in your Downloads folder.

### Step 13: Download QuickHash GUI
- QuickHash GUI is a helpful program for computing hashes. You can use it to verify that the DietPi image you downloaded is exactly how it should be. (If you don't verify the image, your download might not have worked, and you might end up trying to use a broken image, only to experience unexplainable problems.)
- QuickHash GUI can be downloaded from [https://quickhash-gui.org](https://quickhash-gui.org) from the "Downloads" tab. Click the version that applies to your operating system (like the Windows version), and scroll down on the Download page to the "Download" button. Click that button to downlaod QuickHash GUI (Yes, I typed "download" a lot in that last sentence. Forgive me...)
- If your browser gives you a chance (like if you're on a version of Mozilla Firefox) you might be able to open the file automatically when it is downloaded (open it with 7zFM.exe file in your Programs Files/7-Zip directory).

### Step 14: Extract QuickHash GUI
- Open the QuickHash GUI .zip file in 7-Zip, go to the folder for your system architecture, and click and drag the files within it - except for the "UserManual.pdf," unless you need to refer to it - to a new folder (like Downloads/QuickHash GUI, though it could be called whatever you want).
- Close 7-Zip's File Manager.

### Step 15: Verify your DietPi .img file using QuickHash GUI
- Open the QuickHash-WIndows-vx.x.x-xXX.exe file (mine was QuickHash-Windows-v3.0.4-x64.exe) by double-clicking it.
- Open the DietPi .7z file from your Downloads folder with 7-Zip's File Manager.
- Click on the "File" tab in QuickHash.
- Double-click on the "hash.txt" file in the DietPi .7z file open in 7-Zip. It should extract and open in Notepad.
- Copy the SHA-512 value in the opened file by clicking on the first character of it, dragging your mouse across the entire string, and letting go of the mouse button at the end of the line, then press CTRL + C or click on the "Edit" menu in Notepad, then click on "Copy" (or right-click on the hash, then click on "Copy").
- Back in QuickHash, click the radio button for the "SHA512" Algorithm.
- Paste the SHA-512 hash from the "hash.txt" file into the "Expected Hash Value" box (with CTRL + V after left-clicking the box, or by left-clicking on the box, then right-clicking on it, then selecting "Paste" from the pop-up context menu). Make sure you get rid of the "..."; you can do this by pressing the "Clear Hash Field" button before pasting your hash, or by double-clicking on the "Expected Hash Value" box to select the "..." before pasting your hash into the box.
^ This makes more sense if you watch the video, starting around 4:20.
- Click on the "Select File" button, navigate to your Downloads folder in the pop-up window, select your DietPi .img file (not the .7z archive; the file you extracted from it), and click "Open" on the bottom of the pop-up window.
- You should get a box that says "Expected has MATCHES the computed file hash!" If you don't try the process again (maybe a couple times, making sure you're doing it correctly). If it keeps failing, you may have to re-download the DietPi .7z file from DietPi's website, re-extract the .img file, and try the verification process again.
- If everything worked, close the 7-Zip File Manager window and the QuickHash window. It is now safe to delete the DietPi.7z file (not the .img, though; you still need that.)

### Step 16: Install Win32 Disk Imager (optional)
- If you want to backup your current microSD Card's operating system, you can do that with Win32 Disk Imager.
- You can install it by double-clicking on the installer file you downloaded from SourceForge, which should be in your Downloads folder, and going through the installation process.
- Remember to read through the license agreement, to understand what you're getting into. You need to accept the agreement to install the software, but that doesn't mean you should just blindly accept it.

### Step 17: Backup your microSD Card (optional)
- You can use Win32 Disk Imager to back up your microSD card. 
- Insert your microSD Card into your computer (either directly, or by using a microSD card reader or an SD card adapter), and dismiss the messages that Windows pops up when it sees your card, if there are any.
- Click on the little file-folder icon in Win32 Disk Imager, select a place to put your backup file, name it something, click OK, and make sure you select your microSD card from the "Device" list. Next, click on the "Read" button.
- Reading might take 10-25 minutes or more, depending on the size/speed of your card and the speed of your computer. You should get a "Read Successful" message at the end of the read process, which you can click "OK" on, and close Win32 Disk Imager.

### Step 18: Install Notepad++
- Open the Notepad++ installer from your Downloads folder, agree to the license (after reading through it, and keep clicking "Next" then "Install"). Unselect the "Run Notepad++"
box when installation is finished, and click "Finish".

### Step 19: Download the SD Association's SD Card Formatter Tool
- This tool will make sure your microSD card is ready to flash DietPi onto it.
- **Note that formatting your card will effectively delete all the data stored on it, so please make a backup before formatting if you or anyone else values the information stored on the card.**
- Download the Formatter tool by navigating to [https://www.sdcard.org/jp/home/](https://www.sdcard.org/jp/home/), hovering your mouse over the the "Downloads" button, then hover over the "SD Card Formatter 4.0" button that pops up, then clicking the "SD Formatter 4.0 for Windows Download" button that pops up.
- Scroll down to the bottom of the Download page, making sure you read, understand, and accept the tool's license. Click "Agree" if so, to download the tool. 

### Step 20: Install the SD Association's SD Card Formatter Tool
- Open the downloaded file with 7-Zip's File Manager, go into the folder inside the .zip file, then click on it and drag the file it to your Downloads folder to extract it.
- Close the 7-Zip File Manager.
- Double-click on the extracted file, and follow the prompts to install the tool. Click the "Finish" button when it pops up.

### Step 21: Format your microSD Card
- **Again, make sure there are no non-backup-ed files on the card before formatting the card, which will erase it.**
- Open the SD Card Formatter Tool by typing the Windows logo key on your keyboard, then typing "SD Card Formatter" into the searchbar. Click on the tool's icon when it pops up.
- Make sure the "Select Card" box points to the letter of the microSD card you want to format.
- Now, click on the "Format" button at the bottom of the window. Accept the warning at your own risk.
- After a successful format, a new window of Windows Explorer should open, containing the empty contents of your card. Close that window, and click "OK" on the formatter tool's window. Next, close the tool's window.

### Step 22: Install balenaEtcher
- Double-click on balenaEtcher's installer file in your Downloads folder. 
- Read through the license, and click "I Agree" if you do.
- Wait for balenaEtcher to install.

### Step 23: Flash your microSD Card with DietPi
- Open balenaEtcher (from the Start Menu).
- Click on the "Select" button in the middle, make sure there is a checkmark next to your microSD card's drive letter and type, **(and not something like one of your Hard Drives/USB Flash Drives/floppy disk drives)** then click "Continue". 
- Click the "Select Image" button, navigate to your Downloads folder, select the DietPi .img file, and click "Open".
- Finally, click on the "Flash!" button and sit back for a couple minutes while balenaEtcher does its thing.
- When the flash process is complete, you might get a random window pop-up saying that a drive is no longer accessible. Just click "OK" to close it, and close the balenaEtcher window. Also, click "Cancel" if Windows asks you to format any disks. Generally, it's not a great idea to just format whatever Windows tells you to format; just saying...


### Step 24: Enable WiFi on your Pi
- Since balenaEtcher auto-unmounted your microSD Card, physically disconnect it from your computer, wait a couple seconds, then plug it back in. Windows should recognize it in a few more seconds (again, click "Cancel" if you see any windows asking you to format anything, and click "OK" on any windows telling you that a disk is no longer accessible).
- If Windows doesn't do it for you, double-click on the "boot" drive on the right-hand bar of a Windows Explorer window to open up your microSD card's files.
- Open the "dietpi.txt" file inside your microSD card in Notepad++, by right-clicking on it, then selecting "Edit in Notepad++" from the context menu. (If the option isn't there, you may need to restart your computer first.)
- Once Notepad++ opens your file, change the ```AUTO_SETUP_NET_WIFI_ENABLED=0``` line (line 18) to say ```AUTO_SETUP_NET_WIFI_ENABLED=1``` (you can click on the right of the 0 that's there, press backspace on your keyboard, then type 1 to change the line correctly.)
- Save the file with CTRL + S, or by clicking on the "File" menu at the top of the Notepad++ window, then pressing "Save". (Not "Save As..."; that's different.)
- Close the window after saving, then open up the "dietpi-wifi.txt" file in your microSD card with Notepad++ the same way.
- Change the line that says ```aWIFI_SSID[0]=''``` (line 4) to include your WiFi network's SSID (its name), and change the line that says ```aWIFI_KEY[0]=''``` (line 6) to include your WiFi network's password, if you have one. (assuming its a WPA-PSK network, which it most likely is these days.)
- When you're done with your changes, your "dietpi-wifi.txt" file should have lines 4 and 6 that look something like this, respectively (obviously substitute your actual WiFi SSID and password in the place of the placeholders):
```sh
aWIFI_SSID[0]='My-network-name'
```
```sh
aWIFI_KEY[0]=`pA5Sw{}|R-|)'
```
- Save the changes you made to the file with CTRL + S, or by clicking on the "File >> Save" menu option on Notepad++'s top menubar, and quit Notepad++.

### Step 25: Unmount your microSD Card
- Just like balenaEtcher automatically did, you now need to unmount your microSD card before you take it out of your computer, just to ensure that no files are being used on it. Right-click on the "boot" drive icon on the right-hand bar of a Windows Explorer window, and click on "Eject" from the context menu.
- Windows should give you a "Safe to Remove Hardware" message, which you can dismiss.
- Now, it's safe to unplug your microSD card from your computer.
- Next, pop your microSD card into your Raspberry Pi Zero W (writing side up), and plug your Raspberry Pi Zero W into a dependable power outlet with a Micro USB to AC power converter (use the "Power" Micro USB port that is closer to the edge of the computer, not the one near the middle), and make sure it's in a location where it can access your WiFi network (the one you configured it to connect).

### Step 26: Find that Pi!
- Open Angry IP Scanner, after installing it (make sure you also have a version of Java installed; if you can type "java" into the Start Menu's searchbar and the "java" executable pops up, you probably have it installed already, though it may be in need of an update...)
- Wait at least 2 minutes after giving your Pi power for the first time to look for it on your network.
- When Angry IP Scanner opens, click on the left-most "IP Range" box and enter ```192.168.0.0```. Make sure the box to its right says ```192.168.10.255```, then click "Start". (Alternatively, you could just scan your subnet, if already know what it is.)
- You can alternatively use the Port Authority app on an Android device to scan your network in search of your Pi (you can download it from the [F-Droid](https://f-droid.org/en/) app).
- Click "Close" when the "Scanning completed" box pops up, then click on the "Hostname" button, then click "Sort by Hostname." 
- Your Pi might have a hostname of "dietpi.lan", but it also may not have any hostname. However, if it appears at all, it will have a blue circle next to its IP address, and a "Ping" value (likely in the 100's of milliseconds). If you can't find it, try scanning again. 
- Make sure to record the IP address of your Pi (an app like Port Authority may be able to help you confirm it) for the next steps.

### Step 27: SSH into your Pi
- Open AlacriTTY by double-clicking on its icon (remember where you installed it?) - you might be able to find it using the Start Menu's searchbar, but your mileage may vary. 
- Once AlacriTTY opens and you have a blinking cursor, it's time to initiate an SSH (Secure SHell) connection with your Raspberry Pi.
- You should be able to login using the following command (press Enter after typing it all in; replace the placeholder address with your Pi's actual address from step 23): ```ssh root@192.168.10.96```
- Type ```yes``` then press Enter to continue connecting (Your computer hasn't seen the Pi before, so while would it remember it?)
- When the password field appears, type ```dietpi``` then press Enter (that's the default login password; you should definitely change that later...)
- If you did that correctly, you should be met with a big window inside your terminal window that talks about the GPLv2 License. It's worth looking into what exactly that means (Win32 Disk Imager is licensed under a version of GPLv2). 
- Press the Down Arrow button on your keyboard to select the "OK" button, then press Enter when the button is orange.
- About five minutes of automated installing/checking/configuring should pass.

- When another window pops up, you can decide to Opt-in or Opt-out of ```dietpi-survey```, a tool used by the developers of DietPi to connect anonymous, technical information about how you use DietPi, so they can better plan for future features/updates. Use the Up and Down Arrow keys to navigate, and press Enter on your selection.
- Press Enter again, when the window pops up saying 
``` DietPi has been updated to the latest version. The system will now reboot. Once completed, simply login to resume DietPi Setup.```
- Exit that AlacriTTY window a couple seconds after pressing Enter, and open a new AlacriTTY window. You can use the Up Arrow on your keyboard to automatically type the last command you entered (not the last SSH command, though), then press Enter to connect to your Pi again.
- Again, use the ```dietpi``` password to login, pressing Enter after typing it in.
- You now have a chance to change the global password for DietPi-Software and new Unix users. You really should change it to something you'll remember. Press Enter on the OK button, then type in your password, then press Enter again, then type in the same password again, then press Enter again. (Note that this password is the one that DietPi itself uses for things that need automatic authentication, and this is different from the password you will use to login using the ```dietpi``` account.)
- Now, you'll be presented with another, similar box. Repeat the above sub-step but with a different password (the one you'll be using all the time to login).
- You can safely disable the serial console (unless you plan on using it) by pressing the Right Arrow key on your keyboard, then pressing Enter on the pop-up prompt.

### Step 28: Configure DietPi
- You'll be met with a window with a lot of options. Use the Arrow keys on your keyboard to navigate, and select the thing you want to select (the option in the orange box) by pressing Enter. If you can't move one way in the menus with the Up and Down keys, try the Right and Left keys.
- Navigate to ```DietPi-Config``` and select it by pressing Enter.
- Go to 5 - Language/Regional Settings and press Enter.
- Press Enter to select the "Locale" setting (unless you live in Great Britain, in which case you can skip this and the next step).
- Find your locale by searching for ```la_CC```, where ```la``` is the first two letter of your language's identifier code, and ```CC``` is the first two letters of your country code. Mine is ```en_CA.UTF-8``` (the .UTF-8 means I'm using Unicode, which is an awesome text-code system that can store pretty much every character/symbol from every known human language, and then some) - you can find it quickly by typing in the first letter of your language's name, then scrolling up/down with the Up and Down Arrow keys on your keyboard until you find the locale you think is yours, and press Enter to selet it (You may have to look online for more info, but it should be fairly obvious if you know what you're trying to find.)
- It will take a minute or so for DietPi to reconfigure itself, and then you should be back at the Language/Regional options menu. Go to the ```Timezone:``` option and press Enter. (Londoners can skip this - but not if they live in France, Kiribati, Chile, Ontario, Arkansas, California, Indiana, Kentucky, Minnesota, Ohio, Texas, West Virginia, Wisconsin, or Serbia! :] ) 
- Select your Continent/region first (you can search by typing the first letter of it) and press Enter.
- Next, select the nearest big city/region to your location and press Enter when you've found it. (again, typing the first letter can get you closer; to be fair, a lot of the "cities" on the list are actually pretty small, just really specific...)
- Exit the Regional/Language Dialog by typing the Right Arrow key, navigating to the "OK" button, and pressing Enter.
- Exit ```DietPi-Config``` by doing the same thing as above, except for the "Exit" button. Then press Enter on the "OK" button in the box that appears.
- Navigate to the ```File Server``` box, and select it with the Enter key.

### Step 29: Install Some Software
- Select the "ProFTP" file server by tapping the Down Arrow key, then exit the dialog box by pressing the Left or Right Arrow. Navigate to the "OK" button, and press it with the Enter key.
- Press Enter again to confirm your choice, then navigate up to the ```Software Optimised``` box, selecting it with the Enter key.
- Following the instructions on the window for navigation/selection, install the following pieces of software:

- Gogs, Docker, RPi.GPIO, I2C, Node-RED, and Mosquitto

(Though, feel free to browse the list. Fair warning: installing too many things can negatively impact performance, and some programs require a bit of additional setup to get them to work properly. You can look at the list on [https://dietpi.com/phpbb/viewtopic.php?t=5](https://dietpi.com/phpbb/viewtopic.php?t=5) for comprehensive installation procedures for all the software packages on the list.)

- Press the Spacebar when your cursor is on in the box corresponding to the software package you want to install. Pressing it again on the same box will de-select it. You can navigate with the Up and Down Arrow keys, and pressing the Left Arrow key, then pressing Enter on the "OK" button will get you out of the dialog, saving your choices.
- Select "OK" again with Enter on the window that pops up asking if you're OK with installing ```Gogs```, because that will change your Pi's installed SSH server (the program that is helping you connect to the Pi using AlacriTTY) to OpenSSH, as opposed to Dropbear, which comes pre-installed.
- Select the "OK" button on the next window to configure auto-boot options.
- Scroll down to the very bottom of the list, and select the ```custom.sh``` option by pressing Enter.
- Go to the "Exit" button by pressing the Right Arrow key on your keyboard, then press Enter. 
- Finally, go down to the bottom of the list in the ```DietPi-Software``` window by repeatedly pressing the Down Arrow key. Press Enter to select the "Install" option, then press the Left Arrow key then Enter again to confirm (after taking a look at the window to make sure it is what you want it to be).
- The window should say something like: 


- ```DietPi is now ready to install your software choices:```
- ```Gogs: personal github server with web interface```
- ```RPi.GPIO: gpio interface library for rpi (python)```
- ```I2C: enables support for i2c based hardware```
- ```DietPi-RAMlog: minimal, optimized logging```
- ```Node-Red: tool for wiring devices, APIs and online services```
- ```Mosquitto: MQTT message broker```
- ```Docker: Build, ship and run distributed applications```

### Step 30: Do Something Else
- For the next 30-60 minutes or so, your Pi will be occupied with setting itself up. You don't need to do anything with it for a while, but make sure that you don't let your computer fall asleep (or the SSH connection will close, and you won't be able to press the two "OK" button at the end, and bad things might happen).
- You should be able to change the sleep settings of your computer (also make sure its plugged-in) so that it doesn't go to sleep (alternatively, you could just keep using it. Minimize the AlacriTTY window by pressing the - button (**not the X; that closes it!**)), and you can do something else while you're waiting. Check up on the Pi every 10-15 minutes, just to see what's going on. 
- At the end of the long wait period, you'll be presented with a window asking you to press Enter. It should say something like:
```[INFO] Updating file; /etc/proftpd/proftpd.conf```.

### Step 31: Press Enter and Celebrate!
- After about another minute, you should be presented with another window, an "Installation Complete" one, this time (maybe take a screen-shot to remember this moment?). Press Enter one last time, and close your AlacriTTY window when your connection to your Pi is closed.
- Your Raspberry Pi Zero W will reboot, and you can get on with the next Setup Tutorial. 

Congratulations on installing DietPi on your Rasberry Pi! You're well on you way to being able to program your very own CodeRcar!