import React from 'react'
import { GetStaticProps } from 'next'
import {
  getListOfQuizzes,
  ListOfQuizzesResponse
} from '../utils/contentfulApiCalls'
import QuizzesI from '../types/Quizzes'

interface Props {
  quizzes: QuizzesI
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

const Home: React.FC<Props> = ({ quizzes }) => {
  console.log('props:', quizzes)
  return <main>{JSON.stringify(quizzes)}</main>
}

export default Home
