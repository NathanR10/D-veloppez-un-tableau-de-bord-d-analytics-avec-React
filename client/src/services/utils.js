export default function formatNumber(number) {
  const num = number.toString()
  if (num.length <= 3) {
    return num
  } else {
    return formatNumber(num.slice(0, num.length - 3)) + ',' + num.slice(num.length - 3)
  }
}
