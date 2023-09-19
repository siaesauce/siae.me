import Empty from '@/components/Empty'

export default function NotFound() {
  return (
    <div className="max-w-4xl m-auto flex flex-col items-center justify-center">
      <Empty image="/images/website/not-found.svg" prompt="This page could not be found :(" />
    </div>
  )
}
