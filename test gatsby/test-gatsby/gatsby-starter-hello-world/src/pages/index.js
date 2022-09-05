import React from "react"
import Layout from "./components/Layout";
import styles from '../pages/styles/home.module.css'

export default function Home() {
  return (
    <Layout>
    <section className="{styles.header}">
      <div>
        <h2>Design</h2>
        <h3>Develop & Deploy</h3>
        <p>UX designer & web developer based in Manchester.</p>
      </div>
      <Link className={styles.btn}>My Portfolio Projects</Link>
    </section>
    </Layout>
  );
}
