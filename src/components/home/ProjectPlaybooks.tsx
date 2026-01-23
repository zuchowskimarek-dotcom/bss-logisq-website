'use client';

import { useState } from 'react';
import styles from './ProjectPlaybooks.module.css';
import RichText from '@/components/common/RichText';

interface ProjectPlaybooksProps {
    dict: {
        title: string;
        inbound: string;
        replenishment: string;
        picking: string;
        narrative: string;
    };
}

export default function ProjectPlaybooks({ dict }: ProjectPlaybooksProps) {
    const [activeTab, setActiveTab] = useState<'inbound' | 'replenishment' | 'picking'>('inbound');

    const tabs = [
        { id: 'inbound', label: dict.inbound },
        { id: 'replenishment', label: dict.replenishment },
        { id: 'picking', label: dict.picking },
    ] as const;

    return (
        <section id="playbooks" className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <RichText text={dict.narrative} className={styles.narrative} />
                </div>

                <div className={styles.interface}>
                    <div className={styles.tabs}>
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    <div className={styles.viewport}>
                        <div className={styles.slideContent}>
                            <img
                                src={`/images/playbooks/flow_${activeTab}.png`}
                                alt={`${activeTab} flow diagram`}
                                className={styles.diagramImage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
