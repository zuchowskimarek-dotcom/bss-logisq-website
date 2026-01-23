import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './Technology.module.css';

export default async function TechnologyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const t = dict.technologyPage;

    return (
        <main className={styles.main}>
            {/* 1. Header: Unapologetically Technical */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{t.title}</h1>
                    <p className={styles.subtitle}>{t.subtitle}</p>
                </div>
            </header>

            {/* 2. Intro: The Core Philosophy */}
            <section className={styles.intro}>
                <div className="container">
                    <p className={styles.introText}>{t.intro}</p>
                </div>
            </section>

            {/* 3. The Tech Stack: Semantic Authority Concept */}
            <section className={styles.stackSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{t.stack.title}</h2>
                    <div className={styles.stackGrid}>
                        {t.stack.layers.map((layer: any, i: number) => (
                            <div key={i} className={styles.stackLayer}>
                                <div className={styles.layerHeader}>
                                    <span className={styles.layerRole}>{layer.role}</span>
                                    <h3>{layer.name}</h3>
                                </div>
                                <div className={styles.layerDesc}>
                                    <p>{layer.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Execution Model: Visualizing the "Manifest" flow */}
            <section className={styles.modelSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{t.model.title}</h2>
                    <p className={styles.modelDesc}>{t.model.desc}</p>

                    <div className={styles.flowDiagram}>
                        {t.model.flow.map((step: string, i: number) => (
                            <div key={i} className={styles.flowStep}>
                                {step}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Security: Intents & ProcessScope */}
            <section className={styles.securitySection}>
                <div className="container">
                    <div className={styles.securityBox}>
                        <h2 className={styles.sectionTitle}>{t.security.title}</h2>
                        <p>{t.security.desc}</p>
                        <div className={styles.intentsCode}>
                            {t.security.intents}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
