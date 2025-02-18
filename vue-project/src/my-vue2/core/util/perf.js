// 判断是否在浏览器中
import { inBrowser } from './env'

export let mark
export let measure

if (__DEV__) {
  const perf = inBrowser && window.performance 
  if (
    perf && 
    perf.mark &&  
    perf.measure && 
    perf.clearMarks && 
    perf.clearMeasures
  ) {
    mark = tag => perf.mark(tag)
    measure = (name, startTag, endTag) => {
      perf.measure(name, startTag, endTag)
      perf.clearMarks(startTag)
      perf.clearMarks(endTag) 
    }
  }
}
