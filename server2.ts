import express, { Express } from "express";

const server: Express = express()

let user: string[] = [
    'salom', 'fdcew'
]

server.use(express.json())
server.use(express.urlencoded())

server.get('/user', (request, response) => {
    response
        .status(200)
        .send(user)

})
server.post('/user', (request, response) => {
    const name = request.body.userList
    user.push(name)

    response
        .status(200)
        .send('user saved')

})

server.listen(1730, () => {
    console.log('server connect ... (post: 2023)');

})
