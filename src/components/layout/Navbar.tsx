import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.container} container`}>
                <Link href="/" className={styles.logo}>
                    <span className="text-gradient">BSS</span> LogisQ
                </Link>

                <div className={styles.links}>
                    <Link href="/solutions" className={styles.link}>Solutions</Link>
                    <Link href="/solutions/modular-wes" className={styles.link}>Modular WES</Link>
                    <Link href="/solutions/digital-twin" className={styles.link}>Digital Twin</Link>
                    <Link href="/company" className={styles.link}>Company</Link>
                </div>

                <Link href="/contact" className={styles.cta}>
                    Contact Us
                </Link>
            </div>
        </nav>
    );
}
