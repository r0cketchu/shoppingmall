import {initializeApp} from 'firebase/app';

const firebaseConfig = {
    apikey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
};

const app = initializeApp(firebaseConfig);

export default app;