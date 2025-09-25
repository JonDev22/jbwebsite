import firebaseConfig from "@/firebase/firebaseConfig";
import { FirebaseApp, getApps, initializeApp } from "firebase/app";

function getApp(): FirebaseApp {
    const apps = getApps();
    return !apps.length ? initializeApp(firebaseConfig) : apps[0];
}

export default getApp;
