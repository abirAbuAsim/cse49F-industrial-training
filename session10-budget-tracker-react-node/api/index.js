const express = require('express');
const cors = require('cors');

const app = express();
const port = 8001;

let totalIncome = 10;
let totalExpense = 20;
let budgetItems = [
    {
        id: 1,
        type: 'expense',
        title: 'Education',
        amount: '1000',
    }
];

// Middlewares 
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API is running...');
});

app.get('/summary', (req, res) => {
    res.json({totalIncome, totalExpense});
});

app.get('/transactions', (req, res) => {
    res.json(budgetItems);
});

app.post('/transactions', (req, res) => {
    console.log(req.body);
    let newItem = {
        id: budgetItems.length+1,
        ...req.body,
    }
    budgetItems.push(newItem);
    res.json(budgetItems);
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});