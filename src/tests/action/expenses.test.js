import {
  startAddExpense,
  addExpense,
  editExpense,
  startEditExpense,
  removeExpense,
  setExpenses,
  startSetExpenses,
  startRemoveExpense
} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';

const uid = 'thisismytestuid';
const defaultAuthState = {auth: { uid }};
const createMockStore = configureMockStore([thunk]);


beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref(`users/${uid}expenses`).set(expensesData).then(() => done());
});


test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abc123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  });
});

test('Should remove expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
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

test("Should edit expenses from firebase", (done) => {
  const store = createMockStore(defaultAuthState);
  const id = expenses[0].id;
  const updates={ amount: 23232 }

  store.dispatch(startEditExpense(id, updates)).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    });
    return database.ref(`users/${uid}/expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val().amount).toBe(updates.amount);
    done()
  });

});

test('Should setup add expense action object with provided values', () => {

  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);

  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This is note',
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseData
        }
      });

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with default to database and store', (done) => {
  const store = createMockStore(defaultAuthState);

  const expenseDefault = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  store.dispatch(startAddExpense({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          id: expect.any(String),
          ...expenseDefault
        }
      });

      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseDefault);
      done();
    });
});

// test('Should setup add expense action object with default values', () => {
//   const defaultData = {
//     description: '',
//     note: '',
//     amount: 0,
//     createdAt: 0
//   };
//   const action = addExpense(defaultData);
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...defaultData,
//       id: expect.any(String)
//     } 
//   });
// });

test("should setup set expense action object with data", () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

test("should fetch the expenses from firebase", () => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(action[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });

});
