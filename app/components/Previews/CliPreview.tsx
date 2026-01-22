'use client';

import { useTypingAnimation } from '@/utils/typingAnimation';
import styles from './CliPreview.module.css'

interface PreviewProps {
    lang: string;
    dict: Record<string, any>;
}

const LINES = [
    "$ comentia src/",

    "🔍 Scansione progetto…",
    " ↳ Escluse 6 directory (.git, node_modules, .next, dist, coverage)",

    "📦 File analizzati: 14",
    "ƒ Funzioni trovate: 27",
    "✍️ Funzioni senza documentazione: 9",

    "🧠 Analisi completata",
    "⚠️ 0 file modificati (preview mode)",
];

export default function CliPreview({ lang, dict }: PreviewProps) {
    const text = useTypingAnimation(LINES, {
        typingSpeed: 35,
        lineDelay: 600,
        loopDelay: 4000,
    });

    return <div className={styles.window}>
        <div className={styles.header}>
            <div className={styles.bullets}>
                <div className={styles.bullet} style={{ backgroundColor: "var(--color-red)" }}></div>
                <div className={styles.bullet} style={{ backgroundColor: "var(--color-yellow)" }}></div>
                <div className={styles.bullet} style={{ backgroundColor: "var(--color-green)" }}></div>
            </div>
        </div>
        <div className={styles.cli}>
            <pre>
                {text}
                <div className={styles.animatePulse}>▍</div>
            </pre>
        </div>
    </div>
}