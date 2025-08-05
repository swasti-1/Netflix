import React, { useState } from 'react'
import "./login.css"
import SignInScreen from "./SignInScreen"

function Login() {
    const [signIn, setsignIn] = useState(false);
    return (
        <div className='login'>
            <div className="login_background">
                <img className="login_logo" src='https://loodibee.com/wp-content/uploads/Netflix-logo.png'
                    alt='' />
                <button onClick={() => setsignIn(true)} className='login_button'>
                    Sign In
                </button>
            </div>
            <div className="login_gradient"></div>
            <div className="login_body">
                {signIn ? (
                    <SignInScreen />
                ) : (
                    <>
                        <h1>Unlimited films , TV programmes and more.</h1>
                        <h2>Watch Anywhere . cancel at any time.</h2>
                        <h3> Ready to watch ? Enter your email to create or restart your membership.</h3>
                        <div className="login_input">
                            <form>
                                <input type="email" placeholder='Email Address' />
                                <button onClick={() => setsignIn(true)} className='get_start'>
                                    Get Started
                                </button>
                            </form>
                        </div>

                    </>

                )}
            </div>
        </div>
    )
};





export default Login