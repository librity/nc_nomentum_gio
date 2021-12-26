const RANDOM_QUOTE_URL = 'https://api.quotable.io/random'

const quoteDiv = document.getElementById('quote_content')

const fetchRandomQuoute = async () => {
  const { content, author } = await fetchJSON(RANDOM_QUOTE_URL)
  const quote = { content, author }

  return quote
}

const setQuote = quote => {
  quoteDiv.innerText = `"${quote.content}"\n${quote.author}`
}

fetchRandomQuoute().then(setQuote).catch(console.error)
