'use client';

import styles from './PageHero.module.css';

interface PageHeroProps {
    /** Small category label above headline (optional) */
    category?: string;
    /** Main headline (6-10 words, single line) */
    headline: string;
    /** Clarifier sentence (max 20 words) */
    clarifier?: string;
    /** Optional definition box content */
    definition?: string;
    /** Archetype determines visual styling */
    archetype: 'sell' | 'explain' | 'prove';
}

export default function PageHero({
    category,
    headline,
    clarifier,
    definition,
    archetype,
}: PageHeroProps) {
    return (
        <header className={`${styles.hero} ${styles[archetype]}`}>
            <div className="container">
                {category && (
                    <span className={styles.category}>{category}</span>
                )}
                <h1 className={styles.headline}>{headline}</h1>
                {clarifier && (
                    <p className={styles.clarifier}>{clarifier}</p>
                )}
                {definition && (
                    <div className={styles.definition}>
                        {definition}
                    </div>
                )}
            </div>
        </header>
    );
}
