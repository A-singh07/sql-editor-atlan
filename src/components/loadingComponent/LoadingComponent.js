import React from 'react';
import styles from './loadingComponent.module.css'

const LoadingComponent = () => {
  return (
    <div className={styles.loadingContainer}>
      <p className={styles.loading}>
        Loading...
      </p>
    </div>
  )
}

export default LoadingComponent
