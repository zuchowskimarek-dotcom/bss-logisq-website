'use client';

import React from 'react';
import {
    Boxes,
    Container,
    Cloud,
    Plug,
    Activity,
    Rocket,
    Monitor,
    Eye,
    Bot,
    Library,
    Link,
    MousePointerClick,
    RefreshCw,
    Wand2,
    Cpu,
    MessageSquare,
    CheckCircle,
    Brain,
    Zap,
    ShieldCheck,
    ArrowUpCircle,
    Layout,
    Box,
    Factory,
    Truck,
    Settings,
    Target,
    TrendingUp,
    UserCog,
    User,
    Calendar,
    Search,
    Mail,
    Radio,
    Handshake
} from 'lucide-react';

export const iconMap = {
    // ArconQ
    'microservices': Boxes,
    'kubernetes': Container,
    'plugnplay': Plug,
    'monitoring': Activity,
    'deployment': Rocket,
    'hmi': Monitor,

    // XyronQ
    'visual': Eye,
    'fleet': Bot,
    'library': Library,
    'integration': Link,
    'lowcode': MousePointerClick,
    'agile': RefreshCw,

    // DevyonQ
    'auto': Wand2,
    'process': Cpu,
    'natural': MessageSquare,
    'validation': CheckCircle,
    'learning': Brain,
    'speed': Zap,

    // Benefits
    'future': ArrowUpCircle,
    'security': ShieldCheck,
    'accuracy': Target,
    'expert': UserCog,
    'scale': TrendingUp,

    // Layers
    'layer_physical': Factory,
    'layer_transport': Truck,
    'layer_process': Settings,
    'layer_comms': Link,

    // Interface
    'user': User,
    'human_bot': Bot,

    // Services / CTA
    'calendar': Calendar,
    'search': Search,
    'mail': Mail,
    'signal': Radio,
    'handshake': Handshake,
    'target': Target
};

export type IconName = keyof typeof iconMap;

interface IconProps {
    name: string;
    className?: string;
    size?: number;
}

export default function Icon({ name, className, size = 24 }: IconProps) {
    const LucideIcon = iconMap[name as IconName];

    if (!LucideIcon) {
        // Fallback if icon name doesn't match or is still an emoji (graceful degradation)
        if (name && (name.startsWith('http') || name.length > 20)) {
            // Assume it's an image URL for now if it's long, but here we expect short keys
            return null;
        }
        // If it's an emoji (length 1-2 usually), render it as text
        return <span className={className} style={{ fontSize: size }}>{name}</span>;
    }

    return <LucideIcon className={className} size={size} />;
}
