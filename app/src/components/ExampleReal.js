import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Brush,
    BarChart,
    Bar,
    ReferenceLine
} from "recharts";


const colorMap = {
    "Single Family Home": "#FADBD8",
    "Condo": "#BD8DBF",
    "One Bedroom": "#BD8DBF",
    "Two Bedroom": "#A286C0",
    "Three Bedroom": "#8781BD",
    "Four Bedroom": "#8493CA",
    "Five Plus Bedrooms": "#7DA7D9"
}

const ExampleReal = ({ match }) => {
    const [dataOne, setDataOne] = useState(null)
    const [lineChart, setLineChart] = useState(null)
    const [rechart, setRechart] = useState(null)

    useEffect(() => {
        const searchHousing = async () => {
            const { data } = await axios.get(`https://sentreliz.com/housing/deepsearch/${match.params.id}`)
            // console.log(data)
            setDataOne(data)
            setRechart(data.rechart)
        }
        searchHousing()
    }, []);

    useEffect(() => {

        if (dataOne) {
            console.log(dataOne)
            const chartKeys = []

            Object.keys(dataOne.rechart[0]).map(val => { if (val != "date") { chartKeys.push(val) } })
            const renderedResults = chartKeys.map((result) => {
                return (
                    <Line key={result} dot={false} type="monotone" dataKey={result} strokeWidth={3} stroke={colorMap[result]} />
                )
            })
            console.log(renderedResults)
            setRechart(dataOne.rechart)
            setLineChart(renderedResults)
        }

    }, [dataOne]);

    return (
        <div>
            <h2>useRechartToPng example with FileSaver</h2>
            <br />
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={rechart}
                    height={500}
                    width={500}
                    margin={{ top: 5, right: 30, left: 20, bottom: 25 }}
                >
                    <XAxis dataKey="date" />

                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend wrapperStyle={{ bottom: 5 }} />
                    {lineChart}
                    <Brush />
                </LineChart>
            </ResponsiveContainer>

            <br />
            <p>Source</p>

        </div >
    );
};
export default ExampleReal;