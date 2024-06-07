console.log('Link established with Budget Tracker');

// DOM Elements
const itemInput = document.getElementById('item');
const amountInput = document.getElementById('amount');
const addButton = document.getElementById('addButton');
const budgetList = document.getElementById('budgetList');

// Add Item to List
const addItem = () => {
    const itemText = itemInput.value; 
    const amountText = amountInput.value; 

    if(itemText !== '' && amountText !== '') {
        const li = document.createElement('li');
        li.textContent = `${itemText}: $${amountText}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove Item';
        removeButton.onclick = () => {
            budgetList.removeChild(li);
        };

        li.appendChild(removeButton);
        budgetList.appendChild(li);
    }
    console.log(`Item: ${itemText}, Amount: ${amountText}`);

};

addButton.addEventListener('click', addItem);


