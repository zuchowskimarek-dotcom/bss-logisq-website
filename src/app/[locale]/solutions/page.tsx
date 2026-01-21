import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from '@/components/solutions/Solutions.module.css';

export default async function SolutionsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const s = dict.solutionsPage;

    const solutions = [
        { ...s.card1, href: `/${locale}/solutions/modular-wes` },
        { ...s.card2, href: `/${locale}/solutions/digital-twin` },
        { ...s.card3, href: `/${locale}/solutions/brownfield` },
        { ...s.card4, href: `/${locale}/solutions/fleet-management` },
    ];

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{s.title}</h1>
                    <p className={styles.subtitle}>{s.subtitle}</p>
                </div>
            </header>

            <section className={styles.intro}>
                <div className="container">
                    <p className={styles.introText}>{s.intro}</p>
                </div>
            </section>

            <section className={styles.gridSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {solutions.map((job, i) => (
                            <div key={i} className={styles.card}>
                                <h3 className={styles.cardTitle}>{job.title}</h3>
                                <p className={styles.cardDesc}>{job.desc}</p>
                                <a href={job.href} className={styles.cardLink}>
                                    {job.link}
                                    <span className={styles.arrow}>→</span>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
