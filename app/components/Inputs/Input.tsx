"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styles from "./Input.module.css";
import { ChangeEvent, FocusEvent } from "react";

interface InputProps {
    label: string;
    id: string;
    type: string;
    value?: string | number;
    placeholder?: string;
    icon?: IconProp;
    error?: string | null;
    min?: number | null;
    max?: number | null;
    step?: number | null;
    onChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    disabled?: boolean;
}

export default function Input({
    label,
    id,
    type,
    value,
    placeholder,
    icon,
    error,
    min,
    max,
    step,
    onChange,
    onBlur,
    disabled = false,
}: InputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.target.value);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (onBlur) onBlur(e.target.value);
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

                <input
                    type={type}
                    id={id}
                    className={`${styles.input} ${error ? styles.invalid : ""}`}
                    defaultValue={value}
                    placeholder={placeholder}
                    min={min || undefined}
                    max={max || undefined}
                    step={step || undefined}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={disabled}
                />
            </div>
        </div>
    );
}