/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
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
const data = [
  {
    visitDate: '2022-01-02',
    traffic: 4000,
  },
  {
    visitDate: '2022-01-02',
    traffic: 3000,
  },
  {
    visitDate: '2022-01-02',
    traffic: 2000,
  },
  {
    visitDate: '2022-01-02',
    traffic: 2780,
  },
  {
    visitDate: '2022-01-02',
    traffic: 1890,
  },
  {
    visitDate: '2022-01-02',
    traffic: 2390,
  },
  {
    visitDate: '2022-01-02',
    traffic: 3490,
  },
];

class CustomizedLabel extends PureComponent {
  render() {
    const { x, y,  value } = this.props;

    return (
      <text x={x} y={y} dy={-4} fill="white"  fontSize={15} textAnchor="middle" >
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
        <text x={0} y={0} dy={16} textAnchor="end" fontSize={15} fill="white" transform="rotate(-15)">
          {payload.value}
        </text>
      </g>
    );
  }
}

export default class TestChart extends PureComponent {

  render() {
    return (
      <LineChart
      width={800}
      height={600}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 10
      }}
    >
      <CartesianGrid strokeDasharray="3 3" stroke='white' />
      <XAxis stroke='white' dataKey="visitDate"  height={60} tick={<CustomizedAxisTick />} />
      <YAxis stroke='white'  />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="traffic" stroke="pink">
        <LabelList content={<CustomizedLabel />} />
      </Line>
    </LineChart>
    );
  }
}
