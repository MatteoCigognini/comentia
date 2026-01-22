'use client';

import { useTypingAnimation } from '@/utils/typingAnimation';
import styles from './CliPreview.module.css'

interface PreviewProps {
    lang: string;
    dict: Record<string, any>;
}

const LINES = [
    "$ comentia src/",
    " ✓ 12 funzioni analizzate",
    " ✓ 9 senza documentazione",
    " ⚠️ 0 file modificati (preview mode)",
];

export default function CliPreview({ lang, dict }: PreviewProps) {
    const text = useTypingAnimation(LINES, {
        typingSpeed: 35,
        lineDelay: 500,
        loopDelay: 4000,
    });

    return <div className={styles.window}>
        <div className={styles.header}>
            <div className={styles.bullets}>
                <div className={styles.bullet} style={{ backgroundColor: "var(--color-red)" }}></div>
                <div className={styles.bullet} style={{ backgroundColor: "var(--color-orange)" }}></div>
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