import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { onSnapshot, query } from "firebase/firestore";

export const createFirebaseApp = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyCDwYOxlTDHZ3llBi0wBWK1s6Xly28bfDQ",
    authDomain: "shop-till-you-pop-e1380.firebaseapp.com",
    projectId: "shop-till-you-pop-e1380",
    storageBucket: "shop-till-you-pop-e1380.appspot.com",
    messagingSenderId: "733369019310",
    appId: "1:733369019310:web:f5622906569bf1ac0f763f",
    measurementId: "G-SRZ5TKYKRB",
  };

  if (getApps().length <= 0) {
    const app = initializeApp(firebaseConfig);
    return app;
  }
};
