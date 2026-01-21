'use client'
import React from 'react';
import styles from './Button.module.css'

type ButtonProps = {
    title?: string;
    children?: React.ReactNode;
    variant?: string;
    isSquared?: boolean;
    disabled?: boolean;
    style?: object;
    onClick?: Function;
}

export default function Button({ title, children, variant = 'primary', isSquared = false, disabled = false, style = {}, onClick }: ButtonProps) {
    const handleClick = () => {
        if (onClick)
            onClick();
    }

    return <button
        className={`${styles.button} ${styles[variant]} ${isSquared ? styles.squared : ''}`}
        onClick={handleClick}
        title={title || ''}
        disabled={disabled}
        style={{ ...style }}
    >{children}</button>
}