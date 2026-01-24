import { getDictionary } from '@/dictionaries/get-dictionary';
import { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const d = dict.digitalTwinPage;
    return {
        title: `${d.title} | BSS LogisQ`,
        description: dict.meta.description,
        alternates: {
            canonical: `/${locale}/technology/digital-twin`,
        },
    };
}
import styles from './DigitalTwin.module.css';

export default async function DigitalTwinPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const d = dict.digitalTwinPage;

    return (
        <main className={styles.main}>
            {/* Hero Section with Featured Visual */}
            <header className={styles.header}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div className={styles.heroText}>
                            <h1 className={styles.title}>{d.title}</h1>
                            <p className={styles.subtitle}>{d.subtitle}</p>
                            <p className={styles.introText}>{d.intro}</p>
                        </div>
                        <div className={styles.heroVisual}>
                            <img
                                src="/assets/images/features/digital-twin-3d-main.png"
                                alt="Digital Twin 3D Visualization"
                                className={styles.heroImage}
                            />
                            <div className={styles.heroImageLabel}>{d.visualLabel}</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Features with Integrated Visuals */}
            <section className={styles.features}>
                <div className="container">
                    {/* Feature 1 - Real-time Mirroring */}
                    <div className={styles.featureRow}>
                        <div className={styles.featureContent}>
                            <div className={styles.icon}>📡</div>
                            <h3 className={styles.featureTitle}>{d.features.f1Title}</h3>
                            <p className={styles.featureDesc}>{d.features.f1Desc}</p>
                        </div>
                        <div className={styles.featureVisual}>
                            <img
                                src="/assets/images/features/digital-twin-3d-iso.png"
                                alt="Isometric 3D View"
                                className={styles.featureImage}
                            />
                            <p className={styles.imageCaption}>{d.captionAnalysis}</p>
                        </div>
                    </div>

                    {/* Features 2 & 3 - Cards */}
                    <div className={styles.featureGrid}>
                        <div className={styles.featureCard}>
                            <div className={styles.icon}>🎯</div>
                            <h3>{d.features.f2Title}</h3>
                            <p>{d.features.f2Desc}</p>
                        </div>
                        <div className={styles.featureCard}>
                            <div className={styles.icon}>🤝</div>
                            <h3>{d.features.f3Title}</h3>
                            <p>{d.features.f3Desc}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Showcase */}
            <section className={styles.showcase}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{d.showcase.title}</h2>
                    <div className={styles.showcaseGrid}>
                        {d.showcase.items.map((item: { num: string; title: string; desc: string }, idx: number) => (
                            <div key={idx} className={styles.showcaseCard}>
                                <div className={styles.showcaseNumber}>{item.num}</div>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2D Real-time Monitoring */}
            <section className={styles.monitoring}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>{d.monitoring.title}</h2>
                    <p className={styles.sectionSubtitle}>
                        {d.monitoring.subtitle}
                    </p>

                    <div className={styles.monitoringGrid}>
                        {/* Live View */}
                        <div className={styles.monitorCard}>
                            <div className={styles.monitorVisual}>
                                <img
                                    src="/assets/images/features/squadron-live-view.png"
                                    alt="Squadron Live View - Real-time Fleet Tracking"
                                    className={styles.monitorImage}
                                />
                            </div>
                            <div className={styles.monitorContent}>
                                <h3>{d.monitoring.fleet.title}</h3>
                                <p>{d.monitoring.fleet.desc}</p>
                            </div>
                        </div>

                        {/* Battery Status */}
                        <div className={styles.monitorCard}>
                            <div className={styles.monitorVisual}>
                                <img
                                    src="/assets/images/features/squadron-battery.png"
                                    alt="Squadron Battery Management"
                                    className={styles.monitorImage}
                                />
                            </div>
                            <div className={styles.monitorContent}>
                                <h3>{d.monitoring.battery.title}</h3>
                                <p>{d.monitoring.battery.desc}</p>
                            </div>
                        </div>

                        {/* Order Tracking */}
                        <div className={styles.monitorCard}>
                            <div className={styles.monitorVisual}>
                                <img
                                    src="/assets/images/features/squadron-order-tracking.png"
                                    alt="Squadron Order Tracking"
                                    className={styles.monitorImage}
                                />
                            </div>
                            <div className={styles.monitorContent}>
                                <h3>{d.monitoring.order.title}</h3>
                                <p>{d.monitoring.order.desc}</p>
                            </div>
                        </div>

                        {/* AGV Cloud */}
                        <div className={styles.monitorCard}>
                            <div className={styles.monitorVisual}>
                                <img
                                    src="/assets/images/features/squadron-agv-cloud.png"
                                    alt="Squadron AGV Cloud Network"
                                    className={styles.monitorImage}
                                />
                            </div>
                            <div className={styles.monitorContent}>
                                <h3>{d.monitoring.topology.title}</h3>
                                <p>{d.monitoring.topology.desc}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Roadmap */}
            <section className={styles.roadmap}>
                <div className="container">
                    <div className={styles.roadmapBox}>
                        <div className={styles.roadmapBadge}>Roadmap</div>
                        <h2 className={styles.roadmapTitle}>{d.roadmapTitle}</h2>
                        <p className={styles.roadmapDesc}>{d.roadmapDesc}</p>
                    </div>
                </div>
            </section>
        </main>
    );
}
