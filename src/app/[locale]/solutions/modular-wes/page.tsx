import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './ModularWes.module.css';

export default async function ModularWesPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const m = dict.modularWesPage;

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{m.title}</h1>
                    <p className={styles.subtitle}>{m.subtitle}</p>
                </div>
            </header>

            <section className={styles.intro}>
                <div className="container">
                    <p className={styles.introText}>{m.intro}</p>
                </div>
            </section>

            <section className={styles.pillars}>
                <div className="container">
                    <div className={styles.pillarList}>
                        <div className={styles.pillar}>
                            <div className={styles.pillarContent}>
                                <h3>{m.pillars.p1Title}</h3>
                                <p>{m.pillars.p1Desc}</p>
                            </div>
                        </div>
                        <div className={styles.pillar}>
                            <div className={styles.pillarContent}>
                                <h3>{m.pillars.p2Title}</h3>
                                <p>{m.pillars.p2Desc}</p>
                            </div>
                        </div>
                        <div className={styles.pillar}>
                            <div className={styles.pillarContent}>
                                <h3>{m.pillars.p3Title}</h3>
                                <p>{m.pillars.p3Desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.visuals}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Material Flow Orchestration</h2>
                    <div className={styles.visualBox}>
                        <img
                            src="/assets/images/features/mfc-topology.png"
                            alt="Material Flow Control Topology"
                            className={styles.visualImage}
                        />
                        <p className={styles.visualCaption}>Coordinated Control of Stackers, Cranes & Conveyors</p>
                    </div>
                </div>
            </section>

            <section className={styles.tech}>
                <div className="container">
                    <div className={styles.techBox}>
                        <h2 className={styles.techTitle}>{m.techTitle}</h2>
                        <p className={styles.techDesc}>{m.techDesc}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
