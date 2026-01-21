import { getDictionary } from '@/dictionaries/get-dictionary';
import styles from './Contact.module.css';

export default async function ContactPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale);

    return (
        <main className={styles.main}>
            {/* Unified Header & Team Section */}
            <section className={styles.heroSection}>
                <div className="container">
                    <div className={styles.headerContent}>
                        <h1 className={styles.title}>Get in Touch</h1>
                        <p className={styles.subtitle}>
                            Ready to modernize your warehouse? Don't let outdated systems slow you down.
                            <br />
                            <span className={styles.highlight}>Meet the team that will take control of your operations.</span>
                        </p>
                    </div>

                    <div className={styles.teamGrid}>
                        {/* Marcin Krzywulski */}
                        <div className={styles.teamCard}>
                            <div className={styles.teamPhoto}>
                                <img
                                    src="/assets/images/team/marcin-krzywulski.png"
                                    alt="Marcin Krzywulski"
                                    className={styles.photo}
                                />
                            </div>
                            <div className={styles.teamInfo}>
                                <h3 className={styles.teamName}>Marcin Krzywulski</h3>
                                <p className={styles.teamRole}>Chief Executive Officer</p>
                                <div className={styles.teamContact}>
                                    <a href="tel:+48691400470" className={styles.contactLink}>
                                        📱 +48 691 400 470
                                    </a>
                                    <a href="mailto:marcin.krzywulski@bss-logisq.com" className={styles.contactLink}>
                                        ✉️ marcin.krzywulski@bss-logisq.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Józef Eckert */}
                        <div className={styles.teamCard}>
                            <div className={styles.teamPhoto}>
                                <img
                                    src="/assets/images/team/jozef-eckert.png"
                                    alt="Józef Eckert"
                                    className={styles.photo}
                                />
                            </div>
                            <div className={styles.teamInfo}>
                                <h3 className={styles.teamName}>Józef Eckert</h3>
                                <p className={styles.teamRole}>Project Manager</p>
                                <div className={styles.teamContact}>
                                    <a href="tel:+491728828422" className={styles.contactLink}>
                                        📱 +49 172 88 28 422
                                    </a>
                                    <a href="mailto:jozef.eckert@bss-logisq.com" className={styles.contactLink}>
                                        ✉️ jozef.eckert@bss-logisq.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Kamil Wilkosz */}
                        <div className={styles.teamCard}>
                            <div className={styles.teamPhoto}>
                                <img
                                    src="/assets/images/team/kamil-wilkosz.png"
                                    alt="Kamil Wilkosz"
                                    className={styles.photo}
                                />
                            </div>
                            <div className={styles.teamInfo}>
                                <h3 className={styles.teamName}>Kamil Wilkosz</h3>
                                <p className={styles.teamRole}>Product Manager</p>
                                <div className={styles.teamContact}>
                                    <a href="tel:+48887633322" className={styles.contactLink}>
                                        📱 +48 887 633 322
                                    </a>
                                    <a href="mailto:kamil.wilkosz@bss-logisq.com" className={styles.contactLink}>
                                        ✉️ kamil.wilkosz@bss-logisq.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Marek Zuchowski */}
                        <div className={styles.teamCard}>
                            <div className={styles.teamPhoto}>
                                <img
                                    src="/assets/images/team/marek-zuchowski.png"
                                    alt="Marek Zuchowski"
                                    className={styles.photo}
                                />
                            </div>
                            <div className={styles.teamInfo}>
                                <h3 className={styles.teamName}>Marek Zuchowski</h3>
                                <p className={styles.teamRole}>CEO / Chief Product Designer</p>
                                <div className={styles.teamContact}>
                                    <a href="tel:+491729762275" className={styles.contactLink}>
                                        📱 +49 172 976 2275
                                    </a>
                                    <a href="mailto:mz@macrix.eu" className={styles.contactLink}>
                                        ✉️ mz@macrix.eu
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Information */}
            <section className={styles.company}>
                <div className="container">
                    <div className={styles.companyBox}>
                        <img
                            src="/assets/images/logos/bss-logisq-logo.svg"
                            alt="BSS LogisQ"
                            className={styles.companyLogo}
                        />
                        <h2 className={styles.companyName}>BSS LogisQ Sp. z o. o.</h2>
                        <div className={styles.address}>
                            <p>ul. Marcelińska 90</p>
                            <p>60-324 Poznań, Poland</p>
                        </div>
                        <div className={styles.companyContact}>
                            <p>t: <a href="tel:+48618654723">+48 61 865 47 23</a></p>
                            <p>f: +48 61 865 47 24</p>
                            <p>w: <a href="https://www.bss-logisq.com" target="_blank" rel="noopener noreferrer">www.bss-logisq.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
