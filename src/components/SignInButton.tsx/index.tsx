import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'


import styles from './styles.module.scss';

export function SignInButton() {

    const isUserLogginIng = true;

    return isUserLogginIng ? (
        <button type="button" className={styles.signInButton}>
            <FaGithub color="#84d361" />
            Gabriel Souza
            <FiX color="#a8a8b3" className={styles.buttonX}/>
        </button>
    ) : (
        <button type="button" className={styles.signInButton}>
            <FaGithub color="#eba417" />
            Sign in with Github
        </button>
    )
}