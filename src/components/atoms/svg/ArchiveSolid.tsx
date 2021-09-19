interface Props {
  /**
   * 幅
   */
  width?: number
  /**
   * 高さ
   */
  height?: number
  /**
   * 色
   */
  color?: string
}

const ArchiveSolid: React.FC<Props> = ({ width, height, color }) => {
  return (
    <svg
      width={width ?? 16}
      height={height ?? 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 2.5V5.5H2.5V13.5H13.5V5.5H14V2.5H2ZM3 3.5H13V4.5H3V3.5ZM3.5 5.5H12.5V12.5H3.5V5.5ZM6.40625 6.5C6.13086 6.52539 5.92773 6.77148 5.95312 7.04688C5.97852 7.32227 6.22461 7.52539 6.5 7.5H9.5C9.67969 7.50195 9.84766 7.4082 9.93945 7.25195C10.0293 7.0957 10.0293 6.9043 9.93945 6.74805C9.84766 6.5918 9.67969 6.49805 9.5 6.5H6.5C6.48438 6.5 6.46875 6.5 6.45312 6.5C6.4375 6.5 6.42188 6.5 6.40625 6.5Z"
        fill={color ?? 'white'}
      />
    </svg>
  )
}

export default ArchiveSolid
