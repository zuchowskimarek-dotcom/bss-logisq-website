import { getDictionary } from '@/dictionaries/get-dictionary';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Technology.module.css';
import RichText from '@/components/common/RichText';

export default async function TechnologyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const t = dict.technologyPage;

    return (
        <main className={styles.main}>
            {/* Anchor Image */}
            <figure className={styles.anchorFigure}>
                <Image
                    src="/images/diagrams/diagram_platform_stack.png"
                    alt="LogisQ-WES Platform Stack"
                    width={1024}
                    height={1024}
                    className={styles.anchorImage}
                    priority
                />
                <figcaption className={styles.anchorCaption}>
                    {t.overview.imageCaption}
                </figcaption>
            </figure>

            {/* Anchor Text */}
            <section className={styles.anchorTextSection}>
                <div className={styles.anchorTextContent}>
                    <RichText text={t.overview.anchorText} />
                </div>
            </section>

            {/* Navigation Grid */}
            <section className={styles.navGridSection}>
                <div className={styles.navGrid}>
                    {t.sections.map((section: { id: string; num: string; title: string; subtitle: string; desc: string; href: string }) => (
                        <Link
                            key={section.id}
                            href={`/${locale}${section.href}`}
                            className={styles.navCard}
                        >
                            <span className={styles.navNum}>{section.num}</span>
                            <h3 className={styles.navTitle}>{section.title}</h3>
                            <span className={styles.navSubtitle}>{section.subtitle}</span>
                            <p className={styles.navDesc}>{section.desc}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
