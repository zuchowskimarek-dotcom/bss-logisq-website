"use client";

import React, { useState } from 'react';
import styles from './ProcessCarousel.module.css';
import RichText from '@/components/common/RichText';

interface Process {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface ProcessCarouselProps {
    dict: {
        title: string;
        intro: string;
        items: Process[];
    };
}

export default function ProcessCarousel({ dict }: ProcessCarouselProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.headline}>{dict.title}</h2>
                <p className={styles.subheadline}>
                    <RichText text={dict.intro} />
                </p>

                <div className={styles.carouselContainer}>
                    <div className={styles.tabs}>
                        {dict.items.map((process, index) => (
                            <button
                                key={process.id}
                                className={`${styles.tab} ${activeIndex === index ? styles.active : ''}`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <span className={styles.tabIndex}>{(index + 1).toString().padStart(2, '0')}</span>
                                <span className={styles.tabTitle}>{process.title}</span>
                            </button>
                        ))}
                    </div>

                    <div className={styles.content} key={activeIndex}>
                        <div className={styles.visualArea}>
                            <img
                                src={dict.items[activeIndex].image}
                                alt={dict.items[activeIndex].title}
                                className={styles.visual}
                            />
                        </div>
                        <div className={styles.textArea}>
                            <h3 className={styles.itemTitle}>{dict.items[activeIndex].title}</h3>
                            <p className={styles.itemDescription}>
                                <RichText text={dict.items[activeIndex].description} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
