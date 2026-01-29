'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './ProjectJourney.module.css';

interface Step {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    details: string[];
    visual: 'handshake' | 'design' | 'simulation' | 'golive' | 'operations' | 'service';
    nextOptions?: { label: string; target: string }[];
}

interface ProjectJourneyProps {
    dict: {
        title: string;
        subtitle: string;
        steps: Step[];
        backToDesign: string;
        proceedLabel: string;
        changeRequestLabel: string;
    };
}

export default function ProjectJourney({ dict }: ProjectJourneyProps) {
    const [activeSteps, setActiveSteps] = useState<string[]>(['contract']);
    const [currentStep, setCurrentStep] = useState('contract');
    const containerRef = useRef<HTMLDivElement>(null);

    const steps = dict.steps;
    const stepMap = new Map(steps.map(s => [s.id, s]));

    const handleProceed = (targetId: string) => {
        if (!activeSteps.includes(targetId)) {
            setActiveSteps([...activeSteps, targetId]);
        }
        setCurrentStep(targetId);

        // Scroll to new step
        setTimeout(() => {
            const element = document.getElementById(`step-${targetId}`);
            element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    const handleBackToDesign = () => {
        // Reset to design step, removing simulation and beyond
        const designIndex = steps.findIndex(s => s.id === 'design');
        const newActiveSteps = steps.slice(0, designIndex + 1).map(s => s.id);
        setActiveSteps(newActiveSteps);
        setCurrentStep('design');

        setTimeout(() => {
            const element = document.getElementById('step-design');
            element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    };

    const handleRestart = () => {
        setActiveSteps(['contract']);
        setCurrentStep('contract');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const renderVisual = (visual: string, isActive: boolean) => {
        const baseClass = `${styles.visual} ${isActive ? styles.active : ''}`;

        // Map visual keys to image filenames
        const imageMap: Record<string, string> = {
            'handshake': 'step_contract.png',
            'design': 'step_design.png',
            'simulation': 'step_simulation.png',
            'golive': 'step_golive.png',
            'operations': 'step_operations.png',
            'service': 'step_service.png'
        };

        const imagePath = `/assets/images/solution-by-design/${imageMap[visual]}`;

        return (
            <div className={baseClass}>
                <img
                    src={imagePath}
                    alt={dict.steps.find(s => s.visual === visual)?.title || visual}
                    className={styles.illustrationImage}
                />
            </div>
        );
    };

    const getNextStep = (currentId: string): Step | undefined => {
        const currentIndex = steps.findIndex(s => s.id === currentId);
        return steps[currentIndex + 1];
    };

    const isLastStep = (stepId: string) => {
        return steps.findIndex(s => s.id === stepId) === steps.length - 1;
    };

    return (
        <section className={styles.journey} ref={containerRef}>
            <div className="container">
                <header className={styles.header}>
                    <h2 className={styles.title}>{dict.title}</h2>
                    <p className={styles.subtitle}>{dict.subtitle}</p>
                </header>

                <div className={styles.stepsContainer}>
                    {steps.map((step, index) => {
                        const isVisible = activeSteps.includes(step.id);
                        const isActive = currentStep === step.id;
                        const isSimulation = step.id === 'simulation';

                        if (!isVisible) return null;

                        return (
                            <div
                                key={step.id}
                                id={`step-${step.id}`}
                                className={`${styles.step} ${isActive ? styles.active : ''} ${styles.slideIn}`}
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</div>

                                <div className={styles.stepContent}>
                                    <div className={styles.visualWrapper}>
                                        {renderVisual(step.visual, isActive)}
                                    </div>

                                    <div className={styles.textContent}>
                                        <h3 className={styles.stepTitle}>{step.title}</h3>
                                        <p className={styles.stepSubtitle}>{step.subtitle}</p>
                                        <p className={styles.stepDescription}>{step.description}</p>

                                        {step.details && step.details.length > 0 && (
                                            <ul className={styles.detailsList}>
                                                {step.details.map((detail, i) => (
                                                    <li key={i}>{detail}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Navigation buttons */}
                                        {isActive && !isLastStep(step.id) && (
                                            <div className={styles.navigation}>
                                                {isSimulation ? (
                                                    <>
                                                        <button
                                                            className={styles.backButton}
                                                            onClick={handleBackToDesign}
                                                        >
                                                            ← {dict.backToDesign}
                                                        </button>
                                                        <button
                                                            className={styles.proceedButton}
                                                            onClick={() => handleProceed(getNextStep(step.id)?.id || '')}
                                                        >
                                                            {dict.proceedLabel} →
                                                        </button>
                                                    </>
                                                ) : (
                                                    <button
                                                        className={styles.proceedButton}
                                                        onClick={() => handleProceed(getNextStep(step.id)?.id || '')}
                                                    >
                                                        {dict.proceedLabel} →
                                                    </button>
                                                )}
                                            </div>
                                        )}

                                        {isLastStep(step.id) && isActive && (
                                            <div className={styles.navigation}>
                                                <button
                                                    className={styles.changeRequestButton}
                                                    onClick={handleBackToDesign}
                                                >
                                                    ↺ {dict.changeRequestLabel}
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
