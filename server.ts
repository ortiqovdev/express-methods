import experss, { Express } from 'express'

const server: Express = experss()

let phone: string = '943371730'

server.use(experss.json ())
server.use(experss.urlencoded())



server.get('/phone', (request, response) => {
    response
        .status(200)
        .send(phone)
})
server.post('/phone', (request, response) => {
    phone = request.body.number

    response
        .status(200)
        .send('Number Saved')
})

server.get('/', (request, response) => {

    response
        .status(200)
        .send('Connect...')
})

server.post('/pubg', (request, response) => {
    response
        .status(403)
        .send('errr')
})

server.listen(1730, () => {
    console.log("Server working... ,  Port: 1730");

})

