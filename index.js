import express from 'express'
const app = express()

app.get('/', (req, res) => {
    res.type('json')
    res.send('{"status": true}')
})


app.listen(3000, () => {
    console.log('server runing on 3000')
})