import moment from 'moment';
import filterReducer from '../../reducers/filters';


test('should setup default filter values', () => {
  const state = filterReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('Should set sortBy to amount', () => {
  const state = (filterReducer(undefined, {type: 'SORT_BY_AMOUNT'}));
  expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };

  const action = {type: 'SORT_BY_DATE' };
  const state = filterReducer(currentState,action);
  expect(state.sortBy).toBe('date');
});


test('should set text filter', () => {
  const text = "this is my filter";
  const action= {
    type:'SET_TEXT_FILTER',
    text
  };
  const state = filterReducer(undefined, action);
  expect(state.text).toBe(text);
});

test('Should set Start Date filter', () => {
  const startDate = moment(0).add(2,'days');
  const action = {
    type: 'SET_START_DATE',
    startDate
  };

  const state = filterReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

test('Should set End Date filter', () => {
  const endDate = moment(0).add(1,'days');
  const action = {
    type: 'SET_END_DATE',
    endDate
  };

  const state = filterReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
