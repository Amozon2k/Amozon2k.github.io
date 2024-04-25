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
  
  firebase.initializeApp(firebaseConfig );
  const messaging = firebase.messaging();
  console.log('test')

    messaging.requestPermission().then(()=>{console.log("Разрешения даны")}).catch((error) => {
        console.error('Ошибка:', error);
    });
    messaging.onBackgroundMessage(function(payload) {
      console.log('Получено уведомление:', payload);
  
      const notificationTitle = payload.notification.title;
      const notificationOptions = {
          body: payload.notification.body,
          icon: payload.notification.icon ?? null
      };
  
      self.registration.showNotification(notificationTitle, notificationOptions);
});