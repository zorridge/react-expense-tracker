import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [isShowForm, setisShowForm] = useState(false);

    const submitExpenseDataHandler = data => {
        const expenseData = {
            ...data,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
        setisShowForm(false);
    };

    const showFormHandler = () => {
        setisShowForm(prevState => !prevState);
    };

    return (
        <div className='new-expense'>
            {isShowForm
                ? <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} onShowFormChange={showFormHandler} />
                : <button onClick={showFormHandler}>Add New Expense</button>
            }
        </div>
    );
};

export default NewExpense;