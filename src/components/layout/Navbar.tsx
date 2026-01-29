'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavbarProps {
    locale: string;
    navigationDict: {
        solutionByDesign: string;
        solutions: string;
        products: string;
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
                        src="/assets/images/logos/bss-logisq-black.svg"
                        alt="BSS LogisQ"
                        className={styles.logoImage}
                    />
                </Link>

                <div className={styles.links}>
                    <Link href={`/${locale}/solution-by-design`} className={`${styles.link} ${pathname?.startsWith(`/${locale}/solution-by-design`) ? styles.activeLink : ''}`}>
                        {navigationDict.solutionByDesign}
                    </Link>
                    <Link href={`/${locale}/products`} className={`${styles.link} ${pathname?.startsWith(`/${locale}/products`) ? styles.activeLink : ''}`}>
                        {navigationDict.products}
                    </Link>
                    <Link href={`/${locale}/technology`} className={`${styles.link} ${pathname === `/${locale}/technology` ? styles.activeLink : ''}`}>
                        {navigationDict.technology}
                    </Link>
                    <Link href={`/${locale}/technology/digital-twin`} className={`${styles.link} ${pathname === `/${locale}/technology/digital-twin` ? styles.activeLink : ''}`}>
                        {navigationDict.digitalTwin}
                    </Link>
                    <Link href={`/${locale}/company`} className={`${styles.link} ${pathname === `/${locale}/company` ? styles.activeLink : ''}`}>
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
