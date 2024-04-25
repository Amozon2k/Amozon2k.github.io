importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.7.0/firebase-messaging.js');
const firebaseConfig = {
    apiKey: "AIzaSyDeVZ40U8FKl8jdIgllDo_fT5DstwCrmuM",
    authDomain: "pwas-912f5.firebaseapp.com",
    projectId: "pwas-912f5",
    storageBucket: "pwas-912f5.appspot.com",
    messagingSenderId: "718060089543",
    appId: "1:718060089543:web:25168c10d0ab7e26920ee2",
    measurementId: "G-NQ9QQ07510"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  
  messaging.onBackgroundMessage(function(payload) {

    const notificationOptions = {
        body: payload.notification.body
    };

    self.registration.showNotification(payload.notification.title, notificationOptions);
});