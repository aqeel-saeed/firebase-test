importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.2/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIaaaaaadNzzzzziiiiiilI_0jbQMqha3YVuM",
    authDomain: "testing-88888.firebaseapp.com",
    projectId: "testing-88888",
    storageBucket: "testing-8888.appspot.com",
    messagingSenderId: "333344445555",
    appId: "1:333344445555:web:f96b612de850ad3715eacc",
    measurementId: "G-RD8888888"
});

const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function({data:{title,body,icon}}) {
    return self.registration.showNotification(title,{body,icon});
});
