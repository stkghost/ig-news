import { Provider as NextAuthProvider } from "next-auth/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import React from "react";
import { Header } from "../components/Header";
import "../styles/global.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <Header />
      <Component {...pageProps} />
    </NextAuthProvider>
  );
}

export default MyApp;
