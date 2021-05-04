import React, { useState, useEffect, useContext } from "react";
import { Line } from "react-chartjs-2";
import axios from 'axios';
import HousingContext from '../views/HousingContext';



const options = {
    legend: {
        display: false,
    },
    scales: {
        xAxes: [{
            gridLines: {
                display: false,
            },
            ticks: {
                fontSize: 15,
                fontColor: 'red'
            }
        }],
        yAxes: [{
            gridLines: {
                drawBorder: false,
            },
            ticks: {
                beginAtZero: true,
                fontSize: 15,
                fontColor: 'red',
                maxTicksLimit: 5,
                padding: 25,
            }
        }]
    },
    tooltips: {
        backgroundColor: 'red'
    }
}
const MainChart = ({ match }) => {
    const { housingData, setHousingData } = useContext(HousingContext);
    console.log(match)

    const [dataOne, setDataOne] = useState([])
    const [chartData, setChartData] = useState([])
    const [chartKeys, setChartKeys] = useState([])
    const [formedData, setFormedData] = useState({})
    const housingTypeMapping = {
        single_family: "Single Family House",
        condo: "Condo",
        bed_1: "One Bedroom",
        bed_2: "Two Bedroom",
        bed_3: "Three Bedroom",
        bed_4: "Four Bedroom",
        bed_5: "Five Plus Bedrooms",
    }

    useEffect(() => {
        const searchHousing = async () => {
            const { data } = await axios.get(`https://sentreliz.com/housing/city/${match.params.id}`)
            setDataOne(data.message)
            setChartData([])
            setHousingData(data)
            const keys = Object.keys(data.message[0].pricing)
            setChartKeys(keys)
        }
        searchHousing()
    }, []);

    useEffect(() => {
        const dataHolder = []
        dataOne.map((obj) => {
            const holder = {
                label: housingTypeMapping[obj.HouseType],
                data: Object.values(obj.pricing),
                fill: true
            }
            dataHolder.push(holder)
        })
        setChartData(dataHolder)
    }, [chartKeys]);

    useEffect(() => {
        const tempData = {
            labels: chartKeys,
            datasets: chartData
        }
        setFormedData(tempData)
        console.log(housingData)
    }, [chartData])

    return (
        <div style={{ maxHeight: "400px", maxWidth: "800px" }}>
            <Line data={formedData} options={options} />
        </div>
    )
}

export default MainChart;