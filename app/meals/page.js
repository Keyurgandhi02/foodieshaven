import { Suspense } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import getMeals from "@/api/meals";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default function meals() {
  return (
    <>
      <header className={styles.header}>
        <h1>
          Delicious Meals created
          <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your own food by browsing our selection</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Share Meals</Link>
        </p>
      </header>
      <main className={styles.main}>
        <Suspense fallback={<p className={styles.loading}>Loading Meals...</p>}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
