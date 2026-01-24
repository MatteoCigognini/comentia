'use client';

import { useState } from 'react';
import styles from './StepSection.module.css'

interface SectionProps {
    steps: any[];
}

export default function StepSection({ steps }: SectionProps) {
    const [currentStep, setCurrentStep] = useState<number>(0);

    return <div className={styles.section}>
        <div className={styles.steps}>
            {steps.map((s, i) => <div key={i} className={styles.step}>
                
            </div>)}
        </div>
    </div>
}