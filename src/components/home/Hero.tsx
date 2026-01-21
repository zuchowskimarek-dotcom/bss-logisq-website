import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`${styles.container} container`}>
                <div className={styles.content}>
                    <span className={styles.badge}>Strategic Warehouse Logistics</span>
                    <h1 className={styles.title}>
                        Warehouse Execution System for <span className="text-gradient">Fully Automated</span> Logistics
                    </h1>
                    <p className={styles.description}>
                        LogisQ-WES enables complex warehouses with shorter project runtimes,
                        full transparency, and investment security through true modularity.
                    </p>
                    <div className={styles.actions}>
                        <a href="/solutions" className={styles.primaryBtn}>Explore Solutions</a>
                        <a href="/solutions/digital-twin" className={styles.secondaryBtn}>
                            View Digital Twin
                        </a>
                    </div>
                </div>
            </div>

            <div className={styles.visualSupport}>
                <div className={styles.glow}></div>
            </div>
        </section>
    );
}
