const DUCKDUCKGO_BASE_URL = 'https://duckduckgo.com/?q='

const searchForm = document.getElementById('search_form')
const searchInput = searchForm.querySelector('input')

const handleSearch = event => {
  event.preventDefault()

  const searchURL = DUCKDUCKGO_BASE_URL + searchInput.value
  window.open(searchURL, '_blank')

  searchInput.value = ''
}

searchForm.addEventListener('submit', handleSearch)
