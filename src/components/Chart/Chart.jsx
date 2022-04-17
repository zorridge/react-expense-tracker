import React from 'react';

import ChartBar from './CharBar';
import './Chart.css';

const Chart = props => {

    return (
        <div className='chart'>
            {props.chartData.map(data => (
                <ChartBar key={data.id} data={data} />
            ))}
        </div>
    );
};

export default Chart;