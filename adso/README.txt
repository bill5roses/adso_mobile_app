
nvm use 6

https://github.com/AlexDisler/cordova-icon
Create an icon.png file in the root folder of your cordova project. You can provide a platform-specific icon by naming it icon-[platform].png (e.g icon-android.png, icon-ios.png). Then run:
cordova-icon

https://github.com/AlexDisler/cordova-splash
Create a splash.png file in the root folder of your cordova project and run:
cordova-splash

cordova run ios
cordova run android

nvm use 6

cordova build android --release
cp platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk ../android-release-unsigned.apk
cd ..
rm adso-release-unsigned-aligned.apk adso-release.apk
/Users/bill/Applications/build-tools/26.0.0/zipalign -v -p 4 android-release-unsigned.apk adso-release-unsigned-aligned.apk
/Users/bill/Applications/build-tools/25.0.2/apksigner sign --ks adso-android-keystore --out adso-release.apk adso-release-unsigned-aligned.apk
  - password: theadso
  - alias: adso