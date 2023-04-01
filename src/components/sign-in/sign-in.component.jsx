import React, { useState } from 'react'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'
import { ButtonsContainer, SignUpContainer } from './sign-in.styles.jsx'
import { useDispatch } from 'react-redux'
import { onGoogleSignInStart } from '../../store/user/user.saga'
import { emailSignInStart } from '../../store/user/user.action'
import { googleSignIn } from '../../store/user/user.action'

const defaultFormFields = {
  email: "",
  password: "",
}

const SignIn = () => {
  const dispatch = useDispatch()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    dispatch(googleSignIn())
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      dispatch(emailSignInStart(email, password))
      resetFormFields()
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password": 
          alert("incorrect password for email")
          break
        case "auth/user-not-found": 
          alert("no user associated with this email")
          break
        default: 
          console.log(error)
       }
    }
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value})
  }

  return (
    <SignUpContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonsContainer>
          <Button type="submit">Submit</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google sign in</Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  )
}

export default SignIn
