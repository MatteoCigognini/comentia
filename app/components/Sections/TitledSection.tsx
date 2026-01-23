'use client';

import { formatText } from '@/utils/text';
import styles from './TitledSection.module.css'

interface SectionProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export default function TitledSection({ title, description, children }: SectionProps) {
    return <div className={styles.section}>
        <div className={styles.header}>
            <h2 className={styles.title}>{formatText(title)}</h2>
            {description && <p className={styles.description}>{formatText(description)}</p>}
        </div>
        <div className={styles.content}>{children}</div>
    </div>
}