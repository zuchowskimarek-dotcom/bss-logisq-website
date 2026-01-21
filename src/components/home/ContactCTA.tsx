import React from 'react';
import styles from './ContactCTA.module.css';

interface ContactCTAProps {
    dict: {
        title: string;
        subtitle: string;
        primary: string;
        secondary: string;
    };
}

const ContactCTA: React.FC<ContactCTAProps> = ({ dict }) => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <p className={styles.subtitle}>{dict.subtitle}</p>
                    <div className={styles.actions}>
                        <button className={styles.primaryBtn}>{dict.primary}</button>
                        <button className={styles.secondaryBtn}>{dict.secondary}</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
