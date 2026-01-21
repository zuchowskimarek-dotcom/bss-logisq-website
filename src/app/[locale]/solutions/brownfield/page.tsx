import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './Brownfield.module.css';

export default async function BrownfieldPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const b = dict.brownfieldPage;

    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>{b.title}</h1>
                    <p className={styles.subtitle}>{b.subtitle}</p>
                </div>
            </header>

            <section className={styles.intro}>
                <div className="container">
                    <p className={styles.introText}>{b.intro}</p>
                </div>
            </section>

            <section className={styles.gridSection}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.block}>
                            <h3>{b.blocks.b1Title}</h3>
                            <p>{b.blocks.b1Desc}</p>
                        </div>
                        <div className={styles.block}>
                            <h3>{b.blocks.b2Title}</h3>
                            <p>{b.blocks.b2Desc}</p>
                        </div>
                        <div className={styles.block}>
                            <h3>{b.blocks.b3Title}</h3>
                            <p>{b.blocks.b3Desc}</p>
                        </div>
                        <div className={styles.block}>
                            <h3>{b.blocks.b4Title}</h3>
                            <p>{b.blocks.b4Desc}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
