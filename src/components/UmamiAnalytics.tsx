import Script from 'next/script.js'

export interface UmamiProps {
  umamiAnalyticsId: string
  umamiAnalyticsSrc?: string
}

export default function UmamiScript({
  umamiAnalyticsId,
  umamiAnalyticsSrc = 'https://analytics.umami.is/script.js',
}: UmamiProps) {
  return <Script async defer data-website-id={umamiAnalyticsId} src={umamiAnalyticsSrc} />
}
