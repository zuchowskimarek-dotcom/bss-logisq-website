import styles from './TheProblem.module.css';

interface TheProblemProps {
    dict: {
        title: string;
        p1: string;
        p2: string;
        p3: string;
        bridge: string;
    };
}

export default function TheProblem({ dict }: TheProblemProps) {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.title}>{dict.title}</h2>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.icon}>⚠️</div>
                        <p>{dict.p1}</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>🔍</div>
                        <p>{dict.p2}</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.icon}>📅</div>
                        <p>{dict.p3}</p>
                    </div>
                </div>
                <div className={styles.bridge}>
                    <p>{dict.bridge}</p>
                </div>
            </div>
        </section>
    );
}
