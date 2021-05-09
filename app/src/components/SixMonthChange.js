import React, { useState, useEffect } from "react";
import { Typography } from '@material-ui/core';
import {
    Legend,
    Tooltip,
    XAxis,
    ResponsiveContainer,
    BarChart, Bar
} from "recharts";


const SixMonthChange = ({ data }) => {
    const [rName, setRName] = useState(null);
    const [stName, setStName] = useState(null);
    const [rechartData, setRechartData] = useState([])
    useEffect(() => {
        if (data) {
            const holder = Array.from(data["twelve_months_growth"])
            setRechartData(holder.splice(-36))
            setRName(data.regionName)
            setStName(data.regionState)
        }
    }, [data])


    return (
        <div>
            <Typography variant="subtitle1">Last 3 year % Change</Typography>
            <ResponsiveContainer width="100%" height={100}>
                <BarChart width={150} height={500} data={rechartData} >
                    <XAxis dataKey="date" hide={true} />
                    <Tooltip dataKey="date" cursor={{ stroke: "#e5ffd4" }} contentStyle={{ backgroundColor: "#28303A" }} />
                    <Legend wrapperStyle={{ bottom: 5 }} />
                    <Bar dataKey={rName} fill="#b8ffb6" />
                    <Bar dataKey={stName} fill="#48e8ec" />
                </BarChart>
            </ResponsiveContainer>
        </div >
    )



};
export default SixMonthChange;