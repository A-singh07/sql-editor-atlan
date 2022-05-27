import React from 'react';
import styles from './buttonCustom.module.css'

const ButtonCustom = ({ btnText, primary, secondary, icon, customStyle }) => {
  return (
    <button
      className={styles.buttonClass + ` ${primary ? styles.primaryBtn : secondary ? styles.secondaryBtn : " "}`}
      style={customStyle}
    >
      {btnText}
    </button>
  )
}

export default ButtonCustom
