# Krishworks Assignment

### A react native android / ios application with custom-built modal component for OTP input with keyboard for login to the system to have Krishworks website shown in a webview component with App bar.

### Download the APK from:  [Github link for APK](https://github.com/balki14101/Krishworks_Assignment/releases/tag/v1.0)

[![GithubFollow @balki14101](https://img.shields.io/github/last-commit/balki14101/Krishworks_Assignment?)](https://github.com/balki14101/)[![GithubFollow @balki14101](https://img.shields.io/github/languages/count/balki14101/Krishworks_Assignment?color=orange)](https://github.com/balki14101/) [![GithubFollow @balki14101](https://img.shields.io/github/languages/top/balki14101/Krishworks_Assignment?color=blueviolet)](https://github.com/balki14101/) [![GithubFollow @balki14101](https://img.shields.io/github/languages/code-size/balki14101/Krishworks_Assignment?color=pink)](https://github.com/balki14101/) [![GithubFollow @balki14101](https://img.shields.io/github/repo-size/balki14101/Krishworks_Assignment)](https://github.com/balki14101/) [![GithubFollow @balki14101](https://img.shields.io/github/commit-activity/m/balki14101/Krishworks_Assignment?color=%23DB62B2%20)](https://github.com/balki14101/)

## Screenshots

<img src="https://raw.githubusercontent.com/balki14101/Krishworks_Assignment/dev/src/assets/screenshots/1.jpg" width="600" height="250"/>
<img src="https://raw.githubusercontent.com/balki14101/Krishworks_Assignment/dev/src/assets/screenshots/2.jpg" width="600" height="250"/> 
<img src="https://raw.githubusercontent.com/balki14101/Krishworks_Assignment/dev/src/assets/screenshots/3.jpg" width="600" height="250"/> 
<img src="https://raw.githubusercontent.com/balki14101/Krishworks_Assignment/dev/src/assets/screenshots/4.jpg" width="600" height="250"/> 
<img src="https://raw.githubusercontent.com/balki14101/Krishworks_Assignment/dev/src/assets/screenshots/5.jpg" width="600" height="250"/> 
<img src="https://raw.githubusercontent.com/balki14101/Krishworks_Assignment/dev/src/assets/screenshots/6.jpg" width="600" height="250"/> 
<img src="https://raw.githubusercontent.com/balki14101/Krishworks_Assignment/dev/src/assets/screenshots/7.jpg" width="600" height="250"/> 
<img src="https://raw.githubusercontent.com/balki14101/Krishworks_Assignment/dev/src/assets/screenshots/8.jpg" width="600" height="250"/> 

## Features

- Custom built Keyboard and OTP input screen is implemented to login to the app.

## Technology

- React Native : For Cross platform mobile app development
- Node JS: For runtime environment
- Javascript : For application development
- VS code : Code editor IDE
- Linting: eslint

## Installation

This App requires [Node.js](https://nodejs.org/) v10+ to run.

##### Download the repo and install dependencies

```sh
git@github.com:balki14101/Krishworks_Assignment.git
cd Krishworks_Assignment
npm i
```

##### Start the development server

```sh
npm start
```

##### Install the app first time in Android (in Dev mode)

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Android Studio IDE by clicking "Run" button after opening "Android" project in it
- Supported Machines: Windows / Linux / Mac

```sh
npm run android
```

##### Install the app first time in iPhones (iOS) - Dev mode

- Connect any Android device with USB
- Enable USB debugging in the device
- Accept to INSTALL the app when prompted during the deployment
- This command is not needed for subsequent changes made in project
- Whenever you include any package that impacts Android native, reinstall the app by issuing this command
- Alternatively the same can be achieved from Xcode IDE by clicking "Build" & "Run" button after opening "iOS" folder in it
- Supported Machines: Mac only

```sh
cd ios && pod install && cd ..
npm run ios
```

## To generate Android APK

```bash
gradlew assembleRelease (APK file)
gradlew bundleRelease (AAB file)
```
- For more details: https://reactnative.dev/docs/signed-apk-android
Note: If you run in Linux, issue ./gradlew instead of gradlew

## Output file location

You will find the APK file in:

```bash
~PROJECT_LOCATION\android\app\build\outputs\apk\release
```

## Install the released APK

```bash
adb install app-release.apk
```

## Packages used

| Package                   | Version |
| ------------------------- | ------- |
| React                     | 17      |
| React Native              | 0.67    |
| React Navigation          | 6       |
|React native webview       | 11      |
|React native paper         | 4       | 

## License

GNU GPL

[![React Native](https://reactnative.dev/img/oss_logo.png)](https://reactnative.dev/)
