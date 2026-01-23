import React from 'react';
import { useTheme } from 'next-themes';

interface PlaybookDiagramProps {
    type: 'inbound' | 'replenishment' | 'picking';
}

export default function PlaybookDiagram({ type }: PlaybookDiagramProps) {
    // Shared styles
    const strokeColor = "var(--color-outline)";
    const textColor = "var(--color-text-main)";
    const highlightColor = "var(--color-kinetic)";
    const railColor = "var(--color-border)";

    const renderFlow = () => {
        switch (type) {
            case 'inbound':
                return (
                    <g transform="translate(50, 50)">
                        <Step x={0} label="Dock Arrival" icon="🚛" />
                        <Arrow x={110} />
                        <Step x={220} label="Scan" icon="📸" />
                        <Arrow x={330} />
                        <Step x={440} label="Profile Assignment" icon="📋" />
                        <Arrow x={550} />
                        <Step x={660} label="Putaway Generation" icon="📦" />
                    </g>
                );
            case 'replenishment':
                return (
                    <g transform="translate(50, 50)">
                        <Step x={0} label="Low Stock Event" icon="📉" />
                        <Arrow x={110} />
                        <Step x={220} label="Task Prioritization" icon="⚡" />
                        <Arrow x={330} />
                        <Step x={440} label="Retrieval" icon="🏗️" />
                        <Arrow x={550} />
                        <Step x={660} label="Restock" icon="📥" />
                    </g>
                );
            case 'picking':
                return (
                    <g transform="translate(50, 50)">
                        <Step x={0} label="Order Received" icon="🛒" />
                        <Arrow x={110} />
                        <Step x={220} label="Wave Grouping" icon="🌊" />
                        <Arrow x={330} />
                        <Step x={440} label="Pick Task" icon="🤏" />
                        <Arrow x={550} />
                        <Step x={660} label="Consolidation" icon="📦" />
                    </g>
                );
        }
    };

    return (
        <svg viewBox="0 0 850 250" style={{ width: '100%', height: 'auto', maxHeight: '350px' }}>
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-outline)" />
                </marker>
            </defs>
            {/* Execution Runtime Rail */}
            <line x1="20" y1="200" x2="830" y2="200" stroke={railColor} strokeWidth="2" strokeDasharray="5,5" />
            <text x="425" y="220" textAnchor="middle" fill="var(--color-text-dim)" fontSize="14" letterSpacing="0.05em">
                EXECUTION RUNTIME (PER)
            </text>

            {/* Flow Elements */}
            {renderFlow()}
        </svg>
    );
}

const Step = ({ x, label, icon }: { x: number; label: string; icon: string }) => (
    <g transform={`translate(${x}, 0)`}>
        <circle cx="40" cy="40" r="45" fill="var(--color-bg)" stroke="var(--color-outline)" strokeWidth="3" />
        <text x="40" y="52" textAnchor="middle" fontSize="36">{icon}</text>
        <text x="40" y="105" textAnchor="middle" fill="var(--color-text-main)" fontSize="16" fontWeight="600">
            {label.split(' ').map((line, i) => (
                <tspan x="40" dy={i === 0 ? 0 : 20} key={i}>{line}</tspan>
            ))}
        </text>
    </g>
);

const Arrow = ({ x }: { x: number }) => (
    <g transform={`translate(${x}, 40)`}>
        <line x1="0" y1="0" x2="100" y2="0" stroke="var(--color-outline)" strokeWidth="3" markerEnd="url(#arrowhead)" />
    </g>
);
