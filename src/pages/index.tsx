import { GetServerSideProps } from "next";
import { useSession } from "next-auth/client";
import Head from "next/head";
import React from "react";
import { SubscribeButton } from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  const [session] = useSession();

  return (
    <>
      <Head>
        <title>Home </title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, welcome</span>
          <h1>
            {" "}
            News about the <span>React</span> world.
          </h1>

          <p>
            Get acess to all the publications <br />
            <span>for {product.amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <img
          src={session ? session.user.image : "images/avatar.svg"}
          alt="girl"
        />
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1IxKSFJdmZhtc0cDStqQujIE");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "usd",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
  };
};
