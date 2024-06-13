import React from 'react';

const BudgetItem = ({ item, removeItem }) => {
  return (
    <li className="flex justify-between items-center border-b py-2">
      {item.title}: ${item.amount}
      <button
        className="bg-red-500 text-white p-1 rounded"
        onClick={removeItem}
      >
        Remove Item
      </button>
    </li>
  );
};

export default BudgetItem;
