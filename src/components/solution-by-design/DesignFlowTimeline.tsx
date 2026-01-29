'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './DesignFlowTimeline.module.css';

interface FlowStep {
    num: string;
    title: string;
    desc: string;
    icon: string;
}

interface DesignFlowTimelineProps {
    title: string;
    steps: FlowStep[];
}

export default function DesignFlowTimeline({ title, steps }: DesignFlowTimelineProps) {
    const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // Animate steps in sequence
                    steps.forEach((_, index) => {
                        setTimeout(() => {
                            setVisibleSteps((prev) => [...prev, index]);
                        }, index * 300);
                    });
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (timelineRef.current) {
            observer.observe(timelineRef.current);
        }

        return () => observer.disconnect();
    }, [steps]);

    const renderIcon = (iconName: string): React.ReactNode => {
        const icons: Record<string, React.ReactNode> = {
            handshake: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                    <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21a3 3 0 0 1 4.22 0l2.75 2.75" />
                    <path d="m18 15-2-2" />
                    <path d="m15 18-2-2" />
                </svg>
            ),
            document: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                </svg>
            ),
            layers: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2" />
                    <polyline points="2 17 12 22 22 17" />
                    <polyline points="2 12 12 17 22 12" />
                </svg>
            ),
            simulation: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                    <path d="M6 8h.01M9 8h.01" />
                    <path d="M13 8l3 3-3 3" />
                </svg>
            ),
            rocket: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </svg>
            ),
            play: (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
            ),
        };
        return icons[iconName] || icons.play;
    };

    return (
        <section className={styles.timeline} ref={timelineRef}>
            <div className="container">
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.flowContainer}>
                    <div className={styles.flowLine} />
                    <div className={styles.steps}>
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className={`${styles.step} ${visibleSteps.includes(index) ? styles.visible : ''}`}
                            >
                                <div className={styles.stepIcon}>
                                    {renderIcon(step.icon)}
                                </div>
                                <div className={styles.stepNum}>{step.num}</div>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
