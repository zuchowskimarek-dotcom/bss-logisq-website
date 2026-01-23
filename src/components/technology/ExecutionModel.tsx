import styles from './TechComponents.module.css';
import RichText from '@/components/common/RichText';

interface ExecutionModelProps {
    dict: {
        title: string;
        intro: string;
        p1: string;
        p2: string;
        p3: string;
    };
}

export default function ExecutionModel({ dict }: ExecutionModelProps) {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.headline}>{dict.title}</h2>
                <p className={styles.subheadline}>
                    <RichText text={dict.intro} />
                </p>

                <div className={styles.stackList}>
                    <div className={styles.stackItem}>
                        <span className={styles.check}>01</span>
                        <p><RichText text={dict.p1} /></p>
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
                        src="/images/diagrams/diagram_execution_flow.png"
                        alt="Execution Flow Diagram"
                        className={styles.diagram}
                    />
                    <p className={styles.caption}>Figure 2: Execution Sequence</p>
                </div>
            </div>
        </section>
    );
}
