import React from 'react';
import styles from './ModuleBadge.module.css';

interface ModuleBadgeProps {
    label: string; // Formatting: "Name|Nickname" or just "Name"
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

export default function ModuleBadge({ label, size = 'md', className = '' }: ModuleBadgeProps) {
    const [name, nick] = label.includes('|') ? label.split('|') : [label, null];

    return (
        <div className={`${styles.badge} ${styles[size]} ${className}`}>
            <span className={styles.name}>{name}</span>
            {nick && (
                <>
                    <span className={styles.separator}>|</span>
                    <span className={styles.nick}>{nick}</span>
                </>
            )}
        </div>
    );
}
