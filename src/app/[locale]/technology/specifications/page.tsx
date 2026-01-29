import { getDictionary } from '@/dictionaries/get-dictionary';
import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import styles from './Specifications.module.css';
import Image from 'next/image';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const m = dict.specificationsPage;
    return {
        title: `${m.title} | LogisQ-WES | BSS LogisQ`,
        description: m.metaDescription,
        alternates: {
            canonical: `/${locale}/technology/specifications`,
        },
    };
}

export default async function SpecificationsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const m = dict.specificationsPage;

    return (
        <main className={styles.main}>
            {/* Hero with Product Logo */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.productBadge}>
                            <Image
                                src="/assets/images/logos/logisq-wes-logo.png"
                                alt="LogisQ-WES"
                                width={400}
                                height={80}
                                className={styles.productLogo}
                                priority
                            />
                        </div>
                        <h1 className={styles.title}>{m.title}</h1>
                        <p className={styles.subtitle}>{m.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Core Specifications */}
            <section className={styles.specs}>
                <div className="container">
                    <div className={styles.specGrid}>
                        {m.specs.map((spec: { title: string; value: string; desc: string }, i: number) => (
                            <div key={i} className={styles.specCard}>
                                <span className={styles.specValue}>{spec.value}</span>
                                <h3 className={styles.specTitle}>{spec.title}</h3>
                                <p className={styles.specDesc}>{spec.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features List */}
            <section className={styles.features}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{m.featuresTitle}</h2>
                    <div className={styles.featureGrid}>
                        {m.features.map((feature: { title: string; desc: string }, i: number) => (
                            <div key={i} className={styles.featureCard}>
                                <div className={styles.featureIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                                    <p className={styles.featureDesc}>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Requirements */}
            <section className={styles.requirements}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{m.requirementsTitle}</h2>
                    <div className={styles.requirementsList}>
                        {m.requirements.map((req: { label: string; value: string }, i: number) => (
                            <div key={i} className={styles.requirementRow}>
                                <span className={styles.reqLabel}>{req.label}</span>
                                <span className={styles.reqValue}>{req.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
