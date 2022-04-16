import React, { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [inputTitle, setInputTitle] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');
    // const [userInput, setUserInput] = useState({
    //     inputTitle: '',
    //     inputAmount: '',
    //     inputDate: ''
    // });

    const titleChangeHandler = (e) => {
        setInputTitle(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     inputTitle: e.target.value
        // });
        // setUserInput((prevState) => {
        //     return { ...prevState, inputTitle: e.target.value };
        // });
    };

    const amountChangeHandler = (e) => {
        setInputAmount(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     inputAmount: e.target.value
        // });
    };

    const dateChangeHandler = (e) => {
        setInputDate(e.target.value);
        // setUserInput({
        //     ...userInput,
        //     inputDate: e.target.value
        // });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: inputTitle,
            amount: inputAmount,
            date: new Date(inputDate)
        };

        props.onSubmitExpenseData(expenseData);
        setInputTitle('');
        setInputAmount('');
        setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={inputTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount" min='0.01' step='0.01' value={inputAmount} onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date" min='2019-01-01' max='2022-12-31' value={inputDate} onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;