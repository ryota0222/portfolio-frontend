export type ServiceType =
  | 'qiita'
  | 'twitter'
  | 'zenn'
  | 'github'
  | 'tsunagaru'
  | 'line-creators-market'
  | 'slide-share'
  | 'wcm'

export interface Props {
  type: ServiceType
}
