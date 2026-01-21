'use client';

import Link from 'next/link';
import Breakpoint from '../Breakpoint/Breakpoint';
import styles from './Footer.module.css'

interface FooterProps {
    lang: string;
    dict: Record<string, any>;
};

export default function Footer({ lang, dict }: FooterProps) {
    return <footer className={styles.footer}>
        <Breakpoint>
            <div className={styles.columns}>
                <div className={styles.column}>
                    <div className={styles.logo}>
                        <h4 className={styles.logoTitle}>//Comentia</h4>
                    </div>

                    <p className={styles.disclaimer}>© Comentia • All rights reserved</p>
                </div>
                <div className={styles.column}>
                    <p className={styles.title}>Comentia</p>
                    <ul className={styles.list}>
                        <li className={styles.listItem}>
                            <Link href={`/${lang}`}>{dict.header.home}</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link href={`/${lang}/features`}>{dict.header.features}</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link href={`/${lang}/pricing`}>{dict.header.pricing}</Link>
                        </li>
                        <li className={styles.listItem}>
                            <Link href={`/${lang}/faq`}>FAQ</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <p className={styles.title}>Legal</p>
                </div>
            </div>
        </Breakpoint>
    </footer>
}