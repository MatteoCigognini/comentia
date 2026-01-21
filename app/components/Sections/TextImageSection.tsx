'use client';
import React from 'react';
import styles from './TextImageSection.module.css'

type SectionProps = {
    children: React.ReactNode;
};

export default function TextImageSection({ children }: SectionProps) {
    return <div className={styles.section}>
        <div className={styles.content}>{children}</div>
        <div className={styles.image}></div>
    </div>
}