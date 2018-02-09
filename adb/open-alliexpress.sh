#!/bin/bash
adb shell svc power stayon true
echo -e "\e[96mStay on!"
adb shell input swipe 600 700 100 700 500
echo -e "\e[96mSwipe to menu #1!"
adb shell input swipe 600 700 100 700 500
echo -e "\e[96mSwipe to menu #2!"
adb shell input tap 400 195
echo -e "\e[96mTap over alliexpress app link!"
sleep 5
echo -e "\e[96mSleep 5secs!"
adb shell input tap 215 145
echo -e "\e[96mTap to app search box!"
adb shell input text "rubber%sDuck"
echo -e "\e[96mMost relevant search!"
adb shell input tap 160 225
echo -e "\e[96mTap on first search result!"
adb shell input tap 165 435
echo -e "\e[96mTap on product!"
adb shell svc power stayon false
echo -e "\e[96mStay on false!"
echo -e "\e[96mENJOY!"
