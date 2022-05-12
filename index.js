const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
//or app.use(express.json())

app.get('/', (req, res) => {
    res.send('hello world,hello world,hello world')
})
const users = [
    { id: 1, name: 'shabana', email: 'shabana@gmail.com', phone: '0183033333' },
    { id: 2, name: 'shabina', email: 'shabana@gmail.com', phone: '0183033333' },
    { id: 3, name: 'shabnor', email: 'shabnor@gmail.com', phone: '0183033333' },
    { id: 4, name: 'shabana', email: 'shabana@gmail.com', phone: '0183033333' },
    { id: 5, name: 'shabnoor', email: 'shabana@gmail.com', phone: '0183033333' },
    { id: 6, name: 'shabana', email: 'shabana@gmail.com', phone: '0183033333' },
    { id: 7, name: 'shabana', email: 'shabana@gmail.com', phone: '0183033333' }
]
app.get('/users', (req, res) => {
    console.log(req.query)
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched)
    } else {
        res.send(users)
    }
});
app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = users.find(u => u.id == id);

    res.send(user)
})


app.post('/user', (req, res) => {
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
})

app.listen(port, () => {
    console.log('listing t0 port', port)
})