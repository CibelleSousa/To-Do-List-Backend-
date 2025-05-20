import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())


app.get('/', (request, response) => {
    response.send(`Hello Tarefas`)
})

function start(port) {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })

}

export default {
    start,
    express: app
}