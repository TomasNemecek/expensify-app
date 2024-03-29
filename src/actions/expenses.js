import uuid from 'uuid';
import database from '../firebase/firebase'

//BEFORE FIREBASE
//component calls the action generator
//action generator returns an object
//component dispatches object
//redux store changes

//AFTER FIREBASE
//component calls action generator
//action generator returns funtion
//component dispatches function
//function runs (has the ability to dispatch other actions do whatever it wants


//ADD EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//Before firebase
// export const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         id: uuid(),
//         description,
//         note,
//         amount,
//         createdAt
//     }
// });

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;

        const expense = {description, note, amount, createdAt};

        return database.ref(`users/${uid}/expenses`).push(expense)
            .then((ref) => {
                dispatch(addExpense({
                    id: ref.key,
                    ...expense
                }))
            });
    };
};

//REMOVE EXPENSE
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});


export const startRemoveExpense = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove()
            .then(() => {
                dispatch(removeExpense({id}));
            });
    };
};

//EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates)
            .then(() => {
                dispatch(editExpense(id, updates))
            });
    };
};

//SET_EXPENSES
export const setExpenses = (expenses) => ({
   type: 'SET_EXPENSES',
   expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });

            dispatch(setExpenses(expenses));
        })
    };
};

