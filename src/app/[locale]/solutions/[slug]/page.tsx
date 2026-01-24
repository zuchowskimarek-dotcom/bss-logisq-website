import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './SolutionDetail.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const dict = await getDictionary(locale);
    const solution = dict.solutionDetails[slug as keyof typeof dict.solutionDetails];

    if (!solution) return {};

    return {
        title: solution.meta.title,
        description: solution.meta.description,
        alternates: {
            canonical: `/${locale}/solutions/${slug}`,
        },
    };
}

export default async function SolutionDetailPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const dict = await getDictionary(locale);

    const solution = dict.solutionDetails[slug as keyof typeof dict.solutionDetails];

    if (!solution) {
        notFound();
    }

    return (
        <main className={styles.main}>
            {/* Hero Section */}
            <header className={styles.header}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{solution.hero.title}</h1>
                    <p className={styles.subtitle}>{solution.hero.subtitle}</p>
                </div>
            </header>

            {/* 1. Requirements */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{solution.requirements.title}</h2>
                    <ul className={styles.list}>
                        {solution.requirements.items.map((item: string, i: number) => (
                            <li key={i} className={styles.listItem}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 2. Challenges */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{solution.challenges.title}</h2>
                    <ul className={styles.list}>
                        {solution.challenges.items.map((item: string, i: number) => (
                            <li key={i} className={styles.listItem}>{item}</li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* 3. Support */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{solution.support.title}</h2>
                    <div className={styles.supportText}>
                        <p>{solution.support.text}</p>
                    </div>
                </div>
            </section>

            {/* 4. Capabilities */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{solution.capabilities.title}</h2>
                    <div className={styles.list}>
                        {solution.capabilities.items.map((item: string, i: number) => (
                            <div key={i} className={styles.listItem}>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Stable Semantics */}
            <section className={`${styles.section} ${styles.semanticsSection}`}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>{solution.semantics.title}</h2>
                    <div className={styles.semanticsText}>
                        <p>{solution.semantics.text}</p>
                    </div>
                </div>
            </section>

            {/* 6. Next Steps */}
            <section className={styles.nextSteps}>
                <div className={styles.container}>
                    <h2>Ready to get started?</h2>
                    <div className={styles.ctaRow}>
                        <Link href={`/${locale}/technology`} className={styles.primaryBtn}>
                            {solution.nextSteps.techLink}
                        </Link>
                        <Link href={`/${locale}/contact`} className={styles.secondaryBtn}>
                            {solution.nextSteps.contactLink}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
