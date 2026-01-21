'use client';
import { useState } from 'react';
import styles from './Carousel.module.css'
import Button from '../Buttons/Button';

type CarouselProps = {
    title?: string;
    description?: string;
    items?: React.ReactNode;
    button?: Record<string, any>
}

export default function Carousel({ title, description, items, button }: CarouselProps) {
    const [index, setIndex] = useState<Number>(0);

    const handleNext = () => { }

    const handlePrev = () => { }

    return <div className={styles.container}>
        <div className={styles.header}>
            <div>
                {title && <h3 className={styles.title}>{title}</h3>}
                {description && <p className={styles.description}>{description}</p>}
            </div>
            {button !== undefined && <Button title={button.title}>{button.title}</Button>}
        </div>
        <div className={styles.content}>

        </div>
    </div>
}