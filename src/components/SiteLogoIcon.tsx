import { cn } from '@/lib/utils'

interface SiteLogoIconProps {
  logoSvg?: string
  logoImageUrl?: string | null
  className?: string
  svgClassName?: string
  imageClassName?: string
  alt?: string
  size?: number
}

// Pan Markets brand mark, rendered site-wide (header attribution, chart
// watermarks, docs, portfolio, sports, profile and wallet surfaces). It is a
// fixed two-tone pi/orbit SVG whose colours are set with inline element styles
// so they survive both the SVG sanitiser and any ancestor `fill-current` /
// `stroke-current` utility â€” inline styles outrank stylesheet rules, so the
// brand palette can never be flattened to monochrome. The DB logo props are
// accepted for compatibility but intentionally ignored.
export default function SiteLogoIcon({ className, svgClassName, alt = '' }: SiteLogoIconProps) {
  return (
    <span className={cn(className, svgClassName)} role="img" aria-label={alt || undefined}>
      <svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path
          style={{ fill: 'none', stroke: '#c8d8ef', strokeWidth: 8, strokeMiterlimit: 10 }}
          d="M679.54,567.45c-34.12,47.05-142.16,26.9-241.32-45-99.16-71.9-151.89-168.33-117.77-215.38,34.12-47.05,142.16-26.9,241.32,45,99.16,71.9,151.89,168.33,117.77,215.38"
        />
        <path
          style={{ fill: '#8aa9cf' }}
          d="M676.79,383.25l2.76-50.23h-308.8c-16.25,0-29.66,12.7-30.55,28.92l-2.76,50.27h49.51l-13.03,237.57h79.19l13.03-237.57h80.37l-13.03,237.57h99.7c16.27,0,29.7-12.72,30.59-28.96l1.98-36.05h-49.51l9.47-172.56h20.51c16.27,0,29.7-12.72,30.59-28.96Z"
        />
        <path
          style={{ fill: 'none', stroke: '#c8d8ef', strokeWidth: 8, strokeMiterlimit: 10 }}
          d="M522.42,326.44c13.15,7.62,26.33,16.18,39.35,25.62,30.65,22.23,56.87,46.8,77.46,71.53"
        />
      </svg>
    </span>
  )
}
