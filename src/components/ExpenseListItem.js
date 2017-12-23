import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createAt }) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
      </Link>
      <h4>{numeral(amount / 100).format('$0,0.00')}</h4>
      <h5>{moment(createAt).format('MMMM Do YYYY')}</h5>
    </div>

  );
};


export default ExpenseListItem;