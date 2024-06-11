import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BudgetItem from './BudgetItem';

const BudgetTracker = () => {
  const [type, setType] = useState('income');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [budgetItems, setBudgetItems] = useState([]);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    fetchSummary();
  }, []);

  const fetchSummary = async () => {
    try {
      const response = await axios.get('http://localhost:8001/api/summary');
      setIncome(response.data.totalIncome);
      console.log(response.data);
    } catch (error) {

    }
  };

  const addItem = () => {
    if (amount) {
      const newAmount = parseFloat(amount);
      const newItem = { type, title,  amount: newAmount };

      console.log(typeof budgetItems);
      setBudgetItems([...budgetItems, newItem]);

      if (type === 'income') {
        setIncome(income + newAmount);
      } else {
        setExpense(expense + newAmount);
      }

      setAmount('');
    }
  };

  const removeItem = (index) => {
    const itemToRemove = budgetItems[index];
    const updatedItems = budgetItems.filter((_, i) => i !== index);

    setBudgetItems(updatedItems);

    if (itemToRemove.type === 'income') {
      setIncome(income - itemToRemove.amount);
    } else {
      setExpense(expense - itemToRemove.amount);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-5">Budget Tracker</h1>
      <div className="flex justify-between mb-5">
        <div className="bg-white p-5 rounded shadow w-1/4 m-1">
          <h2 className="text-2xl font-bold text-green-500">Income</h2>
          <p className="text-2xl font-bold text-green-500" id="totalIncome">${income}</p>
        </div>
        <div className="bg-white p-5 rounded shadow w-1/4 m-1">
          <h2 className="text-2xl font-bold text-red-500">Expense</h2>
          <p className="text-2xl font-bold text-red-500" id="totalExpense">${expense}</p>
        </div>
        <div className="bg-white p-5 rounded shadow w-2/4 m-1">
          <h2 className="text-2xl font-bold text-green-500">Add New Item</h2>
          <div className="flex mb-3">
            <select
              name="type"
              id="type"
              className="p-2 border rounded m-2 w-2/4"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
            <input
              type="text"
              id="title"
              placeholder="Title"
              className="p-2 border rounded m-2  w-2/4"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              id="amount"
              placeholder="Amount"
              className="p-2 border rounded m-2  w-1/4"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button
              id="addButton"
              className="bg-blue-500 text-white p-2 rounded m-2  w-1/4"
              onClick={addItem}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-5 rounded shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-3">Items</h2>
        <ul id="budgetList" className="list-none p-0">
          {budgetItems.map((item, index) => (
            <BudgetItem
              key={index}
              item={item}
              removeItem={() => removeItem(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetTracker;