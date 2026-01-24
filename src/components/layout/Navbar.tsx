'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavbarProps {
    locale: string;
    navigationDict: {
        solutions: string;
        modularWes: string;
        technology: string;
        digitalTwin: string;
        company: string;
        contact: string;
    };
}

export default function Navbar({ locale, navigationDict }: NavbarProps) {
    const pathname = usePathname();

    const redirectedPathname = (targetLocale: string) => {
        if (!pathname) return '/';
        const segments = pathname.split('/');
        segments[1] = targetLocale;
        return segments.join('/');
    };

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.container} container`}>
                <Link href={`/${locale}`} className={styles.logo}>
                    <img
                        src="/assets/images/logos/bss-logisq-logo.svg"
                        alt="BSS LogisQ"
                        className={styles.logoImage}
                    />
                </Link>

                <div className={styles.links}>
                    <Link href={`/${locale}/solutions`} className={styles.link}>
                        {navigationDict.solutions}
                    </Link>
                    <Link href={`/${locale}/technology/modular-wes`} className={styles.link}>
                        {navigationDict.modularWes}
                    </Link>
                    <Link href={`/${locale}/technology`} className={styles.link}>
                        {navigationDict.technology}
                    </Link>
                    <Link href={`/${locale}/technology/digital-twin`} className={styles.link}>
                        {navigationDict.digitalTwin}
                    </Link>
                    <Link href={`/${locale}/company`} className={styles.link}>
                        {navigationDict.company}
                    </Link>
                </div>

                <div className={styles.actions}>
                    <div className={styles.langSwitcher}>
                        <Link
                            href={redirectedPathname('en')}
                            className={`${styles.langBtn} ${locale === 'en' ? styles.active : ''}`}
                        >
                            EN
                        </Link>
                        <span className={styles.divider}>|</span>
                        <Link
                            href={redirectedPathname('de')}
                            className={`${styles.langBtn} ${locale === 'de' ? styles.active : ''}`}
                        >
                            DE
                        </Link>
                    </div>

                    <Link href={`/${locale}/contact`} className={styles.cta}>
                        {navigationDict.contact}
                    </Link>
                </div>
            </div>
        </nav>
    );
}
