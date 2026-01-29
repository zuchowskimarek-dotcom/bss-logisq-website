import { getDictionary } from '@/dictionaries/get-dictionary';
import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import Link from 'next/link';
import XyronQVisual from '@/components/technology/visuals/XyronQVisual';
import Icon from '@/components/common/Icon';
import styles from './Configuration.module.css';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const d = dict.configurationPage;
    return {
        title: `${d.title} | BSS LogisQ`,
        description: d.subtitle,
        alternates: {
            canonical: `/${locale}/technology/configuration`,
        },
    };
}

export default async function ConfigurationPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const d = dict.configurationPage;

    return (
        <main className={styles.main}>
            {/* Hero */}
            <PageHero
                category={d.category}
                headline={d.title}
                clarifier={d.subtitle}
                archetype="explain"
            />

            {/* Visual */}
            <section className={styles.heroVisual}>
                <div className="container">
                    <XyronQVisual />
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capabilities}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{d.capabilities.title}</h2>
                    <p className={styles.sectionSubtitle}>{d.capabilities.subtitle}</p>
                    <div className={styles.capabilityGrid}>
                        {d.capabilities.items.map((cap: { icon: string; title: string; desc: string }, idx: number) => (
                            <div key={idx} className={styles.capabilityCard}>
                                <div className={styles.capabilityIcon}>
                                    <Icon name={cap.icon} size={32} />
                                </div>
                                <h3>{cap.title}</h3>
                                <p>{cap.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className={styles.benefits}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{d.benefits.title}</h2>
                    <div className={styles.benefitList}>
                        {d.benefits.items.map((benefit: { icon: string; title: string; desc: string }, idx: number) => (
                            <div key={idx} className={styles.benefitItem}>
                                <span className={styles.benefitIcon}>
                                    <Icon name={benefit.icon} size={24} />
                                </span>
                                <div>
                                    <h4>{benefit.title}</h4>
                                    <p>{benefit.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>{d.cta.title}</h2>
                    <p className={styles.ctaDesc}>{d.cta.desc}</p>
                    <Link href={`/${locale}/contact`} className={styles.ctaButton}>
                        {d.cta.button}
                    </Link>
                </div>
            </section>
        </main>
    );
}
