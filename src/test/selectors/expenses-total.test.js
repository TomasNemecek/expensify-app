import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if not expenses', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(195);
});


test('Should correctly add up a multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(114195)
});
