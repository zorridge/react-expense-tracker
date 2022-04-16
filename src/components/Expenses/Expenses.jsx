import React, { useState } from 'react';

import ExpenseFilter from './ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
    const [yearFilter, setYearFilter] = useState('2021');
    const { items } = props;

    const addFilterHandler = year => {
        setYearFilter(year);
    };

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={yearFilter} onAddFilter={addFilterHandler} />
            <ExpenseItem expense={items[0]} />
            <ExpenseItem expense={items[1]} />
            <ExpenseItem expense={items[2]} />
            <ExpenseItem expense={items[3]} />
        </Card>
    );
};

export default Expenses;