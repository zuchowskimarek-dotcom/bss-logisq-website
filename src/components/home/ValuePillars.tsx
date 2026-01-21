import React from 'react';
import styles from './ValuePillars.module.css';

interface Pillar {
    title: string;
    description: string;
    icon: string;
}

interface ValuePillarsProps {
    dict: {
        title1: string;
        desc1: string;
        title2: string;
        desc2: string;
        title3: string;
        desc3: string;
        title4: string;
        desc4: string;
        title5: string;
        desc5: string;
    };
}

const ValuePillars: React.FC<ValuePillarsProps> = ({ dict }) => {
    const pillars: Pillar[] = [
        { title: dict.title1, description: dict.desc1, icon: '⏱️' },
        { title: dict.title2, description: dict.desc2, icon: '🏭' },
        { title: dict.title3, description: dict.desc3, icon: '👁️' },
        { title: dict.title4, description: dict.desc4, icon: '🧩' },
        { title: dict.title5, description: dict.desc5, icon: '🛡️' },
    ];

    return (
        <section id="solutions" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {pillars.map((pillar, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <span className={styles.icon}>{pillar.icon}</span>
                            </div>
                            <h3 className={styles.title}>{pillar.title}</h3>
                            <p className={styles.description}>{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValuePillars;
