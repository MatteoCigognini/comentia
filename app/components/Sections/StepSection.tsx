'use client';

import { useEffect, useState } from 'react';
import styles from './StepSection.module.css'
import { formatText } from '@/utils/text';

interface SectionProps {
    steps: any[];
}

export default function StepSection({ steps }: SectionProps) {
    const [currentStep, setCurrentStep] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length);
        }, 3000); // 3s per step

        return () => clearInterval(interval);
    }, [steps.length]);

    return <div className={styles.section}>
        <div className={styles.steps}>
            {steps.map((s, i) => <div key={i} className={`${styles.step} ${currentStep === i ? styles.current : ''}`}>
                <div className={styles.bar}></div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{formatText(s.title)}</h3>
                    {s.description && <p className={styles.description}>{s.description}</p>}
                </div>
            </div>)}
        </div>
    </div>
}