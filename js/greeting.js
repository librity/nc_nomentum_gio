const showGreeting = () => {
  greetingH1.classList.remove(HIDDEN_CLASSNAME)
}

const setGreeting = greting => {
  greetingH1.innerText = greting
}

const updateGreeting = hours => {
  if (!getUsername()) {
    setGreeting('')
    return
  }

  if (hours >= 6 && hours < 12) {
    const greeting = `Good morning, ${getUsername()}.`
    setGreeting(greeting)
    return
  }

  if (hours >= 12 && hours < 18) {
    const greeting = `Good afternoon, ${getUsername()}.`
    setGreeting(greeting)
    return
  }

  if (hours >= 18 || hours < 6) {
    const greeting = `Good night, ${getUsername()}.`
    setGreeting(greeting)
    return
  }
}
