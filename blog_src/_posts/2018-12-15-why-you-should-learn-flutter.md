---
layout: post
title: "Why you should learn Flutter?"
author_github: gvaibhav1734
date: 2018-12-15
image: '/assets/img/'
description: 'This article is about why Flutter is the next big thing in Mobile development'
tags:
- Flutter
- Android
- Dart
- Cross platform mobile development
categories:
- Compsoc
github_username: 'gvaibhav1734'
comments: true
---

## What is Flutter?

Flutter is an open-source Mobile Application Development SDK launched by Google back in May 2017. It is used to create apps for both Android and iOS Operating Systems. It is also the primary method of developing applications for Google Fuchsia. Flutter 1.0 was announced on December 4th, 2018 at [Flutter Live](https://developers.google.com/events/flutter-live/).

## Why Flutter?

__Incredibly easy to setup and get started!__ - Download the Flutter SDK from the [official website](https://flutter.io/docs/get-started/install). Extract it and add the flutter sdk path to your `PATH` variable. Download the Flutter plugin in your favourite editor / IDE and you're good to go. It's that simple!

__Flutter provides great tooling support__ - Flutter development is supported on major IDEs like Android Studio, IntelliJ IDEA and VS Code so development is going to feel right at home.

__Flutter ❤️ Dart__ - Dart is a programming language developed by Google which is very easy to pickup if you know JavaScript or Java. So native Android and react-native developers can learn Flutter easily.

__Hot Reload__ - Unlike Instant Run in Android Studio (which never works!) Flutter has sub-second stateful hot reload. With stateful hot reload, you can make changes to the code of your app and see the results instantly without restarting your app or losing its state. This improves the development experience.

![Hot reload in action](/blog/assets/img/why-you-should-learn-flutter/hot_reload.gif)

__Documentation__ - Flutter is documented very well which makes app development process easy and productive (one click away!).

__Large number of widgets__ - Flutter provides rich set of beautiful, customisable Material Design and Cupertino (iOS-style) widgets which makes it very easy to build beautiful UIs.

__Develop for Android as well as iOS__ - Flutter is compiled into native ARM code for both Android and iOS. So you can serve both the platforms with a single codebase. This is beneficial for companies which have small teams and need to cater to users of both platforms.

![Flutter app on Android as well as iOS](/blog/assets/img/why-you-should-learn-flutter/ios_android.png)

__Open sourced__ - Flutter is [open-sourced](https://github.com/flutter) and has a great community which strives to make it better and it's backed by Google.

__Early adoption by various enterprises__ - Alibaba made use of Flutter to build Xianyu app. Google themselves use Flutter to develop the Google Ads app. Similarly [many enterprises](https://flutter.io/showcase) have started to use Flutter to develop their apps even though Flutter hit 1.0 very recently. This clearly shows that Flutter has lot of potential and will be the next leading framework in mobile development.

## How is Flutter different?

- Hot reload is one of the most popular features of Flutter. In Android significant time is spent to build the app then navigate to the activity which had a bug and try to fix it but in Flutter you can quickly iterate on a screen deeply nested in your app, without starting from the home screen after every reload.
- Flutter does its own rendering using Skia. It doesn't rely on native views which are often not powerful and fast enough. It paints every pixel on screen. This means that your UI can be written once and shared across iOS and Android and it will look identical in both platforms unless you want it to be different.
- Flutter makes use of reactive views like react-native but without the JavaScript bridge.
- Flutter uses composition. As a result it's very easy to build custom Widgets. In Android (which uses inheritance to build UI components), if you nest a lot of UI components then you can run into performance issues really quickly but we don’t have that problem in Flutter.
- Flutter compiles to native ARM code on both Android and iOS so the apps built using Flutter have absolutely no performance issues. Flutter has 60fps animations and can also handle 120fps provided the device is capable of 120Hz updates which clearly shows that apps built using Flutter are performance-driven.

## Future of Flutter?

Google plans to update the 'stable' channel of Flutter on a quaterly basis. Apart from the obvious support for iOS and Android devices Google is planning to release Flutter for web and the project is called Hummingbird, which takes support from the Dart platform for compiling it with ARM code and JavaScript. It allows Flutter to operate on Standard web apps without any changes.

Google has also started to work on Flutter Desktop Embedding, which is still in its early days. With this project, Google intends to introduce Flutter in the world of desktop Operating Systems along with Windows, MacOS, and Linux.

Google also published an informal guideline on how to use Flutter on Raspberry Pi to show that Flutter can be embedded into smaller-scale devices.

## Conclusion

Flutter is designed to be fast, productive and beautiful. It bridges the gap between iOS and Android. It bridges the gap between developers and designers and helps them build beautiful, functional, productive apps. Often new technologies are not adopted by enterprises which makes the developers think twice before learning but this is not the case with Flutter. Alibaba adopted Flutter when it was in beta. So clearly enterprises are interested in this framework. Moreover, Flutter is the primary way of developing apps for Google Fuchsia which gives more incentive to learn it. Flutter makes mobile development fun!

## Some helpful links to get started with Flutter

- [The official website](https://flutter.io)<br/>
- [Talk by Eric Seidel (co-founder) on Flutter](https://www.youtube.com/watch?v=VUiVkDpikDI&t=316s)<br/>
- [Get started with flutter!](https://flutter.io/docs/get-started/install)<br/>
- [Flutter gallery app to get a taste of what you can build and how it would look](https://play.google.com/store/apps/details?id=io.flutter.demo.gallery&hl=en_IN)