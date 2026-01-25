import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from '@/components/solutions/Solutions.module.css';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';

export default async function SolutionsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const hub = dict.solutionsHub;

    const sections = [
        { data: hub.sectionA },
        { data: hub.sectionB },
        { data: hub.sectionC },
    ];

    return (
        <main className={styles.main}>
            <PageHero
                category={hub.category}
                headline={hub.headline}
                clarifier={hub.subline}
                archetype="sell"
            />

            {sections.map((section, idx) => (
                <section key={idx} className={styles.section}>
                    <div className="container">
                        <h2 className={styles.sectionTitle}>{section.data.title}</h2>
                        <div className={styles.grid}>
                            {section.data.cards.map((card: { title: string; teaser: string; slug: string; cta: string }, i: number) => (
                                <div key={i} className={styles.card}>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
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
                </section>
            ))}
        </main>
    );
}
