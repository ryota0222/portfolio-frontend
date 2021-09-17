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

export const SvgIcon = memo(({ name, width, height, color }: Props) => {
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
            fillRule="evenodd"
            clipRule="evenodd"
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
              <stop stopColor="#4ABEFF" />
              <stop offset="1" stopColor="#009AF0" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'schedule':
      return (
        <svg
          width={width ?? '50px'}
          height={height ?? '50px'}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 5.25C19.3252 5.25 12.25 12.3252 12.25 21C12.25 23.4609 13.248 26.2842 14.6016 29.3672C15.9551 32.4502 17.6982 35.7246 19.4688 38.7734C23.0098 44.8779 26.5781 49.9844 26.5781 49.9844L28 52.0625L29.4219 49.9844C29.4219 49.9844 32.9902 44.8779 36.5312 38.7734C38.3018 35.7246 40.0449 32.4502 41.3984 29.3672C42.752 26.2842 43.75 23.4609 43.75 21C43.75 12.3252 36.6748 5.25 28 5.25ZM28 8.75C34.7881 8.75 40.25 14.2119 40.25 21C40.25 22.4014 39.498 25.0537 38.2266 27.9453C36.9551 30.8369 35.1982 34.043 33.4688 37.0234C30.7207 41.7676 29.0117 44.2764 28 45.7734C26.9883 44.2764 25.2793 41.7676 22.5312 37.0234C20.8018 34.043 19.0449 30.8369 17.7734 27.9453C16.502 25.0537 15.75 22.4014 15.75 21C15.75 14.2119 21.2119 8.75 28 8.75ZM28 17.5C26.0654 17.5 24.5 19.0654 24.5 21C24.5 22.9346 26.0654 24.5 28 24.5C29.9346 24.5 31.5 22.9346 31.5 21C31.5 19.0654 29.9346 17.5 28 17.5Z"
            fill={color}
          />
        </svg>
      )
    case 'develop':
      return (
        <svg
          width={width ?? '50px'}
          height={height ?? '50px'}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.9648 11.9187C30.0802 11.9187 31.811 10.1745 31.811 8.04272C31.811 5.91093 30.0802 4.16675 27.9648 4.16675C25.8494 4.16675 24.1187 5.91093 24.1187 8.04272C24.1187 10.1745 25.8494 11.9187 27.9648 11.9187ZM20.7533 18.5078L15.4648 45.8334H19.5033L22.8687 30.3295L27.0033 34.2055V45.8334H30.8494V31.2016L26.9071 27.2288L28.061 21.4148C30.561 24.5156 34.311 26.4536 38.5417 26.4536V22.5776C34.9841 22.5776 31.9071 20.6396 30.1764 17.8295L28.3494 14.7288C27.6764 13.566 26.4264 12.8877 25.0802 12.8877C24.5994 12.8877 24.1187 12.9846 23.6379 13.1784L13.5417 17.345V26.4536H17.3879V19.9613L20.7533 18.5078Z"
            stroke={color}
            strokeWidth="2.5"
          />
        </svg>
      )
    case 'merge':
      return (
        <svg
          width={width ?? '50px'}
          height={height ?? '50px'}
          viewBox="0 0 51 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3438 6.375C11.7077 6.375 9.5625 8.52019 9.5625 11.1562C9.5625 13.2307 10.8993 14.9847 12.75 15.6449V18.0168V36.9862V43.0686C12.75 43.9292 13.4458 44.625 14.3064 44.625H14.3811C15.2417 44.625 15.9375 43.9292 15.9375 43.0686V35.4267C16.4709 34.8071 17.7519 33.5435 21.4285 33.5435C23.3792 33.5435 24.9747 34.2238 26.6673 34.9442C28.32 35.6487 30.0293 36.3761 32.0151 36.3761C35.7747 36.3761 38.3287 34.4006 39.4204 33.5559L39.6632 33.3723C40.5414 32.7363 41.4375 31.8686 41.4375 30.2812V17.0145C41.4375 15.5674 40.1973 14.3438 38.7263 14.3438C37.9374 14.3438 37.3581 14.8005 36.5629 15.4332C35.5078 16.2684 33.9164 17.5312 32.0151 17.5312C30.7162 17.5312 29.4488 16.9252 27.9778 16.2208C26.1434 15.341 24.063 14.3438 21.4254 14.3438C19.6163 14.3438 18.2033 14.6439 17.0737 15.0721C18.3107 14.207 19.125 12.7767 19.125 11.1562C19.125 8.52019 16.9798 6.375 14.3438 6.375ZM14.3438 9.5625C15.2235 9.5625 15.9375 10.2781 15.9375 11.1562C15.9375 12.0344 15.2235 12.75 14.3438 12.75C13.464 12.75 12.75 12.0344 12.75 11.1562C12.75 10.2781 13.464 9.5625 14.3438 9.5625ZM21.4254 17.5312C23.341 17.5312 24.9237 18.2906 26.6019 19.0939C28.2674 19.8939 29.991 20.7188 32.0151 20.7188C34.8121 20.7188 36.9081 19.2118 38.2469 18.1631V30.3871C38.2453 30.3935 38.1751 30.5128 37.7862 30.7949L37.4687 31.0377C36.565 31.7357 34.6846 33.1886 32.0151 33.1886C30.6795 33.1886 29.3993 32.6447 27.9155 32.012C26.0939 31.2342 24.0279 30.3528 21.4254 30.3528C18.9519 30.3528 17.1902 30.8518 15.9375 31.4766V19.7009C16.4873 18.9741 17.7422 17.5312 21.4254 17.5312Z"
            fill={color}
          />
        </svg>
      )
    case 'shirt':
      return (
        <svg
          width={width ?? '30px'}
          height={height ?? '30px'}
          viewBox="0 0 30 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.56507 5.44303L9.14066 2.70268C9.1731 2.69098 9.20762 2.6868 9.24179 2.69042C9.27596 2.69404 9.30895 2.70538 9.33841 2.72363C9.36787 2.74189 9.39309 2.76661 9.41228 2.79605C9.43146 2.82549 9.44415 2.85893 9.44945 2.894C9.66863 4.2509 10.3464 5.48349 11.3624 6.37256C12.3783 7.26163 13.6664 7.74955 14.9977 7.74955C16.329 7.74955 17.6171 7.26163 18.633 6.37256C19.6489 5.48349 20.3268 4.2509 20.5459 2.894C20.5511 2.85835 20.5639 2.82433 20.5833 2.79443C20.6028 2.76452 20.6285 2.73949 20.6586 2.72116C20.6886 2.70283 20.7222 2.69165 20.757 2.68845C20.7917 2.68526 20.8267 2.69012 20.8594 2.70268L28.435 5.44303C28.647 5.51973 28.8254 5.67256 28.9375 5.87369C29.0497 6.07483 29.0882 6.3109 29.0461 6.53892L28.0717 11.867C28.0342 12.0701 27.9348 12.2555 27.7881 12.396C27.6413 12.5366 27.4549 12.6249 27.2561 12.6481L24.392 12.9823C24.2751 12.9959 24.1674 13.0545 24.0904 13.1464C24.0133 13.2382 23.9725 13.3567 23.976 13.4782L24.4055 28.0639C24.4112 28.2519 24.3638 28.4376 24.2691 28.5982C24.1744 28.7588 24.0366 28.8875 23.8723 28.9685C23.7358 29.0323 23.5874 29.0643 23.4375 29.0624H6.56254C6.41272 29.0643 6.26431 29.0323 6.12777 28.9685C5.96351 28.8875 5.82563 28.7588 5.73094 28.5982C5.63626 28.4376 5.58887 28.2519 5.59457 28.0639L6.02406 13.4782C6.0276 13.3567 5.98678 13.2382 5.90971 13.1464C5.83264 13.0545 5.72496 12.9959 5.60804 12.9823L2.74398 12.6481C2.54517 12.6249 2.35876 12.5366 2.212 12.396C2.06525 12.2555 1.96586 12.0701 1.92836 11.867L0.953943 6.53892C0.91184 6.3109 0.950378 6.07483 1.06254 5.87369C1.17471 5.67256 1.35304 5.51973 1.56507 5.44303Z"
            fill={color}
          />
        </svg>
      )
    case 'balloon':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width ?? '30px'}
          height={height ?? '25px'}
          viewBox="0 0 29.372 25.098"
        >
          <ellipse
            id="楕円形_12"
            data-name="楕円形 12"
            cx="14.686"
            cy="12.08"
            rx="14.686"
            ry="12.08"
            transform="translate(0 0)"
            fill={color}
          />
          <path
            id="パス_11"
            data-name="パス 11"
            d="M8.976,24.938a1,1,0,0,1-1.531-.971l.431-3.31A1,1,0,0,1,9.4,19.941l2.379,1.509a1,1,0,0,1,0,1.686Z"
            fill={color}
          />
        </svg>
      )
    case 'phone':
      return (
        <svg
          width={width ?? '27px'}
          height={height ?? '27px'}
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.125 1.13625L7.875 1.125C6.6375 1.125 5.625 2.1375 5.625 3.375V23.625C5.625 24.8625 6.6375 25.875 7.875 25.875H19.125C20.3625 25.875 21.375 24.8625 21.375 23.625V3.375C21.375 2.1375 20.3625 1.13625 19.125 1.13625ZM19.125 21.375H7.875V5.625H19.125V21.375Z"
            fill={color}
          />
        </svg>
      )
    case 'link':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width={width ?? '27px'}
          height={height ?? '27px'}
        >
          <path
            d="M208,352H144a96,96,0,0,1,0-192h64"
            style={{
              fill: 'none',
              stroke: color,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '36px',
            }}
          />
          <path
            d="M304,160h64a96,96,0,0,1,0,192H304"
            style={{
              fill: 'none',
              stroke: color,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '36px',
            }}
          />
          <line
            x1="163.29"
            y1="256"
            x2="350.71"
            y2="256"
            style={{
              fill: 'none',
              stroke: color,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '36px',
            }}
          />
        </svg>
      )
    case 'update':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
          width={width ?? '27px'}
          height={height ?? '27px'}
        >
          <path
            d="M1024 512v549l365 366-90 90-403-402V512h128zm512 128h297q-56-117-140.5-211.5t-190-161.5T1275 164t-251-36q-123 0-237.5 32t-214 90.5T391 391 250.5 572.5t-90.5 214-32 237.5 32 237.5 90.5 214T391 1657t181.5 140.5T786 1888t238 32q150 0 289-48.5t253-135.5 197.5-207.5T1887 1263l123 34q-45 166-140.5 304t-226 237.5-289 154.5-330.5 55q-141 0-272-36.5t-245-103-207.5-160-160-207.5-103-244.5T0 1024q0-141 36.5-272t103-245 160-207.5 207.5-160 244.5-103T1024 0q140 0 272 37t248.5 105.5 212 166.5T1920 530V256h128v512h-512V640z"
            style={{ fill: color }}
          />
        </svg>
      )
    case 'create':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width ?? '27px'}
          height={height ?? '27px'}
          viewBox="0 0 512 512"
        >
          <path
            d="M384,224V408a40,40,0,0,1-40,40H104a40,40,0,0,1-40-40V168a40,40,0,0,1,40-40H271.48"
            style={{
              fill: 'none',
              stroke: color,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '32px',
            }}
          />
          <path
            d="M459.94,53.25a16.06,16.06,0,0,0-23.22-.56L424.35,65a8,8,0,0,0,0,11.31l11.34,11.32a8,8,0,0,0,11.34,0l12.06-12C465.19,69.54,465.76,59.62,459.94,53.25Z"
            style={{
              fill: 'none',
              stroke: color,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '32px',
            }}
          />
          <path
            d="M399.34,90,218.82,270.2a9,9,0,0,0-2.31,3.93L208.16,299a3.91,3.91,0,0,0,4.86,4.86l24.85-8.35a9,9,0,0,0,3.93-2.31L422,112.66A9,9,0,0,0,422,100L412.05,90A9,9,0,0,0,399.34,90Z"
            style={{
              fill: 'none',
              stroke: color,
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '32px',
            }}
          />
        </svg>
      )
    case 'home':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          width={width ?? '27px'}
          height={height ?? '27px'}
        >
          <path
            d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z"
            style={{
              fill: color,
              stroke: 'none',
              strokeLinecap: 'round',
              strokeLinejoin: 'round',
              strokeWidth: '32px',
            }}
          />
        </svg>
      )
    case 'facebook':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width ?? '27px'}
          height={height ?? '27px'}
          viewBox="0 0 38.4 38.398"
        >
          <g data-name="グループ 46" transform="translate(15637 18711)">
            <circle
              data-name="楕円形 13"
              cx="17"
              cy="17"
              r="17"
              transform="translate(-15635 -18709)"
              fill="#fff"
            />
            <path
              id="Frame"
              d="M20,.8A19.2,19.2,0,1,0,39.2,20,19.2,19.2,0,0,0,20,.8Zm4.548,13.268H21.663c-.342,0-.722.45-.722,1.048V17.2h3.61L24,20.172H20.941v8.922H17.535V20.172h-3.09V17.2h3.09V15.452a4.284,4.284,0,0,1,4.128-4.546h2.886Z"
              transform="translate(-15637.801 -18711.801)"
              fill="#3b5998"
            />
          </g>
        </svg>
      )
    case 'twitter':
      return (
        <svg
          data-name="Group 56"
          xmlns="http://www.w3.org/2000/svg"
          width={width ?? '40px'}
          height={height ?? '40px'}
          viewBox="0 0 40 40"
        >
          <circle data-name="楕円形 12" cx="20" cy="20" r="20" fill="#1da1f2" />
          <path
            data-name="パス 143"
            d="M31,13.131a8.943,8.943,0,0,1-2.592.715,4.547,4.547,0,0,0,1.985-2.513,8.985,8.985,0,0,1-2.868,1.1,4.509,4.509,0,0,0-7.806,3.11,4.555,4.555,0,0,0,.116,1.035,12.781,12.781,0,0,1-9.3-4.749,4.573,4.573,0,0,0,1.4,6.069,4.492,4.492,0,0,1-2.045-.567v.056a4.537,4.537,0,0,0,3.622,4.455,4.379,4.379,0,0,1-1.189.16,4.462,4.462,0,0,1-.85-.081,4.519,4.519,0,0,0,4.216,3.154,9.015,9.015,0,0,1-5.606,1.946A9.2,9.2,0,0,1,9,26.96,12.822,12.822,0,0,0,28.761,16.072c0-.2,0-.4-.012-.589A9.165,9.165,0,0,0,31,13.131Z"
            fill="#fff"
            fillRule="evenodd"
          />
        </svg>
      )
    default:
      return <></>
  }
})

SvgIcon.displayName = 'SvgIcon'
