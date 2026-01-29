import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
    dict: {
        badge: string;
        productName: string;
        productTagline: string;
        titleHighlight: string;
        titleSuffix: string;
        description: string;
        anchor?: string;
        ctaPrimary: string;
        ctaSecondary: string;
    };
    locale: string;
}

export default function Hero({ dict, locale }: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={`${styles.container} container`}>
                <div className={styles.heroGrid}>
                    <div className={styles.content}>
                        <span className={styles.badge}>{dict.badge}</span>
                        <Link href={`/${locale}/technology/specifications`} className={styles.productCardLink}>
                            <div className={styles.productCard}>
                                <div className={styles.productAccent}></div>
                                <div className={styles.productContent}>
                                    <img
                                        src="/assets/images/logos/logisq-wes-logo.svg"
                                        alt="LogisQ-WES - Warehouse Execution System"
                                        className={styles.productLogo}
                                    />
                                </div>
                            </div>
                        </Link>
                        <h1 className={styles.title}>
                            <span className="text-gradient">{dict.titleHighlight}</span> {dict.titleSuffix}
                        </h1>
                        <p className={styles.description}>
                            {dict.description}
                        </p>
                        {dict.anchor && (
                            <p className={styles.anchor}>
                                {dict.anchor}
                            </p>
                        )}
                        <div className={styles.actions}>
                            <Link href={`/${locale}/solution-by-design`} className={styles.primaryBtn}>
                                {dict.ctaPrimary}
                            </Link>
                            <Link href={`/${locale}/contact`} className={styles.secondaryBtn}>
                                {dict.ctaSecondary}
                            </Link>
                        </div>
                    </div>
                    <div className={styles.heroImage}>
                        <img
                            src="/images/hero-bg.png"
                            alt="Modern automated warehouse"
                            className={styles.warehouseImage}
                        />
                    </div>
                </div>
            </div>


            <a href="#solutions" className={styles.scrollIndicator} aria-label="Scroll to solutions">
                <div className={styles.mouse}>
                    <div className={styles.wheel}></div>
                </div>
                <div className={styles.arrow}>
                    <span className={styles.chevron}></span>
                </div>
            </a>
        </section>
    );
}
