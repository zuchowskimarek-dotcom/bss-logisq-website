'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './LifecycleOrbit.module.css';

interface LifecycleOrbitProps {
    dict: {
        title: string;
        subtitle: string;
        projectPhase: {
            title: string;
            steps: { id: string; label: string; desc: string }[];
        };
        operationsPhase: {
            title: string;
            steps: { id: string; label: string; desc: string }[];
        };
        iterationLabel: string;
        noDowntimeLabel: string;
        benefits: { icon: string; text: string }[];
    };
}

export default function LifecycleOrbit({ dict }: LifecycleOrbitProps) {
    const [activePhase, setActivePhase] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projectSteps = dict.projectPhase.steps;
    const opsSteps = dict.operationsPhase.steps;

    return (
        <section className={styles.lifecycle} ref={containerRef}>
            <div className="container">
                <header className={styles.header}>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <p className={styles.subtitle}>{dict.subtitle}</p>
                </header>

                <div className={`${styles.orbitContainer} ${isVisible ? styles.visible : ''}`}>
                    {/* SVG Orbit Diagram */}
                    <svg
                        className={styles.orbitSvg}
                        viewBox="0 0 800 600"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Background gradient */}
                        <defs>
                            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                                <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.3" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Project Phase Arc (top half) */}
                        <path
                            className={styles.orbitPath}
                            d="M 100 300 C 100 100, 700 100, 700 300"
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="3"
                            strokeDasharray="8 4"
                        />

                        {/* Operations Phase Arc (bottom loop) */}
                        <path
                            className={styles.orbitPath}
                            d="M 700 300 C 700 450, 500 520, 400 520 C 300 520, 100 450, 100 300"
                            fill="none"
                            stroke="url(#pathGradient)"
                            strokeWidth="3"
                            strokeDasharray="8 4"
                        />

                        {/* Iteration loop indicator (WARP-Simulation) */}
                        <path
                            className={styles.iterationLoop}
                            d="M 450 140 C 520 100, 580 100, 550 140 C 520 180, 480 180, 450 140"
                            fill="none"
                            stroke="var(--color-primary)"
                            strokeWidth="2"
                            markerEnd="url(#arrowhead)"
                        />

                        {/* Arrow marker */}
                        <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-primary)" />
                            </marker>
                        </defs>

                        {/* Project Phase Nodes */}
                        {projectSteps.map((step, i) => {
                            const positions = [
                                { x: 100, y: 300 },  // Vertrag
                                { x: 200, y: 180 },  // Anforderungen
                                { x: 350, y: 120 },  // XyronQ Design
                                { x: 500, y: 120 },  // WARP
                                { x: 580, y: 160 },  // Simulation
                                { x: 700, y: 300 },  // GO-LIVE
                            ];
                            const pos = positions[i] || { x: 400, y: 300 };
                            const isActive = activePhase === step.id;
                            const isGoLive = step.id === 'golive';

                            return (
                                <g
                                    key={step.id}
                                    className={`${styles.node} ${isActive ? styles.active : ''} ${isGoLive ? styles.golive : ''}`}
                                    onMouseEnter={() => setActivePhase(step.id)}
                                    onMouseLeave={() => setActivePhase(null)}
                                    style={{ animationDelay: `${i * 0.15}s` }}
                                >
                                    <circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r={isGoLive ? 28 : 22}
                                        className={styles.nodeCircle}
                                        filter={isGoLive ? "url(#glow)" : undefined}
                                    />
                                    <text
                                        x={pos.x}
                                        y={pos.y + 5}
                                        className={styles.nodeLabel}
                                        textAnchor="middle"
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </text>
                                    <text
                                        x={pos.x}
                                        y={pos.y + (isGoLive ? 50 : 42)}
                                        className={styles.nodeText}
                                        textAnchor="middle"
                                    >
                                        {step.label}
                                    </text>
                                </g>
                            );
                        })}

                        {/* Operations Phase Nodes */}
                        {opsSteps.map((step, i) => {
                            const positions = [
                                { x: 650, y: 400 },  // Betrieb
                                { x: 500, y: 480 },  // Change Request
                                { x: 350, y: 500 },  // Design-Änderung
                                { x: 200, y: 450 },  // WARP/Simulation
                                { x: 120, y: 380 },  // Upgrade
                            ];
                            const pos = positions[i] || { x: 400, y: 450 };
                            const isActive = activePhase === step.id;

                            return (
                                <g
                                    key={step.id}
                                    className={`${styles.node} ${styles.opsNode} ${isActive ? styles.active : ''}`}
                                    onMouseEnter={() => setActivePhase(step.id)}
                                    onMouseLeave={() => setActivePhase(null)}
                                    style={{ animationDelay: `${(projectSteps.length + i) * 0.15}s` }}
                                >
                                    <circle
                                        cx={pos.x}
                                        cy={pos.y}
                                        r={18}
                                        className={styles.nodeCircle}
                                    />
                                    <text
                                        x={pos.x}
                                        y={pos.y + 4}
                                        className={styles.nodeLabel}
                                        textAnchor="middle"
                                        fontSize="10"
                                    >
                                        {step.id === 'upgrade' ? '↺' : ''}
                                    </text>
                                    <text
                                        x={pos.x}
                                        y={pos.y + 35}
                                        className={styles.nodeText}
                                        textAnchor="middle"
                                    >
                                        {step.label}
                                    </text>
                                </g>
                            );
                        })}

                        {/* Labels */}
                        <text x="400" y="60" className={styles.phaseLabel} textAnchor="middle">
                            {dict.projectPhase.title}
                        </text>
                        <text x="400" y="560" className={styles.phaseLabel} textAnchor="middle">
                            {dict.operationsPhase.title}
                        </text>

                        {/* Iteration label */}
                        <text x="515" y="85" className={styles.iterationLabel} textAnchor="middle">
                            {dict.iterationLabel}
                        </text>

                        {/* No downtime badge */}
                        <g className={styles.badge}>
                            <rect x="50" y="360" width="140" height="30" rx="15" fill="var(--color-primary)" opacity="0.1" />
                            <text x="120" y="380" className={styles.badgeText} textAnchor="middle">
                                {dict.noDowntimeLabel}
                            </text>
                        </g>
                    </svg>

                    {/* Active Phase Description */}
                    <div className={styles.description}>
                        {activePhase && (
                            <p className={styles.descText}>
                                {[...projectSteps, ...opsSteps].find(s => s.id === activePhase)?.desc}
                            </p>
                        )}
                        {!activePhase && (
                            <p className={styles.descHint}>
                                Hover über einen Schritt für Details
                            </p>
                        )}
                    </div>
                </div>

                {/* Benefits as inline list */}
                <div className={styles.benefits}>
                    {dict.benefits.map((benefit, i) => (
                        <div key={i} className={styles.benefitItem}>
                            <span className={styles.benefitIcon}>{benefit.icon}</span>
                            <span className={styles.benefitText}>{benefit.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
