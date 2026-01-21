import { formatText } from '@/utils/text';
import styles from './HeroSection.module.css'

type SectionProps = {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    imageUrl?: string;
    imageAlt?: string;
    inverted?: boolean;
};

export default function HeroSection({
    title,
    description,
    children,
    imageUrl,
    imageAlt,
    inverted = false,
}: SectionProps) {
    return (
        <div className={`${styles.section} ${inverted ? styles.inverted : ''}`}>
            <div className={styles.content}>
                <h2 className={styles.title}>{formatText(title || '')}</h2>
                {description && (
                    <p className={styles.description}>
                        {formatText(description)}
                    </p>
                )}
                {children}
            </div>

            <div className={styles.image}>
                {imageUrl && (
                    <img
                        src={imageUrl}
                        className={styles.img}
                        alt={imageAlt || ''}
                    />
                )}
            </div>
        </div>
    );
}