import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './LoadingState.module.css'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

type StateProps = {
    title: string;
    description?: string;
};

export default function LoadingState({ title, description }: StateProps) {
    return <div className={styles.container}>
        <div className={styles.icon}>
            <FontAwesomeIcon icon={faCircleNotch} spin />
        </div>
        <h6 className={styles.title}>{title}</h6>
        {description && <p className={styles.description}>{description}</p>}
    </div>
}