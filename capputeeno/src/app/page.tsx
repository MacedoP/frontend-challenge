import Image from "next/image";
import styles from "./page.module.css";
import FilterBar from "@/components/filter_Bar";

export default function Home() {
  return (
    <main className={styles.main}>
     <FilterBar/>
    </main>
  );
}
