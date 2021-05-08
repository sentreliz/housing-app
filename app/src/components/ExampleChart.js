import React, { useState, useEffect, useContext } from "react";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Brush
} from "recharts";



const ExampleChart = () => {


    const data = [
        { date: "2055-6-1/1", name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
        { date: "2055-6-1/2", name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
        { date: "2055-6-1/3", name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
        { date: "2055-6-1/4", name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
        { date: "2055-6-1/5", name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
        { date: "2055-6-1/6", name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
        { date: "2055-6-1/7", name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
    ];
    return (
        <div>
            <h2>useRechartToPng example with FileSaver</h2>
            <br />
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={data}
                    height={500}
                    width={500}
                    margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                >
                    <XAxis dataKey="date" />

                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend wrapperStyle={{ bottom: 5 }} />
                    <Line
                        dot={false}
                        type="monotone"
                        dataKey="pv"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                    <Line dot={false} type="monotone" dataKey="uv" stroke="#82ca9d" />
                    <Brush />
                </LineChart>
            </ResponsiveContainer>
            <br />
            <p>Source</p>

        </div >
    );
};
export default ExampleChart;