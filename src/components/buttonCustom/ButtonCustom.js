import React from 'react';
import styles from './buttonCustom.module.css'

const ButtonCustom = ({ btnText, primary, secondary, icon, customStyle, onClick }) => {
  return (
    <button
      className={styles.buttonClass + ` ${primary ? styles.primaryBtn : secondary ? styles.secondaryBtn : " "}`}
      style={customStyle}
      onClick={onClick}
    >
      {btnText}
    </button>
  )
}

export default ButtonCustom
