const loginForm = document.getElementById('login_form')
const loginInput = loginForm.querySelector('input')

const showLogin = () => {
  loginForm.classList.remove(HIDDEN_CLASSNAME)
}

const hideLogin = () => {
  loginForm.classList.add(HIDDEN_CLASSNAME)
}

const handleLogin = event => {
  event.preventDefault()

  setUsername(loginInput.value)

  loginInput.value = ''
  hideLogin()

  logIn()
}

const logIn = () => {
  document.title = `${document.title} - ${getUsername()}`
  showGreeting()
}

const init = () => {
  if (usernameIsSaved()) return logIn()

  showLogin()
  loginForm.addEventListener('submit', handleLogin)
}

init()
