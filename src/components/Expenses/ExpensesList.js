import React, { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('expenseItemData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setData(parsedData);
    }
  }, []);

  const sortDataAscending = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
    setData(sortedData);
  };

  const sortDataDescending = () => {
    const sortedData = [...data].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });
    setData(sortedData);
  };

  return (
    <div>
      <div className="sort-buttons">
        <button onClick={sortDataAscending} className='sort-button'>Sort Ascending</button>
        <button onClick={sortDataDescending} className='sort-button'>Sort Descending</button>
      </div>
      <ul className="expenses-list">
        {data.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpensesList;
