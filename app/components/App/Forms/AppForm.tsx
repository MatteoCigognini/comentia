'use client';

import { useState } from 'react';
import styles from './AppForm.module.css'
import Button from '../../Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';

interface FormProps {
    lang: string;
    dict: Record<string, any>;
}

interface FormData {
    mode: string;
    enabled: boolean;
}

interface FormErrors {
    mode: string | null;
    enabled: string | null;
}

const MAX_STEPS = 3;

export default function AppForm({ lang, dict }: FormProps) {
    const [loading, setLoading] = useState<boolean>(false);
    const [genericError, setGenericError] = useState<string | null>(null);
    const [step, setStep] = useState<number>(0);

    const [formData, setFormData] = useState<FormData>({
        mode: '',
        enabled: true
    });

    const [errors, setErrors] = useState<FormErrors>({
        mode: null,
        enabled: null
    });

    const handleFieldChange = (field: keyof FormData, value: string) => {
        setErrors((prev) => ({ ...prev, [field]: null }));
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
    }

    return <>
        <div className={styles.app}>
            <div className={styles.header}>
                <div className={styles.content}>
                    <span className={styles.appName}>Cardbit</span>
                    <h2 className={styles.title}></h2>
                </div>
                <Button variant='white' isSquared>
                    <FontAwesomeIcon icon={faXmark} />
                </Button>
            </div>
            <div className={styles.step}></div>
            <div className={styles.footer}>
                {step > 0 && <Button variant='grey'>{dict.buttons.prev}</Button>}
                {step == 0 && <div></div>}
                {step < MAX_STEPS && <Button>{dict.buttons.next} <FontAwesomeIcon icon={faArrowRight} /></Button>}
                {step == MAX_STEPS && <Button>{dict.buttons.send}</Button>}
            </div>
        </div>
    </>
}