'use client';

import React from 'react';
import Icon from '@/components/common/Icon';
import styles from './DevyonQVisual.module.css';

export default function DevyonQVisual() {
    return (
        <div className={styles.visualContainer}>
            <div className={styles.neuralNetwork}>
                {/* Neural Nodes */}
                <div className={`${styles.node} ${styles.inputNode}`} style={{ top: '20%', left: '10%' }}></div>
                <div className={`${styles.node} ${styles.inputNode}`} style={{ top: '50%', left: '10%' }}></div>
                <div className={`${styles.node} ${styles.inputNode}`} style={{ top: '80%', left: '10%' }}></div>

                <div className={`${styles.node} ${styles.hiddenNode}`} style={{ top: '30%', left: '35%' }}></div>
                <div className={`${styles.node} ${styles.hiddenNode}`} style={{ top: '60%', left: '35%' }}></div>
                <div className={`${styles.node} ${styles.hiddenNode}`} style={{ top: '40%', left: '65%' }}></div>
                <div className={`${styles.node} ${styles.hiddenNode}`} style={{ top: '70%', left: '65%' }}></div>

                <div className={`${styles.node} ${styles.outputNode}`} style={{ top: '50%', left: '90%' }}></div>

                {/* Connections (simplified SVG for clarity) */}
                <svg className={styles.connections}>
                    {/* Input to Hidden 1 */}
                    <line x1="10%" y1="20%" x2="35%" y2="30%" className={styles.line} />
                    <line x1="10%" y1="50%" x2="35%" y2="30%" className={styles.line} />
                    <line x1="10%" y1="50%" x2="35%" y2="60%" className={styles.line} />
                    <line x1="10%" y1="80%" x2="35%" y2="60%" className={styles.line} />

                    {/* Hidden 1 to Hidden 2 */}
                    <line x1="35%" y1="30%" x2="65%" y2="40%" className={styles.line} />
                    <line x1="35%" y1="30%" x2="65%" y2="70%" className={styles.line} />
                    <line x1="35%" y1="60%" x2="65%" y2="40%" className={styles.line} />
                    <line x1="35%" y1="60%" x2="65%" y2="70%" className={styles.line} />

                    {/* Hidden 2 to Output */}
                    <line x1="65%" y1="40%" x2="90%" y2="50%" className={styles.line} />
                    <line x1="65%" y1="70%" x2="90%" y2="50%" className={styles.line} />
                </svg>

                {/* Processing Pulses */}
                <div className={styles.pulse} style={{ top: '20%', left: '10%', animationDelay: '0s' }}></div>
                <div className={styles.pulse} style={{ top: '50%', left: '10%', animationDelay: '0.5s' }}></div>
                <div className={styles.pulse2} style={{ top: '35%', left: '35%', animationDelay: '1.2s' }}></div>
                <div className={styles.pulse2} style={{ top: '65%', left: '35%', animationDelay: '1.4s' }}></div>
                <div className={styles.pulse3} style={{ top: '50%', left: '90%', animationDelay: '2.5s' }}></div>
            </div>

            {/* Chat/Interface Overlay */}
            <div className={styles.chatInterface}>
                <div className={styles.chatMessage}>
                    <span className={styles.userIcon}>
                        <Icon name="user" size={16} />
                    </span>
                    <span className={styles.text}>Optimiere die Einlagerung für Zone B.</span>
                </div>
                <div className={`${styles.chatMessage} ${styles.aiMessage}`}>
                    <span className={styles.aiIcon}>
                        <Icon name="ai_avatar" size={16} />
                    </span>
                    <span className={styles.text}>Analyse läuft... 30% Effizienzsteigerung möglich durch dynamische Fachvergabe.</span>
                </div>
            </div>
        </div>
    );
}
