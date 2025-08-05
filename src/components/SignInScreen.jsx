import { useRef } from 'react';
import { auth, createUserWithEmailAndPassword , signInWithEmailAndPassword } from '../firebase'; // Ensure correct import
import './SignInScreen.css';

function SignInScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = async (e) => {
    e.preventDefault();
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(authUser);
    } catch (error) {
      alert(error.message);
    }
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      const authUser = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      );
      console.log(authUser);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className='signinscreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={register}>Sign In</button>
        <button type="submit" onClick={signIn}>Log In</button>
        
      </form>
    </div>
  );
}

export default SignInScreen;
