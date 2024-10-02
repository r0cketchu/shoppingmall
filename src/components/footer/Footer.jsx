
import styles from './Footer.module.scss'
import React from 'react';
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    return (
        <footer className = {styles.footer}>
            <div className = 'container'>
                <div className = {styles.contacts}>
                    <a href = 'https://github.com/r0cketchu'>
                    {' '}
                    <BsGithub />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;