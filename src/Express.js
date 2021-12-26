import express from 'express'
import path from 'path'

const ExpressApp = express()

const saticPath = path.join(__dirname, 'public')
ExpressApp.use('/public', express.static(saticPath))

const indexView = path.join(__dirname, 'public', 'html', 'index.html')
ExpressApp.get('/', (req, res) => res.sendFile(indexView))

export default ExpressApp
