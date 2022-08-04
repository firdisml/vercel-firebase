import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config ={
    
    apiKey: process.env.NEXT_API_KEY,
    authDomain: process.env.NEXT_AUTH_DOMAIN,
    projectId: process.env.NEXT_PROJECT_ID,
    storageBucket: process.env.NEXT_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_APP_ID,
    measurementId: process.env.NEXT_MEASUREMENT_ID,

}

if(!firebase.apps.length){


    try {

        firebase.initializeApp(config);

        console.log("Firebase Initialized!")
        
    } catch (error) {

        console.log("Error, Firebase Not Initialized!")
        
    }

}

export default firebase;