import React from 'react'
import {
  signInWithGooglePopup, 
  createUserDocumentFromAuth, 
  auth
} from '../../utils/firebase/firebase.utils'
import SignUp from '../../components/sign-up/sign-up.component'

const SignIn = () => {

  const loginGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
        <h1>Sign in</h1>
        <button onClick={loginGooglePopup}>
          Sign in with Google Popup
        </button>
        <SignUp />
    </div>
  )
}

export default SignIn