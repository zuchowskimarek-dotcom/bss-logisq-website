import styles from './TechComponents.module.css';
import RichText from '@/components/common/RichText';

interface ArchitectureStackProps {
    dict: {
        title: string;
        intro: string;
        list: string;
        bridge: string;
    };
}

export default function ArchitectureStack({ dict }: ArchitectureStackProps) {
    // Split the comma-separated list
    const items = dict.list.split(',').map(s => s.trim());

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.headline}>{dict.title}</h2>
                <p className={styles.subheadline}>
                    <RichText text={dict.intro} />
                </p>

                <div className={styles.stackList}>
                    {items.map((item, i) => (
                        <div key={i} className={styles.stackItem}>
                            <span className={styles.check}>{(i + 1).toString().padStart(2, '0')}</span>
                            <p>{item}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.diagramWrapper}>
                    <img
                        src="/images/diagrams/diagram_platform_stack.png"
                        alt="Platform Stack Diagram"
                        className={styles.diagram}
                    />
                    <p className={styles.caption}>Figure 4: Platform Stack (ArconQ)</p>
                </div>

                <div className={styles.bridge}>
                    <RichText text={dict.bridge} />
                </div>
            </div>
        </section>
    );
}
