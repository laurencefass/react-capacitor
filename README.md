# react-capacitor sandbox

This is a sandbox spawned using the vscode ionic extension sidemenu template.

It is built using capacitor with android integration

A range of simple pages accessible from a sliding sidebar nav menu

## npm packages

- react (obviously)
- react-leaflet
- leaflet
- redux-toolkit for state management

## capactor plugins:

- camera

## setting up android sdk for linux

### install java17 and set $JAVA_HONE

TBD

### install android SDK

##### Remove any existing cmdline-tools to start fresh

sudo rm -rf /usr/local/android-sdk/cmdline-tools

##### Create the necessary directories

sudo mkdir -p /usr/local/android-sdk/cmdline-tools

##### Download the command line tools

wget https://dl.google.com/android/repository/commandlinetools-linux-8512546_latest.zip -O commandlinetools.zip

##### Extract the tools into the correct directory

sudo unzip commandlinetools.zip -d /usr/local/android-sdk/cmdline-tools

##### Move the extracted files into the 'latest' directory

sudo mkdir -p /usr/local/android-sdk/cmdline-tools/latest
sudo mv /usr/local/android-sdk/cmdline-tools/cmdline-tools/\* /usr/local/android-sdk/cmdline-tools/latest/

##### Clean up

sudo rm -rf /usr/local/android-sdk/cmdline-tools/cmdline-tools
rm commandlinetools.zip

#### set environment variables in bashrc

export JAVA_HOME="/usr/lib/jvm/jdk-17-oracle-x64"
export ANDROID_HOME="/usr/local/android-sdk"
export ANDROID_SDK_ROOT="/usr/local/android-sdk"
export PATH="$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools"

#### apply changes

source ~./bashrc

#####

## creating an apk image

- cd android
- run ./gradlew assembleDebug
- navigate to C:\Capacitor\react-capacitor\android\app\build\outputs\apk\debug\app-debug.apk
- move or copy this file to a public endpoint for download
