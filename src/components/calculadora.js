"use client"; // se estiver usando app router
import { useState } from "react";
import styles from "../components/calculadora.module.css";

export default function Calculadora() {
    const [input, setInput] = useState("");

    const handleClick = (value) => {
        if (value === "=") {
            try {
                setInput(eval(input).toString());
            } catch {
                setInput("Erro");
            }
        } else if (value === "C") {
            setInput("");
        } else {
            setInput(input + value);
        }
    };

    const botoes = [
        "7", "8", "9", "/",
        "4", "5", "6", "*",
        "1", "2", "3", "-",
        "0", ".", "C", "+",
        "="
    ];

    return (
        <div className={styles.page}>
            <div className={styles.calculadora}>
                <div className={styles.display}>{input || "0"}</div>
                <div className={styles.botoes}>
                    {botoes.map((btn, i) => (
                        <button
                            key={i}
                            className={styles.botao}
                            onClick={() => handleClick(btn)}
                        >
                            {btn}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
