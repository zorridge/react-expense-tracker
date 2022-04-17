import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
    const [yearFilter, setYearFilter] = useState('2021');
    const { items } = props;

    const addFilterHandler = year => {
        setYearFilter(year);
    };

    const filteredItems = items.filter(item => {
        return item.date.getFullYear().toString() === yearFilter;
    });

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={yearFilter} onAddFilter={addFilterHandler} />
            <ExpensesChart expenses={filteredItems} />
            <ExpensesList items={filteredItems} />
        </Card>
    );
};

export default Expenses;