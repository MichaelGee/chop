import React from 'react';
import User from "../images/user2.png";
import Lock from "../images/lock2.png";
import fire from "../services/fireConfigure";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export const LoginForm =()=>{
    const [signedIn, setSignedIn] = React.useState(false);

    React.useEffect(() => {
        fire.isInitialized(user => {
            setSignedIn(!!user);
        });
    });

    const uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: "popup",
        // We will display Google and Facebook as auth providers.
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccess: () => false
        }
    };

    return(
        <div className='form-container'>
            <div className='login-form flex flex-col px-8 py-6 mx-auto max-w-xs'>
                <form>
                    <div className='mb-4'>
                        <label
                            className='block text-black text-sm font-normal mb-2 '
                            htmlFor='username'
                        >
                            Username
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-2 flex items-center '>
                                <img src={User} alt='' className='w-5'/>
                            </div>
                            <input
                                className='flex appearance-none block pr-4 pl-10 w-full bg-gray-200 text-black border border-black rounded sm:py-3 py-2 px-4'
                                id='username'
                                type='text'
                                placeholder='Username'
                            />
                        </div>
                    </div>
                    <div className='mb-6'>
                        <label
                            className='block text-black text-sm font-normal mb-2'
                            htmlFor='password'
                        >
                            Password
                        </label>
                        <div className='relative'>
                            <div className='absolute inset-y-0 left-0 pl-2 flex items-center '>
                                <img src={Lock} alt='' className='w-5'/>
                            </div>
                            <input
                                className='appearance-none block w-full pr-4 pl-10 bg-gray-200 text-black border border-black rounded sm:py-3 py-2 px-4'
                                id='password'
                                type='password'
                                placeholder='Password'
                            />
                        </div>
                    </div>
                    <a
                        href='#'
                        className='login-btn inline-block text-sm px-4 py-2 leading-none border rounded sm:mt-0 sm:px-8 py-3 px-5 lg:mt-0'
                    >
                        Log In
                    </a>
                    <p className='mt-3 text-black text-xs'>
                        <a href='#'>Forgotten password?</a>
                    </p>
                    <StyledFirebaseAuth className='google' uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                </form>
            </div>
        </div>
    )
}