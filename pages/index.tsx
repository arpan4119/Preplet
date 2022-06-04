import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const Home: NextPage = () => {
  let { loginStatus, loading } = useContext(AuthContext);
  if (loading) return <h4>Loading...</h4>;
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Landing Page</h1>
      <p>User is {loginStatus ? "" : "Not"} Logged in</p>
    </div>
  );
};

export default Home;
