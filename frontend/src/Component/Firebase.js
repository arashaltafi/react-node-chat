import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAoVgN0b1c05EorOeY6sixCPH-YNgEyd6o",
    authDomain: "fir-notifications-b7b80.firebaseapp.com",
    projectId: "fir-notifications-b7b80",
    storageBucket: "fir-notifications-b7b80.appspot.com",
    messagingSenderId: "677260667482",
    appId: "1:677260667482:web:11f3a0d145d63ae6690663",
    measurementId: "G-GV6BY8R29R"
};

function requestPermission() {
    console.log("Requesting permission...");
    Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
            console.log("Notification permission granted.");
            const app = initializeApp(firebaseConfig);
            const messaging = getMessaging(app);

            // const messaging = getMessaging();
            onMessage(messaging, (payload) => {
                console.log('Message received. ', payload);
            });

            getToken(messaging, {
                vapidKey: "BH0U_ar3VRiMKE9aO_gg_D3BSdjlURzdxt9VXUZV_YwjfE8BMPejOLRUGDAWfJ2TV-pwz73oegmhr8rw7HSBNXE",
            }).then((currentToken) => {
                if (currentToken) {
                    console.log("currentToken: ", currentToken);
                } else {
                    console.log("Can not get token");
                }
            });



        } else {
            console.log("Do not have permission!");
        }
    });
}

requestPermission();