import styles from './TheDifference.module.css';

interface TheDifferenceProps {
    dict: {
        title: string;
        p1: string;
        p2: string;
        p3: string;
        support: string;
    };
}

export default function TheDifference({ dict }: TheDifferenceProps) {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.label}>The Difference</span>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <span className={styles.check}>✓</span>
                            <p>{dict.p1}</p>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.check}>✓</span>
                            <p>{dict.p2}</p>
                        </li>
                        <li className={styles.item}>
                            <span className={styles.check}>✓</span>
                            <p>{dict.p3}</p>
                        </li>
                    </ul>
                    <div className={styles.support}>
                        <p>{dict.support}</p>
                    </div>
                </div>
                <div className={styles.visual}>
                    {/* Placeholder for semantic gap visual or abstract graphic */}
                    <div className={styles.abstractGraphic}>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                        <div className={styles.line}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
