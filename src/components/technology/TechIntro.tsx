import styles from './TechComponents.module.css';
import RichText from '@/components/common/RichText';

interface TechIntroProps {
    dict: {
        title: string;
        body: string;
    };
}

export default function TechIntro({ dict }: TechIntroProps) {
    return (
        <section className={`${styles.section} ${styles.introSection}`}>
            <div className={styles.container}>
                <h1 className={styles.headline}>{dict.title}</h1>
                <p className={styles.subheadline}>
                    <RichText text={dict.body} />
                </p>
            </div>
        </section>
    );
}
