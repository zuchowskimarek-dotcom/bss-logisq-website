import styles from './TechComponents.module.css';
import RichText from '@/components/common/RichText';

interface SystemBoundariesProps {
    dict: {
        title: string;
        intro: string;
        wms: string;
        per: string;
        mfc: string;
        hub: string;
        fleet: string;
    };
}

export default function SystemBoundaries({ dict }: SystemBoundariesProps) {
    return (
        <section className={`${styles.section} ${styles.boundaries}`}>
            <div className={styles.container}>
                <h2 className={styles.headline}>{dict.title}</h2>
                <p className={styles.subheadline}>
                    <RichText text={dict.intro} />
                </p>

                <div className={styles.table}>
                    <div className={styles.tableRow}>
                        <div className={styles.tableLabel}>WMS</div>
                        <div className={styles.tableValue}><RichText text={dict.wms} /></div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableLabel}>PER</div>
                        <div className={styles.tableValue}><RichText text={dict.per} /></div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableLabel}>MFC</div>
                        <div className={styles.tableValue}><RichText text={dict.mfc} /></div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableLabel}>CommunicationHUB</div>
                        <div className={styles.tableValue}><RichText text={dict.hub} /></div>
                    </div>
                    <div className={styles.tableRow}>
                        <div className={styles.tableLabel}>SquadronQ</div>
                        <div className={styles.tableValue}><RichText text={dict.fleet} /></div>
                    </div>
                </div>

                <div className={styles.diagramWrapper}>
                    <img
                        src="/images/diagrams/diagram_responsibilities.png"
                        alt="System Responsibilities Diagram"
                        className={styles.diagram}
                    />
                    <p className={styles.caption}>Figure 1: Responsibility & Boundary</p>
                </div>
            </div>
        </section>
    );
}
