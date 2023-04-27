import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB0fYczvlMDJOPaLOSZQ8ZeR5T5H4DCrm8",
  authDomain: "restaurantapp-d3f1f.firebaseapp.com",
  databaseURL: "https://restaurantapp-d3f1f-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-d3f1f",
  storageBucket: "restaurantapp-d3f1f.appspot.com",
  messagingSenderId: "285115004095",
  appId: "1:285115004095:web:e2d8b3c3704d877d02020a"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
