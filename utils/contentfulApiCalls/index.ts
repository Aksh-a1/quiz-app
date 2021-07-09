import { createClient } from 'contentful'
import IQuizzes from '../../types/Quizzes'
import { SuccessErrorType } from '../../types/SuccessErrorType'

export interface ListOfQuizzesResponse {
  type: SuccessErrorType
  data?: IQuizzes[]
}

const space = process.env.CONTENTFUL_SPACE_ID as string
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN as string
const client = createClient({
  space,
  accessToken
})
export const getListOfQuizzes = async (): Promise<ListOfQuizzesResponse> => {
  const response = await client.getEntries<IQuizzes>({
    content_type: 'quizDetails'
  })
  const { items } = response
  if (items === undefined) {
    return {
      type: 'ERROR'
    }
  }
  const listOfQuizzes = items.map((item) => {
    const fields = item.fields
    const sys = item.sys
    return {
      ...fields,
      id: sys.id
    }
  })
  return {
    type: 'SUCCESS',
    data: listOfQuizzes
  }
}
