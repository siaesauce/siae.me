'use client'

import { compareDesc, formatDistanceStrict } from 'date-fns'

import Image from '@/components/Image'
import useTalks from '@/hooks/useTalks'

import Empty from './Empty'

export default function TalksList() {
  const { talks, message } = useTalks()

  return (
    <>
      {talks ? (
        talks
          .sort((value1, value2) => {
            return compareDesc(new Date(value1.date), new Date(value2.date))
          })
          .map((talk) => (
            <div
              key={talk.id}
              className="w-full mt-5 py-2 px-4 rounded-2xl border-2 border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <div className="flex justify-between">
                <div className="text-gray-900 dark:text-gray-200 font-semibold">@SIAE.SAUCE</div>
                <div className="text-gary-400 dark:text-gray-300 font-medium italic">
                  {formatDistanceStrict(new Date(talk.date), new Date(), {
                    addSuffix: true,
                  })}
                </div>
              </div>
              <div className="my-2">
                <div className="text-gray-700 dark:text-gray-300 font-bold">{talk.content}</div>
                {talk.images.length > 0 ? (
                  <div className="flex flex-row mt-1">
                    {talk.images.map((image) => (
                      <Image
                        key={image}
                        src={image}
                        width={74}
                        height={74}
                        alt="talk image"
                        className="first:ml-0 ml-2 rounded-md h-20 w-auto"
                      />
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="mt-1">
                {talk.tags.map((tag) => (
                  <a key={tag} href="#" className="text-blue-500 mr-1">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          ))
      ) : (
        <div className="flex flex-col items-center justify-center mt-32 sm:mt-20">
          <Empty image="/images/website/inventing.svg" prompt={message} />
        </div>
      )}
    </>
  )
}
