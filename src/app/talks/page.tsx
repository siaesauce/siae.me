import TalksList from '@/components/TalksList'
import Page from '@/components/layouts/Page'
import { getMetadata } from '@/utils/getMatedata'

export const metadata = getMetadata({ title: 'Talks', description: 'Talks Page', url: 'talks' })

export default function Talks() {
  return (
    <Page title="Talks">
      <TalksList />
    </Page>
  )
}
