// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
   apiKey: "AIzaSyBtH_67aQyP0PWFhPOEu_HeaDdpfLewozY",
     authDomain: "chat-app-notification-1fb83.firebaseapp.com",
     projectId: "chat-app-notification-1fb83",
     storageBucket: "chat-app-notification-1fb83.appspot.com",
     messagingSenderId: "557720761173",
     appId: "1:557720761173:web:79871522804930fc1cf5dc"
});

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage", message);
});