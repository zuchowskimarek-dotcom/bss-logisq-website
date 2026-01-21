import { getDictionary } from '@/dictionaries/get-dictionary';
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
                            <div className={styles.heroImageLabel}>Live 3D Plant Visualization</div>
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
                            <p className={styles.imageCaption}>Inspection & Analysis Mode</p>
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
                    <h2 className={styles.sectionTitle}>Real-time Orchestration Capabilities</h2>
                    <div className={styles.showcaseGrid}>
                        <div className={styles.showcaseCard}>
                            <div className={styles.showcaseNumber}>01</div>
                            <h4>Live State Tracking</h4>
                            <p>Monitor every asset, vehicle, and process in real-time with millisecond precision</p>
                        </div>
                        <div className={styles.showcaseCard}>
                            <div className={styles.showcaseNumber}>02</div>
                            <h4>3D Spatial Context</h4>
                            <p>Visualize complex warehouse layouts and operations from any angle</p>
                        </div>
                        <div className={styles.showcaseCard}>
                            <div className={styles.showcaseNumber}>03</div>
                            <h4>Predictive Insights</h4>
                            <p>Anticipate bottlenecks and optimize resource allocation dynamically</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2D Real-time Monitoring */}
            <section className={styles.monitoring}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>2D Real-time Monitoring & Control</h2>
                    <p className={styles.sectionSubtitle}>
                        Comprehensive operational visibility through SquadronQ interface
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
                                <h3>Live Fleet Tracking</h3>
                                <p>Monitor all AGV positions and movements in real-time across your warehouse floor</p>
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
                                <h3>Battery Management</h3>
                                <p>Track vehicle charge levels and optimize charging schedules for maximum uptime</p>
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
                                <h3>Order Context</h3>
                                <p>Visualize order execution with spatial awareness and progress tracking</p>
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
                                <h3>Network Topology</h3>
                                <p>Understand vehicle connectivity and routing infrastructure at a glance</p>
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
