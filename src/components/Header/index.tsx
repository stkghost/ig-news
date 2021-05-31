import React from 'react'
import { SignInButton } from '../SignInButton.tsx'
import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerComponent}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="logo"/>
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}