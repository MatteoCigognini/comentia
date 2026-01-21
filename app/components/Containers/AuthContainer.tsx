import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Buttons/Button';
import styles from './AuthContainer.module.css'

type AuthContainerProps = {
    lang: string;
    dict: Record<string, any>;
    title: string;
    description?: string;
    children?: React.ReactNode;
};

export default function AuthContainer({ lang, dict, title, description, children }: AuthContainerProps) {
    return <div className={styles.container}>
        <div className={styles.auth}>
            <div className={styles.header}>
                <div>
                    <h2 className={styles.logoTitle}><strong>Pix</strong>marker</h2>
                    <h1 className={styles.title}>{title}</h1>
                    {description !== undefined && <p className={styles.description}>{description}</p>}
                </div>
                <Button variant='grey'>{dict.generic.exit}</Button>
            </div>
            <div className={styles.content}>{children}</div>
        </div>
        <div className={styles.image}></div>
    </div>
}