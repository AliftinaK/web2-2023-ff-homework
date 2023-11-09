const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const students = []

const specialities = [
    { 
        id: 1, 
        name: 'Informatica' 
    },
    { 
        id: 2, 
        name: 'Matematica' 
    },
    { 
        id: 3, 
        name: 'Fizica' 
    },
    {
        id: 4,
        name: 'Muzica'
    },
    {
        id: 5,
        name: 'Chimia'
    }
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/specialities', (req, res) => {
    res.json(specialities);
 })
 
 app.get('/specialities/:id', (req, res) => {
     res.json(specialities.find(specialities => specialities.id == req.params.id));
 })
 
 
 app.post('/specialities', (req, res) => {
     specialities.push(req.body);
     res.json(req.body);
 })
 
 app.put('/specialities/:id', (req, res) => {
     const specialitieIndex = specialities.findIndex(specialitie => specialitie.id == req.params.id)
     specialities.splice(specialitieIndex, 1, req.body);
     res.json(req.body);
 })
 app.delete('/specialities/:id', (req, res) => {
     const specialitieIndex = specialities.findIndex(specialitie => specialitie.id == req.params.id)
     specialities.splice(specialitieIndex, 1);
     res.json({});
 })
 
 
 app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
 })