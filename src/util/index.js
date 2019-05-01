const util = {
  formatNumber(amount) {
    const amountStr = String(amount)
    let result = ''
    for (let i = 0; i < amountStr.length; i++) {
      if ((amountStr.length - i) % 3 === 0 && i > 0) {
        result += '.'
      }
      result += amountStr[i]
    }
    return result
  }
}

export default util
