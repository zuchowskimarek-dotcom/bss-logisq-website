import React from 'react';
import styles from './ProductOverview.module.css';

interface ProductOverviewProps {
    dict: {
        title: string;
        subtitle: string;
        wmsTitle: string;
        wmsDesc: string;
        mfcTitle: string;
        mfcDesc: string;
        fleetTitle: string;
        fleetDesc: string;
        result: string;
    };
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ dict }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <p className={styles.subtitle}>{dict.subtitle}</p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.moduleBadge}>WMS</div>
                        <h3 className={styles.moduleTitle}>{dict.wmsTitle}</h3>
                        <p className={styles.moduleDesc}>{dict.wmsDesc}</p>
                    </div>

                    <div className={`${styles.card} ${styles.featuredCard}`}>
                        <div className={styles.moduleBadge}>MFC</div>
                        <h3 className={styles.moduleTitle}>{dict.mfcTitle}</h3>
                        <p className={styles.moduleDesc}>{dict.mfcDesc}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.moduleBadge}>Fleet</div>
                        <h3 className={styles.moduleTitle}>{dict.fleetTitle}</h3>
                        <p className={styles.moduleDesc}>{dict.fleetDesc}</p>
                    </div>
                </div>

                <div className={styles.footer}>
                    <p className={styles.result}>{dict.result}</p>
                </div>
            </div>
        </section>
    );
};

export default ProductOverview;
