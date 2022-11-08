import express from 'express'

const app = express()
const port = 3333;

app.use(express.json())

app.get('/', (request, response) => {
  return response.json(['Hello!'])
})

app.listen(port, () => {
  console.log(`[SERVER RUNNING]: listening on port: ${port}`);
});