import { memo } from 'react'
import { SvgIconName } from '@/types/interface'

export interface Props {
  /**
   * アイコンの名前
   */
  name: SvgIconName
  /**
   * 色
   */
  color?: string
  /**
   * 幅
   */
  width?: string
  /**
   * 高さ
   */
  height?: string
}

export const SvgIcon = memo(({ name, width, height }: Props) => {
  switch (name) {
    case 'circle-check':
      return (
        <svg
          width={width ?? '16px'}
          height={height ?? '16px'}
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.99984 15.3334C3.94975 15.3334 0.666504 12.0502 0.666504 8.00008C0.666504 3.94999 3.94975 0.666748 7.99984 0.666748C12.0499 0.666748 15.3332 3.94999 15.3332 8.00008C15.3332 12.0502 12.0499 15.3334 7.99984 15.3334ZM7.99984 14.0001C11.3135 14.0001 13.9998 11.3138 13.9998 8.00008C13.9998 4.68637 11.3135 2.00008 7.99984 2.00008C4.68613 2.00008 1.99984 4.68637 1.99984 8.00008C1.99984 11.3138 4.68613 14.0001 7.99984 14.0001ZM6.6665 9.05727L10.1951 5.52868L11.1379 6.47149L6.6665 10.9429L4.1951 8.47149L5.13791 7.52868L6.6665 9.05727Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="7.99984"
              y1="0.666748"
              x2="7.99984"
              y2="15.3334"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#4ABEFF" />
              <stop offset="1" stop-color="#009AF0" />
            </linearGradient>
          </defs>
        </svg>
      )
    default:
      return <></>
  }
})

SvgIcon.displayName = 'SvgIcon'
