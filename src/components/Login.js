import { Button } from '@material-ui/core';
import React from 'react';
import '../styles/Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            })
            .catch(error => {
                alert(error.message)
            })
    }

    return (
        <div className="login">
            <div className="login-container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="slack logo"/>
                <h1>Sign in to The Dark Side HQ</h1>
                <p>thedarkside.slack.com</p>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login
