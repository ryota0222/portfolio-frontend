export type ServiceType =
  | 'qiita'
  | 'twitter'
  | 'zenn'
  | 'github'
  | 'tsunagaru'
  | 'line-creators-market'
  | 'slide-share'
  | 'wcm'
  | 'instagram'
  | 'utme'

export interface Props {
  type: ServiceType
}
