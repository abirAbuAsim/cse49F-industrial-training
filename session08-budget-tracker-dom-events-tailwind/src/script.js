console.log('Link established with Budget Tracker');

// DOM Elements
const typeInput = document.getElementById('type');
const amountInput = document.getElementById('amount');
const addButton = document.getElementById('addButton');
const budgetList = document.getElementById('budgetList');
const totalIncome = document.getElementById('totalIncome');
const totalExpense = document.getElementById('totalExpense');

let income = 0;
let expense = 0;

const updateTotals = () => {
    totalIncome.textContent = `$${income}`;
    totalExpense.textContent = `$${expense}`;
};

// Add Item to List
const addItem = () => {
    const type = typeInput.value; 
    const amountText = amountInput.value; 
    const amount = parseFloat(amountText);

    if(amountText !== '') {
        const li = document.createElement('li');
        li.classList.add(
            'flex', 'justify-between', 'items-corner', 'border-b', 'py-2'
        );

        li.textContent = `${type}: $${amountText}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Item';
        removeButton.onclick = () => {
            budgetList.removeChild(li);
        };

        li.appendChild(removeButton);
        budgetList.appendChild(li);

        if(type === 'income') {
            income += amount; 
        } else {
            expense += amount;
        }
        updateTotals();
    }
    console.log(`Item: ${itemText}, Amount: ${amountText}`);

};

addButton.addEventListener('click', addItem);


