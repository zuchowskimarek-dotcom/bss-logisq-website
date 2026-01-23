import React from 'react';
import styles from './ProductOverview.module.css';
import ModuleBadge from '@/components/common/ModuleBadge/ModuleBadge';

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
                        <ModuleBadge label="WMS" size="sm" />
                        <p className={styles.moduleDesc}>{dict.wms}</p>
                    </div>

                    <div className={`${styles.card} ${styles.featuredCard}`}>
                        <ModuleBadge label="PER" size="sm" />
                        <p className={styles.moduleDesc}>{dict.per}</p>
                    </div>

                    <div className={styles.card}>
                        <ModuleBadge label="MFC" size="sm" />
                        <p className={styles.moduleDesc}>{dict.mfc}</p>
                    </div>

                    <div className={styles.card}>
                        <ModuleBadge label="Hub" size="sm" />
                        <p className={styles.moduleDesc}>{dict.hub}</p>
                    </div>

                    <div className={styles.card}>
                        <ModuleBadge label="Fleet" size="sm" />
                        <p className={styles.moduleDesc}>{dict.fleet}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductOverview;
