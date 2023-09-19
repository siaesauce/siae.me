import Image from './Image'

export default function Empty({ image, prompt }: { image: string; prompt: string }) {
  return (
    <>
      <Image
        src={image}
        alt="Empty Image"
        width={300}
        height={300}
        className="w-60 h-60 sm:w-72 sm:h-72"
      ></Image>
      <h1 className="text-xl sm:text-3xl font-bold mt-4 text-gray-500 dark:text-gray-400 whitespace-nowrap">
        {prompt}
      </h1>
    </>
  )
}
