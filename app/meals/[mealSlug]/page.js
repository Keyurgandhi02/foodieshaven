import styles from "./page.module.css";
import { getMealBySlug } from "@/api/meals";
import Image from "next/image";

export default function MealItemsPage({ params }) {
  const meal = getMealBySlug(params.mealSlug);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.image}>
          <Image fill src={meal.image} alt={meal.title} />
        </div>
        <div className={styles.headerText}>
          <h1>{meal.title}</h1>
          by <p className={styles.creator}>{meal.creator}</p>
          <p className={styles.summary}>{meal.summary}</p>
        </div>
      </header>
    </>
  );
}
