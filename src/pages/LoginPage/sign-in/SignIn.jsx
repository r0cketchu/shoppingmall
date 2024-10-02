import React, { useState } from 'react'
import Form from '../../../components/form/Form';
// import Form from '../../../../components/form/Form'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import app from '../../../firebase';
//import { setUserId } from '../../../src/store/cart/cart.slice';
import { setUser } from '../../../store/user/user.slice';

const SignIn = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [firebaseError, setFirebaseError] = useState("");

    const handleLogin = (email, pass) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, pass)
        .then((userCredential) => {
            dispatch (
                setUser ({
                    email: userCredential.user.email,
                    token: userCredential.user.refreshToken,
                    id: userCredential.user.uid,
                })
            );
            navigate('/');
        })
        
        .catch((error) => {
            return error && setFirebaseError('이메일 또는 비밀번호가 잘못되었습니다.');
        })
    };

    return (
        <Form title ={'로그인'}
        getDataForm = {handleLogin}
        firebaseError = {firebaseError} 
        />
    )
};

export default SignIn;

