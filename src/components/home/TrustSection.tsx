import Link from 'next/link';
import styles from './TrustSection.module.css';

interface TrustSectionProps {
    dict: {
        title: string;
        cta1: string;
        cta2: string;
        cta3: string;
    };
    locale: string;
}

// NOTE: dict is passed from Parent now, not fetched async inside.
export default function TrustSection({ dict, locale }: TrustSectionProps) {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>{dict.title}</h2>

                    <div className={styles.ctaRow}>
                        <Link href={`/${locale}/technology`} className={styles.primaryBtn}>
                            {dict.cta1}
                        </Link>
                        <a href="#playbooks" className={styles.secondaryBtn}>
                            {dict.cta2}
                        </a>
                        <Link href={`/${locale}/contact`} className={styles.salesBtn}>
                            {dict.cta3}
                        </Link>
                    </div>

                    <div className={styles.divider}></div>

                    <div className={styles.logoGrid}>
                        <div className={styles.logoItem}>
                            <img src="/assets/images/logos/arconq-logo.svg" alt="ArconQ" className={styles.logo} />
                        </div>
                        <div className={styles.logoItem}>
                            <img src="/assets/images/logos/xyronq-logo.svg" alt="XyronQ" className={styles.logo} />
                        </div>
                        <div className={styles.logoItem}>
                            <img src="/assets/images/logos/squadronq-logo.svg" alt="SquadronQ" className={styles.logo} />
                        </div>
                        <div className={styles.logoItem}>
                            <img src="/assets/images/logos/macrix.png" alt="Macrix" className={styles.logo} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
