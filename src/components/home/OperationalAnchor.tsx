import styles from './OperationalAnchor.module.css';
import RichText from '@/components/common/RichText';

interface OperationalAnchorProps {
    dict: {
        title: string;
        intro: string;
        block1Title: string;
        block1Desc: string;
        block2Title: string;
        block2Desc: string;
        block3Title: string;
        block3Desc: string;
    };
}

export default function OperationalAnchor({ dict }: OperationalAnchorProps) {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.header}>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <p className={styles.intro}><RichText text={dict.intro} /></p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.number}>01</div>
                        <h3 className={styles.cardTitle}>{dict.block1Title}</h3>
                        <p className={styles.cardDesc}>{dict.block1Desc}</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.number}>02</div>
                        <h3 className={styles.cardTitle}>{dict.block2Title}</h3>
                        <p className={styles.cardDesc}>{dict.block2Desc}</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.number}>03</div>
                        <h3 className={styles.cardTitle}>{dict.block3Title}</h3>
                        <p className={styles.cardDesc}>{dict.block3Desc}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
