import styles from './TechComponents.module.css';
import RichText from '@/components/common/RichText';

interface IntegrationAPIsProps {
    dict: {
        title: string;
        intro: string;
        steps: string;
        bridge: string;
    };
}

export default function IntegrationAPIs({ dict }: IntegrationAPIsProps) {
    const steps = dict.steps.split('→').map(s => s.trim());

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.headline}>{dict.title}</h2>
                <p className={styles.subheadline}>
                    <RichText text={dict.intro} />
                </p>

                <div className={styles.flowSteps}>
                    {steps.map((step, i) => (
                        <div key={i} className={styles.step}>
                            {step}
                        </div>
                    ))}
                </div>

                <div className={styles.diagramWrapper}>
                    <img
                        src="/images/diagrams/diagram_integration.png"
                        alt="Integration Flow Diagram"
                        className={styles.diagram}
                    />
                    <p className={styles.caption}>Figure 5: Event-Driven Integration</p>
                </div>

                <div className={styles.bridge}>
                    <RichText text={dict.bridge} />
                </div>
            </div>
        </section>
    );
}
