import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ id, description, amount, createAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <h4>{amount} </h4>
      <h5>{createAt}</h5>
      -------------------
    </div>

  );
};


export default ExpenseListItem;