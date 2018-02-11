#!/bin/bash
adb shell svc power stayon true
echo -e "\e[96mStay on!"
adb shell input tap 970 630
echo -e "\e[96m#1 Tab on play option of app menú!"
adb shell input tap 980 80
echo -e "\e[96m#2 Power on controls!"
adb shell input tap 600 40
echo -e "\e[96m#2 Change Power mode to 60%!"
adb shell input swipe 250 600 250 320 500
echo -e "\e[96m#3 Motors to 95% of power!"
adb shell input swipe 250 320 250 580 8500
echo -e "\e[96m#3 shutdown!"




