'use client';

import React from 'react';
import styles from './XyronQVisual.module.css';

export default function XyronQVisual() {
    return (
        <div className={styles.visualContainer}>
            {/* Grid Background */}
            <div className={styles.grid}></div>

            {/* Blueprint Elements */}
            <div className={styles.blueprintArea}>
                {/* Warehouse Outline */}
                <div className={styles.warehouseOutline}>
                    <div className={styles.rackRow} style={{ top: '10%', left: '10%' }}></div>
                    <div className={styles.rackRow} style={{ top: '10%', left: '30%' }}></div>
                    <div className={styles.rackRow} style={{ top: '10%', left: '50%' }}></div>

                    {/* AGV Path */}
                    <svg className={styles.agvPath}>
                        <path d="M50 300 H550 V100 H350" className={styles.pathLine} />
                    </svg>

                    {/* AGV Unit */}
                    <div className={styles.agvUnit}></div>

                    {/* Markers */}
                    <div className={styles.marker} style={{ top: '5%', left: '5%' }}>A-01</div>
                    <div className={styles.marker} style={{ bottom: '10%', right: '10%' }}>Z-99</div>

                    {/* Measurement Lines */}
                    <div className={styles.measurementV} style={{ right: '-20px', top: '10%', height: '80%' }}>
                        <span>40m</span>
                    </div>
                    <div className={styles.measurementH} style={{ bottom: '-20px', left: '10%', width: '80%' }}>
                        <span>80m</span>
                    </div>
                </div>
            </div>

            {/* Overlay UI - Configuration Panel */}
            <div className={styles.configPanel}>
                <div className={styles.panelHeader}>Configurator</div>
                <div className={styles.panelRow}>
                    <span className={styles.label}>Layout Mode</span>
                    <span className={styles.value}>3D View</span>
                </div>
                <div className={styles.panelRow}>
                    <span className={styles.label}>Assets</span>
                    <span className={styles.value}>124</span>
                </div>
                <div className={styles.panelBar}>
                    <div className={styles.barFill}></div>
                </div>
            </div>
        </div>
    );
}
