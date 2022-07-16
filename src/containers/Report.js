import moment from 'moment';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const Report = ({ chartData }) => {

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
    };
    let collectLabels = [];
    let dataValue = [];
    try {
        chartData.map(item => {
            if (!collectLabels.some(label => moment(label.format('YYYY-MM-DD')).isSame(moment(item.date).format('YYYY-MM-DD')))) {
                return collectLabels.push(item.date)
            }
            return collectLabels;
        })

        collectLabels.map(item => {
            let count = 0;
            chartData.map(data => {
                if (moment(data.date.format('YYYY-MM-DD')).isSame(moment(item).format('YYYY-MM-DD'))) {
                    count += data.total_duration
                }
                return count;
            })

            dataValue.push(count)
            return dataValue;
        })
        collectLabels = collectLabels.map(x => moment(x).format('YYYY-MM-DD'));
    } catch (e) {
        console.log("something went wrong", e)
    }

    const data = {
        "labels":
            collectLabels,
        "datasets": [
            { "label": "Mintutes", "data": dataValue, "backgroundColor": "rgba(255, 99, 132, 0.5)" }]
    }
    return <div style={{ top: "10px", height: '400px' }}>
        Report of the user
        <Bar options={options} data={data} />
    </div>
}

export default Report;