import throttle from 'just-throttle'
import { THROTTLE_TIME, THROTTLE_OPTION } from '@/consts/config'

const throttleFunc = <T extends (...args: any) => any>(fn: T) =>
  throttle(fn, THROTTLE_TIME, THROTTLE_OPTION)

export default throttleFunc
