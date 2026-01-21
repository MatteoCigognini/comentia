import styles from './LineTextDivisor.module.css'

type DivisorProps = {
    text?: string;
};

export default function LineTextDivisor({ text }: DivisorProps) {
    return <div className={styles.divisor}>
        <div className={styles.line}></div>
        <div className={styles.text}>{text}</div>
    </div>
}