import React from 'react';
import styles from './ProductOverview.module.css';

interface ProductOverviewProps {
    dict: {
        title: string;
        wms: string;
        per: string;
        mfc: string;
        hub: string;
        fleet: string;
    };
}

const ProductOverview: React.FC<ProductOverviewProps> = ({ dict }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{dict.title}</h2>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.moduleBadge}>WMS</div>
                        <p className={styles.moduleDesc}>{dict.wms}</p>
                    </div>

                    <div className={`${styles.card} ${styles.featuredCard}`}>
                        <div className={styles.moduleBadge}>PER</div>
                        <p className={styles.moduleDesc}>{dict.per}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.moduleBadge}>MFC</div>
                        <p className={styles.moduleDesc}>{dict.mfc}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.moduleBadge}>Hub</div>
                        <p className={styles.moduleDesc}>{dict.hub}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.moduleBadge}>Fleet</div>
                        <p className={styles.moduleDesc}>{dict.fleet}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductOverview;
