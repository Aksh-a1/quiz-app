import React from 'react'
import styles from './button.module.scss'

const noop = () => {}

interface ButtonProps {
  children?: React.ReactNode
  text?: String
  variant?: 'PRIMARY' | 'SECONDARY' | 'OUTLINED'
  onClick?: React.MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  variant = 'PRIMARY',
  onClick = noop
}) => {
  const classes =
    variant === 'PRIMARY'
      ? styles.primary
      : variant === 'SECONDARY'
      ? styles.secondary
      : styles.outlined
  return children ? (
    <button onClick={onClick} className={classes}>{children}</button>
  ) : (
    <button onClick={onClick} className={classes}>{text}</button>
  )
}

export default Button
