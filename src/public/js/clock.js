const ONE_SECOND = 1000

const clockH2 = document.getElementById('clock')

const padNumber = number => {
  return String(number).padStart(2, '0')
}

const updateTime = () => {
  const now = new Date()
  const hours = padNumber(now.getHours())
  const minutes = padNumber(now.getMinutes())
  const seconds = padNumber(now.getSeconds())
  const nowTime = `${hours}:${minutes}:${seconds}`

  clockH2.innerText = nowTime

  updateGreeting(now.getHours())
}

updateTime()
setInterval(updateTime, ONE_SECOND)
