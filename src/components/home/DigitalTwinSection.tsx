import styles from './DigitalTwinSection.module.css';

interface DigitalTwinSectionProps {
    dict: {
        title: string;
        p1: string;
        p2: string;
    };
}

export default function DigitalTwinSection({ dict }: DigitalTwinSectionProps) {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <div className={styles.body}>
                        <p>{dict.p1}</p>
                        <p>{dict.p2}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
