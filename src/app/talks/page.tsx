import Empty from '@/components/Empty'
import Page from '@/components/layouts/Page'
import { getMetadata } from '@/utils/getMatedata'

export const metadata = getMetadata({ title: 'Talks', description: 'Talks Page', url: 'talks' })

export default function Talks() {
  return (
    <Page title="Talks">
      <div className="flex flex-col items-center justify-center mt-32 sm:mt-20">
        <Empty image="/images/website/inventing.svg" prompt="发表胡思乱想的地方, Comming soon :)" />
      </div>
    </Page>
  )
}
