import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const { title, amount, date } = props.expense;

    return (
        <Card className='expense-item'>
            <ExpenseDate rawDate={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${amount}</div>
            </div>
        </Card>
    );
};

export default ExpenseItem;