'use client';

import { useState } from 'react';
import styles from './RadioInput.module.css'

interface InputProps {
    id: string;
    label: string;
    defaultChecked: boolean;
    value?: string;
    onChange?: Function;
    error?: string | null;
}

export default function RadioInput({ id, label, defaultChecked = false, value, onChange, error }: InputProps) {
    const [isChecked, setIsChecked] = useState<boolean>(defaultChecked);

    const handleChange = () => {
        setIsChecked(old => !old);
        if (onChange)
            onChange(!isChecked);
    }

    return <label className={styles.label}>
        <input
            type='radio'
            id={id}
            value={value}
            checked={isChecked}
            className={`${styles.radio} ${error ? styles.invalid : ''}`}
            onChange={handleChange}
        />
        <span className={styles.text}>{label}</span>
    </label>
}