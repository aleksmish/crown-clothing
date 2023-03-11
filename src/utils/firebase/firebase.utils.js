import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCR5a7Wmazka4iTJF72sLA_peshtVUWEEg",
  authDomain: "crwn-clothing-db-f66fb.firebaseapp.com",
  projectId: "crwn-clothing-db-f66fb",
  storageBucket: "crwn-clothing-db-f66fb.appspot.com",
  messagingSenderId: "5449622556",
  appId: "1:5449622556:web:6178732b11ce46a878ebd9"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: "select_account"
})


export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.massage)
    }
  }

  return userDocRef
}
