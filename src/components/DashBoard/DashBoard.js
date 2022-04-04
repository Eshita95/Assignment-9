import React from 'react';
import { Area, AreaChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid grid-cols-2 mx-16 my-16'>
            <div>
                <LineChart width={500} height={400} data={data}>
                    <Line dataKey={"investment"}></Line>
                    <Line dataKey={"revenue"}></Line>
                    <Line dataKey={"sell"}></Line>
                    <YAxis></YAxis>
                    <XAxis dataKey={"month"}></XAxis>
                    <Tooltip></Tooltip>

                </LineChart>
            </div>
            <div>
                <AreaChart width={500} height={400} data={data}>
                    <Area dataKey={"investment"}></Area>
                    <Area dataKey={"sell"} stroke ="#82ca9d" fill='#cb4335'></Area>
                    <Area dataKey={"revenue"} stroke ="#ffc658" fill='#ffc658'></Area>
                    <YAxis></YAxis>
                    <XAxis dataKey={"month"}></XAxis>
                    <Tooltip></Tooltip>
                </AreaChart>
            </div>
        </div>
    );
};

export default DashBoard;