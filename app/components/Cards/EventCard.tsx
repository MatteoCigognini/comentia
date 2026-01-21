'use client';

import styles from './EventCard.module.css'

interface CardProps {
    title: string;
    description: string;
    image?: string;
    price: number;
    date: string;
    time: string;
    slots: number;
    availableSlots: number;
};

export default function EventCard({ title, description, image, price, date, time, slots, availableSlots }: CardProps) {
    return <div className={styles.card}>
        <div className={styles.image}>
            {image && <img src={image} className={styles.img} alt={title} />}
        </div>
        <div className={styles.content}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description.substring(0, 120)}{description.length > 120 ? '...' : ''}</p>
        </div>
    </div>
}