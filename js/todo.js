const TASKS_KEY = 'tasks'

const todoForm = document.getElementById('todo_form')
const todoInput = document.querySelector('#todo_form input')

const todoUL = document.getElementById('todo_list')

let tasks = []

const saveTasks = () => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks))
}

const saveTask = newTask => {
  tasks.push(newTask)
  saveTasks()
}

const deleteTask = targetTask => {
  tasks = tasks.filter(task => task !== targetTask)
  saveTasks()
}

const removeTask = event => {
  const li = event.target.parentElement
  const targetTask = li.querySelector('span').innerText

  deleteTask(targetTask)

  li.remove()
}

const displayTask = newTask => {
  const span = document.createElement('span')
  span.innerText = newTask

  const deleteButton = document.createElement('button')
  deleteButton.className = 'delete_task'
  deleteButton.innerText = '❌'
  deleteButton.addEventListener('click', removeTask)

  const li = document.createElement('li')
  li.className = 'task'
  li.appendChild(deleteButton)
  li.appendChild(span)

  todoUL.appendChild(li)
}

const addTask = newTask => {
  displayTask(newTask)

  saveTask(newTask)
}

const handleNewTask = event => {
  event.preventDefault()

  const newTask = todoInput.value
  todoInput.value = ''

  addTask(newTask)
}

const todoInit = () => {
  const savedTasks = localStorage.getItem(TASKS_KEY)
  if (savedTasks) {
    tasks = JSON.parse(savedTasks)
    tasks.forEach(displayTask)
  }

  todoForm.addEventListener('submit', handleNewTask)
}

todoInit()
