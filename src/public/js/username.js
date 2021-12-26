const USERNAME_KEY = 'username'

let username

const getUsername = () => {
  if (username) return username

  const savedUsername = localStorage.getItem(USERNAME_KEY)
  if (savedUsername) return savedUsername

  return undefined
}

const setUsername = newUsername => {
  username = newUsername
  localStorage.setItem(USERNAME_KEY, newUsername)
}

const usernameIsSaved = () => {
  if (localStorage.getItem(USERNAME_KEY)) return true

  false
}

const usernameInit = () => {
  const savedUsername = localStorage.getItem(USERNAME_KEY)
  if (savedUsername) username = savedUsername
}

usernameInit()
