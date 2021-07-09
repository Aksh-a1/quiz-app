import React from 'react'
import { GetStaticProps } from 'next'
import { createClient } from 'contentful'

interface Props {
  quizzes: object
}

interface QuizzesI {
  id: string
  name: string
  description: string
  slug: string
}

export const getStaticProps: GetStaticProps = async () => {
  const space = process.env.CONTENTFUL_SPACE_ID as string
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string
  const client = createClient({
    space,
    accessToken
  })

  const response = await client.getEntries({ content_type: 'quizDetails' })
  const { items } = response
  const quizzes: QuizzesI[] = items.map((item) => {
    const fields = item.fields as QuizzesI
    const sys = item.sys
    return {
      ...fields,
      id: sys.id
    }
  })

  return {
    props: {
      quizzes
    }
  }
}

const Home: React.FC<Props> = ({ quizzes }) => {
  console.log('props:', quizzes)
  return (
    <main>
      {JSON.stringify(quizzes)}
    </main>
  )
}

export default Home
