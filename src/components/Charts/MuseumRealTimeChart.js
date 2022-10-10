/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent, useEffect, useState } from 'react';
import { reqRealTimeCapacity } from '../../api';
import Stack from '@mui/material/Stack';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    LabelList
} from "recharts";



class CustomizedLabel extends PureComponent {

    render() {
        const { x, y, value } = this.props;

        return (
            <text x={x} y={y} dy={-4} fill="BLACK" fontSize={15} textAnchor="middle" >
                {value}
            </text>
        );
    }
}

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fontSize={15} fill="BLACK" transform="rotate(-15)">
                    {payload.value}
                </text>
            </g>
        );
    }
}
const MuseumRealTimeChart = ({ show }) => {

    const [realTimeVisitor, setRealTimeVisitor] = useState([{
        date: "00:00:00",
        visitorNumbers: 0
    }, {
        date: "00:00:00",
        visitorNumbers: 0
    }, {
        date: "00:00:00",
        visitorNumbers: 0
    }, {
        date: "00:00:00",
        visitorNumbers: 0
    }, {
        date: "00:00:00",
        visitorNumbers: 0
    }, {
        date: "00:00:00",
        visitorNumbers: 0
    }, {
        date: "00:00:00",
        visitorNumbers: 0
    }])

    useEffect(() => {
        const timer = setInterval(() => {
            // 注:在setCount中使用箭头函数是最好方式之一,只有一个timer生成
            handleRealTimeVisitor();

        }, 3000)
        return () => {
            clearInterval(timer)
        }

    }, [realTimeVisitor]);//eslint-disable-line

    //获取7日内的数据
    const handleRealTimeVisitor = async () => {
        const temp = realTimeVisitor;

        const response = await reqRealTimeCapacity();

        var date = new Date();

        var hours = date.getHours();

        var minutes = date.getMinutes();

        var seconds = date.getSeconds();
        if (hours >= 0 && hours <= 9) {
            hours = "0" + hours;
        }
        if (minutes >= 0 && minutes <= 9) {
            minutes = "0" + minutes;
        }
        if (seconds >= 0 && seconds <= 9) {
            seconds = "0" + seconds;
        }

        if (temp.length >= 7) {
            const tempSec = {
                date: hours + ":" + minutes + ":" + seconds,
                visitorNumbers: response.data
            };
            temp.shift();
            temp.push(tempSec)
            setRealTimeVisitor(temp)

        } else {
            const tempSec = {
                date: hours + ":" + minutes + ":" + seconds,
                visitorNumbers: response.data
            };
            temp.push(tempSec)
            setRealTimeVisitor(temp)
        }

        console.log(temp)

    }

    return (
        <Stack
            spacing={-3}
        >
            <div style={{
                display: show,
                fontFamily: 'Inter',
                fontStyle: 'italic',
                fontWeight: '400',
                fontSize: '28px',
                lineHeight: '34px',
                color: '#000000',
                marginRight: "200px"
            }}>Real Time Visitors</div>
            <div>

                <LineChart
                    width={800}
                    height={550}
                    data={realTimeVisitor}
                    style={{ display: show }}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis stroke='BLACK' dataKey="date" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis stroke='BLACK' />
                    <Tooltip />

                    <Legend />
                    <Line type="monotone" dataKey="visitorNumbers" stroke="#8884d8" activeDot={{ r: 8 }}>
                        <LabelList content={<CustomizedLabel />} />
                    </Line>
                </LineChart>
            </div>
        </Stack>
    );

}
export default MuseumRealTimeChart;