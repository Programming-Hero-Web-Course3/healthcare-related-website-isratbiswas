import React, { useState } from 'react';
import { getAuth } from "firebase/auth";
import useFirebase from '../../../hooks/useFirebase';
import { useHistory } from 'react-router';


const SignUp = () => {
    const { handleGoogleSignIn, signUp } = useFirebase();
    const history = useHistory();
    const { currentUser } = getAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    if (currentUser) {
        history.push('/home');
    }
    const auth = getAuth();
    const signUpSubmit = (event) => {
        event.preventDefault()
        signUp(email, password);
    }
    return (
        <>
            <div className="login-form container d-flex align-items-center justify-content-center py-5">
                <div
                    className="text-center p-3 shadow rounded"
                    style={{ width: "360px" }}
                >
                    <h4 className="pb-3 text-secondary">Sign Up</h4>
                    <form
                        className="d-grid pb-3"
                        onSubmit={(event) => signUpSubmit(event)}
                    >
                        <div className="text-start pb-2">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            />
                        </div>
                        <div className="text-start py-2">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />
                        </div>

                        <button className="btn btn-darkblue mt-3">Sign Up</button>
                    </form>
                    <button
                        className="btn btn-primary rounded-0 d-flex align-items-center justify-content-center p-0 m-auto"
                        onClick={handleGoogleSignIn}
                    >
                        <span className="mx-3">Sign In With Google</span>
                    </button>
                </div>
            </div>
        </>
    )






}



export default SignUp;