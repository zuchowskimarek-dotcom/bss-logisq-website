import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './ModularWes.module.css';

// Helper to render Name|Nickname format
function renderModuleLabel(text: string, styles: any) {
    if (!text.includes('|')) return text;
    const [name, nick] = text.split('|');
    return (
        <div className={styles.moduleLabel}>
            <span className={styles.moduleName}>{name}</span>
            <span className={styles.moduleSeparator}>|</span>
            <span className={styles.moduleNick}>{nick}</span>
        </div>
    );
}

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
            {/* 1. Hero / Definition: Bridges Sales Hook to Technical Reality */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{m.title}</h1>
                    <p className={styles.subtitle}>{m.subtitle}</p>
                </div>
            </header>

            {/* 2. Intro: Defines the Product (LogisQ = WMS + PER + MFC) */}
            <section className={styles.intro}>
                <div className="container">
                    <p className={styles.introText}>{m.intro}</p>

                    {/* New Product Structure Block */}
                    {m.productStructure && (
                        <div className={styles.structureBlock}>
                            <h3 className={styles.structureTitle}>{m.productStructure.title}</h3>
                            <p className={styles.structureDesc}>{m.productStructure.desc}</p>
                            <div className={styles.moduleGrid}>
                                <div className={styles.moduleCard}>{renderModuleLabel(m.productStructure.modules.wms, styles)}</div>
                                <div className={styles.moduleCard}>{renderModuleLabel(m.productStructure.modules.per, styles)}</div>
                                <div className={styles.moduleCard}>{renderModuleLabel(m.productStructure.modules.mfc, styles)}</div>
                                <div className={styles.moduleCard}>{renderModuleLabel(m.productStructure.modules.sq, styles)}</div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* 3. Comparison Table: WMS vs WCS vs WES (Directly answers 'Why WES?') */}
            {
                m.comparison && (
                    <section className={styles.comparisonSection}>
                        <div className="container">
                            <h2 className={styles.sectionTitle}>{m.comparison.title}</h2>
                            <p className={styles.sectionDesc}>{m.comparison.desc}</p>

                            <div className={styles.tableWrapper}>
                                <table className={styles.comparisonTable}>
                                    <thead>
                                        <tr>
                                            {m.comparison.cols.map((col: string, i: number) => (
                                                <th key={i}>{col}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {m.comparison.rows.map((row: any, i: number) => (
                                            <tr key={i}>
                                                <td className={styles.metricCell}>{row.metric}</td>
                                                <td>{row.wms}</td>
                                                <td>{row.wcs}</td>
                                                <td className={styles.highlightCell}>{row.wes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                )
            }

            {/* 4. Pillars: Explains the 'Modularity' concept in practice */}
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

            {/* 5. Link to Technology (Proof Layer) - Future Phase, for now Tech Intro */}
            <section className={styles.tech}>
                <div className="container">
                    <div className={styles.techBox}>
                        <h2 className={styles.techTitle}>{m.techTitle}</h2>
                        <p className={styles.techDesc}>{m.techDesc}</p>
                    </div>
                </div>
            </section>
        </main >
    );
}
