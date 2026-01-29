import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './KolliScanner.module.css';

export default async function KolliScannerPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const content = dict.products.kolliScanner;

    return (
        <div className={styles.container}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1 className={styles.title}>{content.title}</h1>
                    <p className={styles.subtitle}>{content.subtitle}</p>
                    <p className={styles.intro}>{content.introduction}</p>
                </div>
                <div className={styles.heroVisual}>
                    {/* Using a placeholder image or reusing existing asset for now */}
                    <img
                        src={content.heroImage}
                        alt="Kolli Scanner"
                        className={styles.image}
                        // Fallback style if image missing
                        style={{ minHeight: '300px', backgroundColor: '#eef2f6', objectFit: 'contain' }}
                    />
                </div>
            </section>

            <section className={styles.features}>
                <div className={styles.featureGrid}>
                    {content.features.map((feature: any, index: number) => (
                        <div key={index} className={styles.featureCard}>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDesc}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
