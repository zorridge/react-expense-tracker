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

    const filteredItems = items.filter(item => {
        return item.date.getFullYear().toString() === yearFilter;
    });

    return (
        <Card className='expenses'>
            <ExpenseFilter selected={yearFilter} onAddFilter={addFilterHandler} />
            {filteredItems.map(item => <ExpenseItem key={item.id} expense={item} />)}
        </Card>
    );
};

export default Expenses;