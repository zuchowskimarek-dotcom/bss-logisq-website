'use client';

import Link from 'next/link';
import styles from './SolutionsHub.module.css';

interface SolutionCard {
    slug: string;
    title: string;
    teaser: string;
    cta: string;
}

interface SolutionsHubSection {
    title: string;
    cards: SolutionCard[];
}

interface SolutionsHubDict {
    category: string;
    headline: string;
    subline: string;
    sectionA: SolutionsHubSection;
    sectionB: SolutionsHubSection;
    sectionC: SolutionsHubSection;
}

interface SolutionsHubProps {
    dict: SolutionsHubDict;
    locale: string;
}

export default function SolutionsHub({ dict, locale }: SolutionsHubProps) {
    const sections = [
        { data: dict.sectionA },
        { data: dict.sectionB },
        { data: dict.sectionC },
    ];

    return (
        <section id="solutions" className={styles.solutionsHub}>
            <div className="container">
                <header className={styles.header}>
                    <span className={styles.category}>{dict.category}</span>
                    <h2 className={styles.headline}>{dict.headline}</h2>
                    <p className={styles.subline}>{dict.subline}</p>
                </header>

                {sections.map((section, idx) => (
                    <div key={idx} className={styles.section}>
                        <h3 className={styles.sectionTitle}>{section.data.title}</h3>
                        <div className={styles.grid}>
                            {section.data.cards.map((card, i) => (
                                <div key={i} className={styles.card}>
                                    <h4 className={styles.cardTitle}>{card.title}</h4>
                                    <p className={styles.cardDesc}>{card.teaser}</p>
                                    <Link
                                        href={`/${locale}/solutions/${card.slug}`}
                                        className={styles.cardLink}
                                    >
                                        {card.cta}
                                        <span className={styles.arrow}>→</span>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
