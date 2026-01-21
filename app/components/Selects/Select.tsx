'use client';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import styles from './Select.module.css';
import { ChangeEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SelectProps {
    label: string;
    id: string;
    options: { value: string; label: string }[];
    value: string;
    icon?: IconProp;
    error?: string | null;
    onChange: (value: string) => void;
    disabled?: boolean;
}

export default function Select({ label, id, options, value, onChange, icon, error, disabled }: SelectProps) {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) onChange(e.target.value);
    };

    return (
        <div className={styles.field}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>

            <div className={styles.container}>
                {icon && (
                    <div className={styles.icon}>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                )}

                <select
                    id={id}
                    className={`${styles.select} ${error ? styles.invalid : ''}`}
                    defaultValue={value}
                    onChange={handleChange}
                    disabled={disabled}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}