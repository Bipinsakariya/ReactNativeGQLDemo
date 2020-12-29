# ReactNativeGQLDemo
# Clone the Project:

## Installation steps:
- Go to Project directory.
- npm install
- `Android`:
   - `npx react-native run-android`
- `iOS`:
   - `cd ios/pod install`
   - `cd ..`
   - `npx react-native run-ios`            
- npx react-native link         
                               
## Prerequisites:
- Node > 7 and npm (Recommended: Use npm)
- Watchman brew install watchman
- React Native CLI npm install -g react-native-cli
- XCode > 11
- JDK > 8
- Android Studio and Android SDK

## Folder structure: 
This template follows a very simple project structure:
- `src`: This folder is the main container of all the code inside your application
- `components`: Folder that contains all your application components.
- `screens`: Each screen components should be stored inside screen's own folder.
- `styles`: Folder that contains globalStyle & colors .
- `utils`: Folder that contains basic value names like screenNames & utility functions.

## Notes: 
- SVG rendering issue - React native built-in Flat List having some basic flows & features, here sometimes font error occurs when sorting the data to the list. This all is depending upon that size and SVG rendering content, This is the known bug from my side. Although performance can be optimised , it takes some amount of time.
