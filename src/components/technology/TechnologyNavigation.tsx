'use client';

import Link from 'next/link';
import Icon from '@/components/common/Icon';
import styles from './TechnologyNavigation.module.css';

interface NavItem {
    id: string;
    title: string;
    desc: string;
    link: string;
    icon: string;
}

interface TechnologyNavigationProps {
    dict: {
        title: string;
        items: NavItem[];
    };
    locale: string;
}

export default function TechnologyNavigation({ dict, locale }: TechnologyNavigationProps) {
    const getLink = (id: string) => {
        switch (id) {
            case 'platform': return `/${locale}/technology/platform`;
            case 'configuration': return `/${locale}/technology/configuration`;
            case 'ai': return `/${locale}/technology/ai-assistant`;
            case 'modular': return `/${locale}/technology/modular-wes`;
            case 'digitalTwin': return `/${locale}/technology/digital-twin`;
            default: return `/${locale}/technology`;
        }
    };

    return (
        <section className={styles.navSection}>
            <div className="container">
                <h2 className={styles.headline}>{dict.title}</h2>
                <div className={styles.grid}>
                    {dict.items.map((item) => (
                        <Link key={item.id} href={getLink(item.id)} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                <Icon name={item.icon} size={32} className={styles.icon} />
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.desc}>{item.desc}</p>
                                <span className={styles.fakeLink}>
                                    {item.link}
                                    <span className={styles.arrow}>→</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
