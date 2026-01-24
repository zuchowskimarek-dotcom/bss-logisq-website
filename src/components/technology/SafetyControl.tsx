import styles from './TechComponents.module.css';
import RichText from '@/components/common/RichText';

interface SafetyControlProps {
    dict: {
        title: string;
        intro: string;
        p1: string;
        p2: string;
        p3: string;
    };
}

export default function SafetyControl({ dict }: SafetyControlProps) {
    return (
        <section className={`${styles.section} ${styles.boundaries}`}>
            <div className={styles.container}>
                <h2 className={styles.headline}>{dict.title}</h2>
                <p className={styles.subheadline}>
                    <RichText text={dict.intro} />
                </p>
                <div className={styles.stackList}>
                    <div className={styles.stackItem}>
                        <span className={styles.check}>01</span>
                        <div className={styles.itemText}><RichText text={dict.p1} /></div>
                    </div>
                    <div className={styles.stackItem}>
                        <span className={styles.check}>02</span>
                        <p><RichText text={dict.p2} /></p>
                    </div>
                    <div className={styles.stackItem}>
                        <span className={styles.check}>03</span>
                        <p><RichText text={dict.p3} /></p>
                    </div>
                </div>

                <div className={styles.diagramWrapper}>
                    <img
                        src="/images/diagrams/diagram_process_scope.png"
                        alt="Process Scope Diagram"
                        className={styles.diagram}
                    />
                    <p className={styles.caption}>Figure 3: ProcessScope Enforcement</p>
                </div>
            </div>
        </section>
    );
}
