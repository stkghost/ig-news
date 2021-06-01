import React from "react";
import { SignInButton } from "../SignInButton.tsx";
import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerComponent}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="logo" />
        <nav>
          <a>Home</a>
          <a className={styles.active}>Posts</a>
        </nav>
        <SignInButton />
      </div>
    </header>
  );
}
