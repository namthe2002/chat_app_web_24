// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
       apiKey: "AIzaSyC1ftHBCj1PDveU7e4LkKrwY-r16xedSDs",
       authDomain: "chat-app-notification-9922d.firebaseapp.com",
       projectId: "chat-app-notification-9922d",
       storageBucket: "chat-app-notification-9922d.appspot.com",
       messagingSenderId: "325991824369",
       appId: "1:325991824369:web:2a846ea8ed44c27186a250"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});