'use client';

import { useState } from 'react';
import styles from './EventBanner.module.css';

interface EventBannerProps {
    dict: {
        active: boolean;
        text: string;
        linkUrl: string;
        linkLabel: string;
    };
}

export default function EventBanner({ dict }: EventBannerProps) {
    const [isVisible, setIsVisible] = useState(true);

    if (!dict.active || !isVisible) {
        return null;
    }

    return (
        <div className={styles.banner}>
            <span>{dict.text}</span>
            <a
                href={dict.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
            >
                {dict.linkLabel}
            </a>
            <button
                className={styles.closeButton}
                onClick={() => setIsVisible(false)}
                aria-label="Close banner"
            >
                ×
            </button>
        </div>
    );
}
