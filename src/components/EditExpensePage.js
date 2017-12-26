import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense,startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm 
        expense= {props.expenses}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(props.expenses.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(startRemoveExpense({ id: props.expenses.id }));
        props.history.push('/');
      }}>Delete</button>
      <br />
    </div>
  );
};


const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses.find((expense)=> {
      return expense.id === props.match.params.id;
    })
  };
};

export default connect(mapStateToProps)(EditExpensePage);
