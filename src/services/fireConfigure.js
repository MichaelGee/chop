import app from "firebase/app"
import "firebase/auth";

// Firebase credentials
const firebaseConfiguration = {
    apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_DATABASE_URL,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_APP_ID,
}

class fire {
    constructor() {
        app.initializeApp(firebaseConfiguration);
        this.auth = app.auth();
    }
    //Login instance
    login(email, password){
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    //Sign Up instance
    async signup(username, email, password){
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.createUser.updateProfile({
            displayName: username
        });
    }

    //Log Out instance
    logout(){
        return this.auth.signOut();
    }

    //Initialize firebase
    isInitialized() {
        return new Promise((resolve) => {
            this.auth.onAuthStateChanged(resolve);
        });
    }

    //Get the current user
    getCurrentUser() {
        return this.auth.currentUser && this.auth.currentUser.displayName;
    }


}

export default new fire();

