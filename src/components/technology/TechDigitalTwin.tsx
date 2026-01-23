import styles from './TechComponents.module.css';
import RichText from '@/components/common/RichText';

interface TechDigitalTwinProps {
    dict: {
        title: string;
        intro: string;
        bridge: string;
    };
}

export default function TechDigitalTwin({ dict }: TechDigitalTwinProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.headline}>{dict.title}</h2>
                <p className={styles.subheadline}>{dict.intro}</p>
                <div className={styles.bridge}>
                    <RichText text={dict.bridge} />
                </div>
            </div>
        </section>
    );
}
