import Image from "next/image";
import Calculadora from "@/components/calculadora";
import styles from "@/components/calculadora.module.css"

export default function Home() {
  return (
    <div className={styles.page}>
      <Calculadora/>
    </div>
  );
}
