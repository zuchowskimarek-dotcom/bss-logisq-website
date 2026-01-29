'use client';

import React from 'react';
import Icon from '@/components/common/Icon';
import styles from './ArconQVisual.module.css';

export default function ArconQVisual() {
    return (
        <div className={styles.visualContainer}>
            {/* Central Hub - The Platform */}
            <div className={styles.coreNode}>
                <div className={styles.coreIcon}>ArconQ</div>
                <div className={styles.corePulse}></div>
            </div>

            {/* Orbiting Service Nodes */}
            <div className={`${styles.serviceNode} ${styles.service1}`}>
                <div className={styles.nodeIcon}>
                    <Icon name="microservices" size={20} />
                </div>
                <span className={styles.nodeLabel}>Microservices</span>
            </div>

            <div className={`${styles.serviceNode} ${styles.service2}`}>
                <div className={styles.nodeIcon}>
                    <Icon name="kubernetes" size={20} />
                </div>
                <span className={styles.nodeLabel}>Kubernetes</span>
            </div>

            <div className={`${styles.serviceNode} ${styles.service3}`}>
                <div className={styles.nodeIcon}>
                    <Icon name="plugnplay" size={20} />
                </div>
                <span className={styles.nodeLabel}>SDK</span>
            </div>

            <div className={`${styles.serviceNode} ${styles.service4}`}>
                <div className={styles.nodeIcon}>
                    <Icon name="monitoring" size={20} />
                </div>
                <span className={styles.nodeLabel}>Monitoring</span>
            </div>

            <div className={`${styles.serviceNode} ${styles.service5}`}>
                <div className={styles.nodeIcon}>
                    <Icon name="deployment" size={20} />
                </div>
                <span className={styles.nodeLabel}>Deployment</span>
            </div>

            {/* Connection Lines (SVGs for simplicity) */}
            <svg className={styles.connections}>
                <line x1="50%" y1="50%" x2="50%" y2="15%" className={styles.connectionLine} />
                <line x1="50%" y1="50%" x2="85%" y2="30%" className={styles.connectionLine} />
                <line x1="50%" y1="50%" x2="80%" y2="75%" className={styles.connectionLine} />
                <line x1="50%" y1="50%" x2="20%" y2="75%" className={styles.connectionLine} />
                <line x1="50%" y1="50%" x2="15%" y2="30%" className={styles.connectionLine} />
            </svg>
        </div>
    );
}
