import React from 'react'
import { useRouter } from 'next/router'
import Button from '../components/button'

const Home: React.FC = () => {
  const router = useRouter()
  const onClick = React.useCallback(()=> router.push('/quizzes'),[])
  return (
    <div>
      <Button onClick={onClick} text={'Explore all quizzes!'}/>
    </div>
  )
}

export default Home
