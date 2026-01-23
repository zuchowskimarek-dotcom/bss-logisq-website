import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './Company.module.css';
import { Building2, Code2 } from 'lucide-react'; // Using Lucide React for consistent icons

export default async function CompanyPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);
    const t = dict.trust;

    return (
        <main className={styles.main}>
            {/* Header */}
            <header className={styles.header}>
                <span className={styles.badge}>{t.badge}</span>
                <h1 className={styles.title}>{t.title}</h1>
                <p className={styles.description}>{t.description}</p>
            </header>

            {/* Split Grid */}
            <div className="container">
                <div className={styles.grid}>
                    {/* BSS Card */}
                    <div className={`${styles.card} ${styles.bss}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}>
                                <Building2 />
                            </div>
                            <h2 className={styles.cardTitle}>{t.bssTitle}</h2>
                        </div>
                        <p className={styles.cardDesc}>{t.bssDesc}</p>
                    </div>

                    {/* Macrix Card */}
                    <div className={`${styles.card} ${styles.macrix}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.cardIcon}>
                                <Code2 />
                            </div>
                            <h2 className={styles.cardTitle}>{t.macrixTitle}</h2>
                        </div>
                        <p className={styles.cardDesc}>{t.macrixDesc}</p>
                    </div>
                </div>

                {/* Footer synthesis */}
                <div className={styles.footer}>
                    <p className={styles.footerText}>{t.footer}</p>
                </div>
            </div>
        </main>
    );
}
