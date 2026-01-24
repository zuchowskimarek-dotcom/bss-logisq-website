import { getDictionary } from '@/dictionaries/get-dictionary';
import { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const f = dict.fleetPage;
    return {
        title: `${f.title} | BSS LogisQ`,
        description: dict.meta.description,
        alternates: {
            canonical: `/${locale}/technology/fleet-management`,
        },
    };
}
import styles from './Fleet.module.css';

export default async function FleetPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const f = dict.fleetPage;

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{f.title}</h1>
                    <p className={styles.subtitle}>{f.subtitle}</p>
                </div>
            </header>

            <section className={styles.intro}>
                <div className="container">
                    <p className={styles.introText}>{f.intro}</p>
                </div>
            </section>

            <section className={styles.features}>
                <div className="container">
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.icon}>🤖</div>
                            <h3>{f.features.f1Title}</h3>
                            <p>{f.features.f1Desc}</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.icon}>🚦</div>
                            <h3>{f.features.f2Title}</h3>
                            <p>{f.features.f2Desc}</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.icon}>🔋</div>
                            <h3>{f.features.f3Title}</h3>
                            <p>{f.features.f3Desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
