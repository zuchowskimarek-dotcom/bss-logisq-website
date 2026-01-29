import Link from 'next/link';
import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './Products.module.css';

export default async function ProductsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const content = dict.products.overview;

    return (
        <div className={styles.main}>
            <section className={styles.intro}>
                <h1 className={styles.title}>{content.title}</h1>
                <p className={styles.subtitle}>{content.subtitle}</p>
            </section>

            <section className={styles.grid}>
                {/* LogisQ WES Card */}
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        {/* Visual Placeholder for WES */}
                        <img src="/assets/images/technology/modular-wes.png" alt="LogisQ WES" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>{content.wes.title}</h2>
                        <p className={styles.cardDesc}>{content.wes.description}</p>
                        <div className={styles.cardAction}>
                            <Link href={`/${locale}/technology/modular-wes`} className={styles.link}>
                                {content.wes.cta}
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Kolli Scanner Card */}
                <div className={styles.card}>
                    <div className={styles.cardImage}>
                        {/* Placeholder until we have a real image */}
                        <img src="/assets/images/products/kolli-scanner-hero.png" alt="Kolli Scanner" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                    </div>
                    <div className={styles.cardContent}>
                        <h2 className={styles.cardTitle}>{content.kolliScanner.title}</h2>
                        <p className={styles.cardDesc}>{content.kolliScanner.description}</p>
                        <div className={styles.cardAction}>
                            <Link href={`/${locale}/products/kolli-scanner`} className={styles.link}>
                                {content.kolliScanner.cta}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
