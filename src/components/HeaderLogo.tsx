'use client'

import AppLink from '@/components/AppLink'
import { cn } from '@/lib/utils'

interface HeaderLogoProps {
  labelSuffix?: string
}

// Pan Markets brand logo: the pi/orbit mark rendered in its own two-tone brand
// colours (not forced to currentColor) followed by the stacked PAN / MARKETS
// wordmark. Kept as inline styles so it renders identically regardless of the
// Kuest theme tokens and image pipeline.
export default function HeaderLogo({ labelSuffix }: HeaderLogoProps) {
  return (
    <AppLink
      intentPrefetch
      href="/"
      className={cn(`
        flex h-10 shrink-0 items-center gap-2 text-2xl font-medium text-foreground transition-opacity
        hover:opacity-80
      `)}
    >
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ width: '2.15rem', height: '2.15rem', flexShrink: 0 }}
      >
        <path
          fill="none"
          stroke="#c8d8ef"
          strokeWidth="8"
          strokeMiterlimit="10"
          d="M679.54,567.45c-34.12,47.05-142.16,26.9-241.32-45-99.16-71.9-151.89-168.33-117.77-215.38,34.12-47.05,142.16-26.9,241.32,45,99.16,71.9,151.89,168.33,117.77,215.38"
        />
        <path
          fill="#8aa9cf"
          d="M676.79,383.25l2.76-50.23h-308.8c-16.25,0-29.66,12.7-30.55,28.92l-2.76,50.27h49.51l-13.03,237.57h79.19l13.03-237.57h80.37l-13.03,237.57h99.7c16.27,0,29.7-12.72,30.59-28.96l1.98-36.05h-49.51l9.47-172.56h20.51c16.27,0,29.7-12.72,30.59-28.96Z"
        />
        <path
          fill="none"
          stroke="#c8d8ef"
          strokeWidth="8"
          strokeMiterlimit="10"
          d="M522.42,326.44c13.15,7.62,26.33,16.18,39.35,25.62,30.65,22.23,56.87,46.8,77.46,71.53"
        />
      </svg>

      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontSize: '1.55rem', fontWeight: 800, letterSpacing: '0.01em', color: '#4b6180' }}>
          PAN
        </span>
        <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.3em', color: '#8aa9cf' }}>
          MARKETS
        </span>
      </span>

      {labelSuffix ? <span style={{ marginLeft: '0.25rem', fontWeight: 500 }}>{labelSuffix}</span> : null}
    </AppLink>
  )
}
