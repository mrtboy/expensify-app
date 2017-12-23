import moment from 'moment';
import {
  setTextFilter, sortByDate, sortByAmount,
  setByAmount, setStartDate, setEndDate
} from '../../actions/filters';


test("Should generate set start date action object", () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});


test("Should generate set end date action object", () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test("Should gerenate set text filter with default value object", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test("Should gerenate set text filter with given value object", () => {
  const action = setTextFilter('new value');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'new value'
  });
});

test("Sort By Date_generate new object", () => {
  expect(sortByDate()).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test("Sort By Amount_generate new object", () => {
  expect(sortByAmount()).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});