import styles from './navbar.module.css'
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <nav className={styles.navContainer}>
      <div className={styles.navDiv}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/contact" className={styles.navLink}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar