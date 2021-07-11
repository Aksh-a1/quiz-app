import React from 'react'
import { GetStaticProps } from 'next'
import Card from '../components/card'
import {
  getListOfQuizzes,
  ListOfQuizzesResponse
} from '../utils/contentfulApiCalls'
import QuizzesI from '../types/Quizzes'
import styles from '../styles/pages/Quizzes.module.scss'

interface Props {
  quizzes: QuizzesI[]
}

export const getStaticProps: GetStaticProps = async () => {
  const quizzes: ListOfQuizzesResponse = await getListOfQuizzes()
  if (quizzes.type === 'ERROR') {
    return {
      redirect: {
        destination: '/error',
        permanent: false
      }
    }
  }
  return {
    props: {
      quizzes: quizzes.data
    }
  }
}

const Quizzes: React.FC<Props> = ({ quizzes }) => {
  return (
    <div className={styles.grid}>
      {quizzes.map((quiz) => (
        <Card title={quiz.name} description={quiz.description} key={quiz.id} />
      ))}
    </div>
  )
}

export default Quizzes
