import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expense.title);

    const { amount, date } = props.expense;

    const clickHandler = () => {
        setTitle('Updated!');
        console.log('Title changed...');
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate rawDate={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>
        </Card>
    );
};

export default ExpenseItem;