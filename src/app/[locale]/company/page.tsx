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
    const t = dict.companyPage;

    return (
        <main className={styles.main}>
            {/* Header */}
            <header className={styles.header}>
                <span className={styles.badge}>{t.badge}</span>
                <h1 className={styles.title}>{t.title}</h1>
                <p className={styles.subtitle}>{t.subtitle}</p>
                <p className={styles.intro}>{t.intro}</p>
            </header>

            {/* Split Grid */}
            <div className="container">
                <div className={styles.grid}>
                    {/* BSS Card */}
                    <div className={`${styles.card} ${styles.bss}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.logoWrapper}>
                                <img
                                    src="/assets/images/logos/bss-logisq-logo.svg"
                                    alt="BSS Bohnenberg"
                                    className={styles.logo}
                                />
                            </div>
                            <div>
                                <h2 className={styles.cardTitle}>{t.bss.title}</h2>
                                <p className={styles.cardRole}>{t.bss.role}</p>
                            </div>
                        </div>
                        <p className={styles.cardDesc}>{t.bss.desc}</p>
                    </div>

                    {/* Macrix Card */}
                    <div className={`${styles.card} ${styles.macrix}`}>
                        <div className={styles.cardHeader}>
                            <div className={styles.logoWrapper}>
                                <img
                                    src="/assets/images/logos/macrix.png"
                                    alt="Macrix Technology Group"
                                    className={styles.logo}
                                />
                            </div>
                            <div>
                                <h2 className={styles.cardTitle}>{t.macrix.title}</h2>
                                <p className={styles.cardRole}>{t.macrix.role}</p>
                            </div>
                        </div>
                        <p className={styles.cardDesc}>{t.macrix.desc}</p>
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
