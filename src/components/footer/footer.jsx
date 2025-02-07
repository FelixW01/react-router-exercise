// import { useEffect } from 'react';
import styles from './footer.module.css';

function Footer() {

  return (
    <>
    <footer className={styles.footerContainer}>
      <div className={styles.container}>
      </div>
      <div className={styles.footerDiv}>
        <p className={styles.copyright}>
          ©<span>{new Date().getFullYear()}</span> Bot-O-Mat, All rights
          reserved.
        </p>
      </div>
    </footer>
    </>
  )
}

export default Footer