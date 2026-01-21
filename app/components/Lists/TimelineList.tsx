'use client';
import styles from './TimelineList.module.css'

type ItemProps = {
    time?: string;
    title: string;
    description: string;
};

type TimelineProps = {
    items: ItemProps[];
};

export default function TimelineList({ items }: TimelineProps) {
    return <ol className={styles.list}>
        {items.map((item, i) => <li key={`list-item-${i}`} className={styles.item}>
            <div className={styles.line}></div>
            <div className={styles.content}>
                <p className={styles.time}>Step {i + 1}</p>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.description}>{item.description}</p>
            </div>
        </li>)}
    </ol>
}