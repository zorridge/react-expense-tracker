import React from 'react';

import Chart from '../Chart/Chart';

const ExpensesChart = props => {
    const chartDataTemplate = [
        { id: '01', label: 'Jan', value: 0 },
        { id: '02', label: 'Feb', value: 0 },
        { id: '03', label: 'Mar', value: 0 },
        { id: '04', label: 'Apr', value: 0 },
        { id: '05', label: 'May', value: 0 },
        { id: '06', label: 'Jun', value: 0 },
        { id: '07', label: 'Jul', value: 0 },
        { id: '08', label: 'Aug', value: 0 },
        { id: '09', label: 'Sep', value: 0 },
        { id: '10', label: 'Oct', value: 0 },
        { id: '11', label: 'Nov', value: 0 },
        { id: '12', label: 'Dec', value: 0 }
    ];

    // Add expense amount cumulatively by month
    for (let expense of props.expenses) {
        const expenseMonth = expense.date.getMonth(); // Jan -> 0, Feb -> 1, ...
        chartDataTemplate[expenseMonth].value += expense.amount;
    }

    // Find max value
    const dataValuesArray = chartDataTemplate.map(e => e.value);
    const max = Math.max(...dataValuesArray);

    // Add maxValue
    const chartData = chartDataTemplate.map(e => ({ ...e, maxValue: max }));

    return <Chart chartData={chartData} />;
};

export default ExpensesChart;