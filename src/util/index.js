const util = {
  formatNumber(amount) {
    return new Intl.NumberFormat('en-US').format(amount)
  },

  formatNumberFloat(amount) {
    return new Intl.NumberFormat('en-US', {minimumFractionDigits:2}).format(amount)
  },

  // $12.345 -> 12345
  getNumberFromStr(numberStr) {
    return numberStr.split(/[^\d]/).join('')
  },

  sleep(duration) {
    return new Promise(resolve => setTimeout(resolve, duration))
  }
}

export default util
