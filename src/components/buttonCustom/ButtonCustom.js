import React from 'react';
import styles from './buttonCustom.module.css'

const ButtonCustom = ({ btnText, primary, secondary, leftIcon, rightIcon, customStyle, onClick }) => {
  return (
    <button
      className={styles.buttonClass + ` ${primary ? styles.primaryBtn : secondary ? styles.secondaryBtn : " "}`}
      style={customStyle}
      onClick={onClick}
    >

      {leftIcon}
      <span className={styles.text}>
        {btnText}
      </span>
      {rightIcon}
    </button>
  )
}

export default ButtonCustom
