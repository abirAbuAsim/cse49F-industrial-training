const express = require('express');
const cors = require('cors');
const { addTransaction, getTransactions, getSummary } = require('./database/transactionsQuery');

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

app.get('/summary', async (req, res) => {
    const result = await getSummary();
    res.json(result);
});

app.get('/transactions', async (req, res) => {
    const result = await getTransactions();
    res.json(result);
});

app.post('/transactions', async (req, res) => {
    console.log(req.body);
    let newItem = {
        ...req.body,
    }  
    const result = await addTransaction(newItem);
    console.log(result);
    res.json('Transaction created successfully');
});

app.listen(port, () => {
    console.log(`API is running on port ${port}`);
});