import styles from './TechComponents.module.css';
import RichText from '@/components/common/RichText';

interface FinalNoteProps {
    dict: {
        text: string;
    };
}

export default function FinalNote({ dict }: FinalNoteProps) {
    return (
        <section className={`${styles.section} ${styles.boundaries}`}>
            <div className={styles.container}>
                <div className={styles.finalNote}>
                    <RichText text={dict.text} />
                </div>
            </div>
        </section>
    );
}
