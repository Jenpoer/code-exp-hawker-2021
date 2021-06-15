import firebase from "firebase/app";
import "firebase/firestore";

 const firebaseConfig = {
    
        apiKey: "AIzaSyCDiE3UQI4Eevy_xT6g1A9yfh_d3fRFyXc",
        authDomain: "project2-ed4a4.firebaseapp.com",
        projectId: "project2-ed4a4",
        storageBucket: "project2-ed4a4.appspot.com",
        messagingSenderId: "49980239050",
        appId: "1:49980239050:web:9487d027fe6ef6402b1833",
        measurementId: "G-K3TP6T2TT1"
     
 };

 firebase.initializeApp(firebaseConfig);
 export default firebase;