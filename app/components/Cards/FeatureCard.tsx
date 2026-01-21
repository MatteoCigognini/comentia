'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './FeatureCard.module.css'
import { IconProp } from '@fortawesome/fontawesome-svg-core';

type CardProps = {
    icon?: IconProp;
    title: string;
    description: string;
};

export default function FeatureCard({ icon, title, description }: CardProps) {
    return <div className={styles.card}>
        {icon && <div className={styles.icon}>
            <FontAwesomeIcon icon={icon} />    
        </div>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
    </div>
}