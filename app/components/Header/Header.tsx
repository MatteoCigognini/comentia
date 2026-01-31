'use client';
import { useState } from 'react';
import styles from './Header.module.css'
import Breakpoint from '../Breakpoint/Breakpoint';
import Link from 'next/link';
import Button from '../Buttons/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

type HeaderProps = {
    lang: string;
    dict: Record<string, any>;
    activeLink: string;
    isTransparent?: boolean;
};

export default function Header({ lang, dict, activeLink = '', isTransparent = false }: HeaderProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const handleMenuMobileClick = () => {
        setIsMobileMenuOpen(true);
    }

    const handleMobileMenuClose = () => {
        setIsMobileMenuOpen(false);
    }

    return <>
        <header className={`${styles.header} ${isTransparent ? styles.transparent : ''}`}>
            <Breakpoint>
                <div className={styles.headerContainer}>
                    <button className={styles.menuMobileButton} onClick={handleMenuMobileClick}><FontAwesomeIcon icon={faBars} /></button>
                    <div className={styles.logo}>
                        <h1 className={styles.logoTitle}>//Comentia</h1>
                    </div>
                    <nav className={`${styles.nav} ${styles.noMobile}`}>
                        <Link href="/" className={`${styles.link} ${activeLink === '' ? styles.active : ''}`}>{dict.header.home}</Link>
                        <Link href="/pricing" className={`${styles.link} ${activeLink === 'pricing' ? styles.active : ''}`}>{dict.header.pricing}</Link>
                        <Link href="/blog" className={`${styles.link} ${activeLink === 'blog' ? styles.active : ''}`}>{dict.header.blog}</Link>
                    </nav>
                    <div className={styles.controls}>
                        <Link href={`/${lang}/app`}>
                            <Button variant={isTransparent ? 'white' : undefined} title={dict.header.tickets}>{dict.generic.getStarted}</Button>
                        </Link>
                    </div>
                </div>
            </Breakpoint>
        </header>

        {isMobileMenuOpen && <div className={styles.mobileMenuBackdrop}>
            <div className={styles.mobileMenu}>
                <div className={styles.mobileMenuHeader}>
                    <div className={styles.logo}>
                        <h1 className={styles.logoTitle}>//Comentia</h1>
                    </div>
                    <button className={styles.closeButton} onClick={handleMobileMenuClose}><FontAwesomeIcon icon={faXmark} /></button>
                </div>
                <div className={styles.content}>
                    <Link href="/" className={`${styles.link} ${activeLink === '' ? styles.active : ''}`}>{dict.header.home}</Link>
                    <Link href="/features" className={`${styles.link} ${activeLink === 'features' ? styles.active : ''}`}>{dict.header.features}</Link>
                    <Link href="/pricing" className={`${styles.link} ${activeLink === 'pricing' ? styles.active : ''}`}>{dict.header.pricing}</Link>
                    <Link href="/blog" className={`${styles.link} ${activeLink === 'blog' ? styles.active : ''}`}>Blog</Link>
                </div>
            </div>
            <div className={styles.backdropSpace} onClick={handleMobileMenuClose}></div>
        </div>}
    </>
}