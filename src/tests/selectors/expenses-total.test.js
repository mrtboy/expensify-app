import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test("return 0 if no expenses", () => {
  const total = selectExpensesTotal([]);
  expect(total).toBe(0);
});

test("add up a single expense", () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(195);
});

test("add up multiple expenses", () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(114195);
});