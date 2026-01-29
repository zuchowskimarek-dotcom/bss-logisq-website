import styles from './Footer.module.css';
import Link from 'next/link';
import Icon from '@/components/common/Icon';

interface FooterProps {
    dict: {
        rights: string;
        imprint: string;
        privacy: string;
        contact: string;
        ctas?: {
            strategy: {
                title: string;
                desc: string;
                link: string;
            };
            audit: {
                title: string;
                desc: string;
                link: string;
            };
            newsletter: {
                title: string;
                desc: string;
                link: string;
            };
        };
    };
    locale: string;
}

export default function Footer({ dict, locale }: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                {/* CTA Section */}
                {dict.ctas && (
                    <div className={styles.ctaSection}>
                        <div className={styles.ctaCard}>
                            <div className={styles.ctaIcon}>
                                <Icon name="calendar" size={32} />
                            </div>
                            <h4 className={styles.ctaTitle}>{dict.ctas.strategy.title}</h4>
                            <p className={styles.ctaDesc}>{dict.ctas.strategy.desc}</p>
                            <Link href={`/${locale}/contact`} className={styles.ctaLink}>
                                {dict.ctas.strategy.link}
                            </Link>
                        </div>
                        <div className={styles.ctaCard}>
                            <div className={styles.ctaIcon}>
                                <Icon name="search" size={32} />
                            </div>
                            <h4 className={styles.ctaTitle}>{dict.ctas.audit.title}</h4>
                            <p className={styles.ctaDesc}>{dict.ctas.audit.desc}</p>
                            <Link href={`/${locale}/contact`} className={styles.ctaLink}>
                                {dict.ctas.audit.link}
                            </Link>
                        </div>
                        <div className={styles.ctaCard}>
                            <div className={styles.ctaIcon}>
                                <Icon name="mail" size={32} />
                            </div>
                            <h4 className={styles.ctaTitle}>{dict.ctas.newsletter.title}</h4>
                            <p className={styles.ctaDesc}>{dict.ctas.newsletter.desc}</p>
                            <Link href={`/${locale}/contact`} className={styles.ctaLink}>
                                {dict.ctas.newsletter.link}
                            </Link>
                        </div>
                    </div>
                )}

                <div className={styles.divider} />

                {/* Bottom Row */}
                <div className={styles.bottomRow}>
                    <p className={styles.copyright}>
                        © {currentYear} BSS LogisQ. {dict.rights}
                    </p>
                    <div className={styles.links}>
                        <Link href={`/${locale}/imprint`} className={styles.footerLink}>
                            {dict.imprint}
                        </Link>
                        <Link href={`/${locale}/privacy`} className={styles.footerLink}>
                            {dict.privacy}
                        </Link>
                        <Link href={`/${locale}/contact`} className={styles.footerLink}>
                            {dict.contact}
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
