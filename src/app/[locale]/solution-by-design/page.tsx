import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './SolutionByDesign.module.css';
import Link from 'next/link';
import PageHero from '@/components/common/PageHero';
import ProjectJourney from '@/components/solution-by-design/ProjectJourney';

export default async function SolutionByDesignPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const sbd = dict.solutionByDesign;

    return (
        <main className={styles.main}>
            <PageHero
                category={sbd.category}
                headline={sbd.headline}
                clarifier={sbd.subline}
                archetype="explain"
            />

            <ProjectJourney dict={sbd.journey} />

            <section className={styles.cta}>
                <div className="container">
                    <h2 className={styles.ctaTitle}>{sbd.ctaTitle}</h2>
                    <div className={styles.ctaActions}>
                        <Link href={`/${locale}/technology`} className={styles.primaryBtn}>
                            {sbd.ctaTech}
                        </Link>
                        <Link href={`/${locale}/contact`} className={styles.secondaryBtn}>
                            {sbd.ctaContact}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
