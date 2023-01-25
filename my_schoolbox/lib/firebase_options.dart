// File generated by FlutterFire CLI.
// ignore_for_file: lines_longer_than_80_chars, avoid_classes_with_only_static_members
import 'package:firebase_core/firebase_core.dart' show FirebaseOptions;
import 'package:flutter/foundation.dart'
    show defaultTargetPlatform, kIsWeb, TargetPlatform;

/// Default [FirebaseOptions] for use with your Firebase apps.
///
/// Example:
/// ```dart
/// import 'firebase_options.dart';
/// // ...
/// await Firebase.initializeApp(
///   options: DefaultFirebaseOptions.currentPlatform,
/// );
/// ```
class DefaultFirebaseOptions {
  static FirebaseOptions get currentPlatform {
    if (kIsWeb) {
      return web;
    }
    switch (defaultTargetPlatform) {
      case TargetPlatform.android:
        return android;
      case TargetPlatform.iOS:
        return ios;
      case TargetPlatform.macOS:
        return macos;
      case TargetPlatform.windows:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for windows - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      case TargetPlatform.linux:
        throw UnsupportedError(
          'DefaultFirebaseOptions have not been configured for linux - '
          'you can reconfigure this by running the FlutterFire CLI again.',
        );
      default:
        throw UnsupportedError(
          'DefaultFirebaseOptions are not supported for this platform.',
        );
    }
  }

  static const FirebaseOptions web = FirebaseOptions(
    apiKey: 'AIzaSyBHMIEWGKltbgxnGaOFFECgv9NB5UtBE6I',
    appId: '1:965129762984:web:069f5d1653398bd392aa9d',
    messagingSenderId: '965129762984',
    projectId: 'my-schoolbox',
    authDomain: 'my-schoolbox.firebaseapp.com',
    storageBucket: 'my-schoolbox.appspot.com',
    measurementId: 'G-6HVEME3PWB',
  );

  static const FirebaseOptions android = FirebaseOptions(
    apiKey: 'AIzaSyA5PI6LoIooqnsPQJHmDE4_EJ77p9qxk4Y',
    appId: '1:965129762984:android:4aab634d0947700492aa9d',
    messagingSenderId: '965129762984',
    projectId: 'my-schoolbox',
    storageBucket: 'my-schoolbox.appspot.com',
  );

  static const FirebaseOptions ios = FirebaseOptions(
    apiKey: 'AIzaSyA3H41ZkOsTkA-bOlarGx4UKSRCpsEbAbo',
    appId: '1:965129762984:ios:6d30beb4d0133c6592aa9d',
    messagingSenderId: '965129762984',
    projectId: 'my-schoolbox',
    storageBucket: 'my-schoolbox.appspot.com',
    iosClientId: '965129762984-iomh6bmv4904mcmgibhlq73ss26n1cp9.apps.googleusercontent.com',
    iosBundleId: 'com.example.mySchoolbox',
  );

  static const FirebaseOptions macos = FirebaseOptions(
    apiKey: 'AIzaSyA3H41ZkOsTkA-bOlarGx4UKSRCpsEbAbo',
    appId: '1:965129762984:ios:6d30beb4d0133c6592aa9d',
    messagingSenderId: '965129762984',
    projectId: 'my-schoolbox',
    storageBucket: 'my-schoolbox.appspot.com',
    iosClientId: '965129762984-iomh6bmv4904mcmgibhlq73ss26n1cp9.apps.googleusercontent.com',
    iosBundleId: 'com.example.mySchoolbox',
  );
}