import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abc123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});


test('Should setup edit expense action object', () => {
  const update = {
    note: 'new note'
  };
  const id = '123';
  const action = editExpense(id, update);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: update
  });
});

test('Should setup add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'This was last month rent',
    amount: 10001,
    createdAt: 1000
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('Should setup add expense action object with default values', () => {
  const defaultData = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = addExpense(defaultData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultData,
      id: expect.any(String)
    } 
  });
});