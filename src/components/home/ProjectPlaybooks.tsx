'use client';

import { useState } from 'react';
import styles from './ProjectPlaybooks.module.css';

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
                    <p className={styles.narrative}>{dict.narrative}</p>
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
                            {/* Visual Placeholder for the requested Graphic/Carousel */}
                            <div className={`${styles.visual} ${styles[activeTab]}`}>
                                <div className={styles.placeholderLabel}>
                                    {activeTab === 'inbound' && '🚛 → 📦'}
                                    {activeTab === 'replenishment' && '📦 → 🏭'}
                                    {activeTab === 'picking' && '🏭 → 🚚'}
                                </div>
                                <div className={styles.placeholderText}>
                                    Visual Flow: {tabs.find(t => t.id === activeTab)?.label}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
