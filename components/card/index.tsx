import React from 'react'
import { useRouter } from 'next/router'
import Button from '../button'

const noop = () => {}

interface CardProps {
  title: string
  description: string
  redirect?: string
  onClick?: React.MouseEventHandler
}

const Card: React.FC<CardProps> = ({ title, description, redirect, onClick }) => {
  const router = useRouter()
  const _onClick = onClick ? onClick : redirect ? React.useCallback(()=> router.push(redirect),[]) : noop
  return (
    <div>
      <div>
        {title}
      </div>
      <div>
        {description}
      </div>
      <div>
        <Button onClick={_onClick}>
          Click
        </Button>
      </div>
    </div>
  )
}

export default Card
