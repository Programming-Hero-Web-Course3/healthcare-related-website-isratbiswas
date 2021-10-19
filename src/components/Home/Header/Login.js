import { getAuth } from '@firebase/auth';
import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import useFirebase from '../../../hooks/useFirebase';




const Login = () => {
    const history = useHistory();
    const { currentUser } = getAuth();
    if (currentUser) {
        history.push('/service/serviceId');
    }
    const { handleGoogleSignIn } = useFirebase();

    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={handleGoogleSignIn}>Google Sign In</button>
        </div>
    );
};

export default Login;