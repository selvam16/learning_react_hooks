// http://expressjs.com/en/api.html

// In Command Prompt: set PORT=5000

// In Power Shell: $env:PORT=5000

// In Bash (Windows): export PORT=5000
const Joi = require('joi')
const express = require('express');

const app = express();
app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const port = process.env.PORT || 8000;

let customers = [
    {
        id: 1,
        name: 'Selvam'
    },
    {
        id: 2,
        name: 'Esha'
    },
    {
        id: 3,
        name: 'Mavles'
    },
    {
        id: 4,
        name: 'Raju'
    },
]

const ValidateCustomer = (customerObj) => {
    const schema = Joi.object({
        name: Joi.string().min(3).required(),
    })

    return (schema.validate(customerObj))
}

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/customers', (req, res) => {
    setTimeout(() => {
        res.send(customers)
    }, 2000)
})

app.get('/customers/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id))
    if (!customer) return res.status('404').send('No resource found');
    res.send(customer)
})

app.post('/customers', (req, res) => {
    // for validation https://www.npmjs.com/package/joi

    const { error } = ValidateCustomer(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    const customer = {
        id: customers.length + 1,
        name: req.body.name
    }
    customers = [...customers, customer]
    res.send(customer)
})

app.put('/customers/:id', (req, res) => {
    // check resource exsits
    const customer = customers.find(c => c.id === parseInt(req.params.id))
    if (!customer) return res.status('404').send('No resource found');

    //Validate the req
    const { error } = ValidateCustomer(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    // update the list
    customer.name = req.body.name

    res.send(customer)

})

app.delete('/customers/:id', (req, res) => {
    // check resource exsits
    const customer = customers.find(c => c.id === parseInt(req.params.id))
    if (!customer) return res.status('404').send('No resource found');

    // Delete
    const index = customers.indexOf(customer);
    customers.splice(index, 1)

    res.send(customer)

})

app.get('/posts/:id/:location', (req, res) => {
    // req.params will return the path param values as Object // this should use for required field like id, uuid....
    // req.query will return the query values as Object(key value pairs) // this should use for optional field like sortby, filter...
    //http://localhost:8000/customers/1/test/?sortBy=name&filterBy=age
    res.send([req.params, req.query]) // output will be [{"id":"1","location":"test"},{"sortBy":"name","filterBy":"age"}]
})

app.listen(port, () => console.log(`listening on ${port}`))
