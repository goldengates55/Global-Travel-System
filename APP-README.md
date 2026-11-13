# Visa Guide: Android app project

This folder turns the Visa Travel Platform website into an Android app with Capacitor. The app opens the same pages from inside the phone, so it works without internet.

**Status:** this project was prepared but NOT built or tested, because the Android tools are not available where it was made. Please build it on your own computer using the steps below.

## What you need on your computer

- Node.js (current LTS version)
- Android Studio (it includes the Android SDK and Java)

## Build steps

1. Optional: open `capacitor.config.json` and change `appId` (for example `cm.yourcompany.visaguide`) and `appName`. Do this before step 3. The `appId` cannot be changed easily after the app is published.
2. In this folder, run:
   ```
   npm install @capacitor/core @capacitor/cli @capacitor/android
   ```
3. Prepare the web files and add Android:
   ```
   node prepare.js site
   npx cap add android
   ```
4. Open the project in Android Studio:
   ```
   npx cap open android
   ```
5. Connect a phone with USB debugging on (or start an emulator) and press Run.
6. App icon: in Android Studio, right-click `app/src/main/res`, choose New, then Image Asset, and use `site/icon-512.png`.
7. To get a file you can share or publish: Build, then Generate Signed Bundle / APK. Choose APK to share the file directly, or Android App Bundle for Google Play. Keep your signing key safe: you need the same key for every update.

## Updating the content later

1. Replace the files in the `site` folder with the new website files (index.html and the others).
2. Run `npm run sync`. This prepares the web files and updates the Android project.
3. Build the app again in Android Studio. Increase the version number in `android/app/build.gradle` (`versionCode` and `versionName`) before each release.

## What works differently inside the app

The app runs in a phone web view, not in a browser. Some browser-only features do not work there, so `native.css` hides their buttons:

- Print checklist and Print itinerary
- File downloads: letter templates, calendar export, sample data files
- The "Install app" button (the app is already installed)

Copy buttons, WhatsApp links, search, the calculators, the checklist, saved progress and the English/French switch should all work. Please test them on a real phone, especially the WhatsApp links and the external source links, which should open outside the app.

To bring printing and downloads into the app, Capacitor plugins (such as Share and Filesystem) would be needed. That is extra work.

## Publishing

- **Google Play:** you need a Google Play developer account (a one-time fee), a privacy policy web address, and to follow Google's current requirements for new apps. Android Studio and the Play Console list what is needed.
- **iPhone:** a Mac and a paid Apple developer account are needed. Run `npx cap add ios` after installing `@capacitor/ios`.
- **Without building anything:** the website itself can be installed from the browser (Android: "Install app"; iPhone: Share, then Add to Home Screen). This keeps printing and downloads working.
