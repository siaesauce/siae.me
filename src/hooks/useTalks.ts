import { useRequest } from 'ahooks'
import { useState } from 'react'

type TalksItem = {
  id: string
  date: string
  lastmod: string
  content: string
  images: string[]
  tags: string[]
}

export default function useTalks() {
  const [talks, setTalks] = useState<TalksItem[]>()
  const [message, setMessage] = useState('数据正在努力的赶来...')

  async function getTalksData() {
    try {
      const response = await fetch('/api/talks')

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      const { code, data }: { code: number; data: TalksItem[] } = await response.json()

      if (code === 404) {
        throw new Error('Not Found')
      }
      return data
    } catch (error) {
      throw new Error(error)
    }
  }

  useRequest(getTalksData, {
    retryCount: 3,
    onError: () => {
      setMessage('网络请求出错啦，正在尝试挽救 :(')
    },
    onSuccess: (data) => {
      setTalks(data)
    },
  })

  return { talks, message }
}
