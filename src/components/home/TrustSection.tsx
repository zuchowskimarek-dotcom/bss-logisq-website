import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './TrustSection.module.css';

export default async function TrustSection({ locale }: { locale: string }) {
    const dict = await getDictionary(locale);

    return (
        <section className={styles.section}>
            <div className="container">
                <p className={styles.label}>Powered by the Industrial Cloud Leader</p>
                <div className={styles.logoGrid}>
                    <div className={styles.logoItem}>
                        <img
                            src="/assets/images/logos/arconq-logo.svg"
                            alt="ArconQ"
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.logoItem}>
                        <img
                            src="/assets/images/logos/xyronq-logo.svg"
                            alt="XyronQ"
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.logoItem}>
                        <img
                            src="/assets/images/logos/squadronq-logo.svg"
                            alt="SquadronQ"
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.logoItem}>
                        <img
                            src="/assets/images/logos/devyonq-logo.svg"
                            alt="DevyonQ"
                            className={styles.logo}
                        />
                    </div>
                    <div className={styles.logoItem}>
                        <img
                            src="/assets/images/logos/macrix.png"
                            alt="Macrix Technology Group"
                            className={styles.logo}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
