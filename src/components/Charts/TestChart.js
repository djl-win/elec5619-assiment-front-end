/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { reqSevenDaysData } from '../../api'
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

export default class TestChart extends PureComponent {
  state = {
    sevenDaysData:[]
  }

  //页面加载时,获取数据
  componentDidMount() {
    this.handleSevenDaysData();
  }

  //获取7日内的数据
  handleSevenDaysData = async () => {
    const response = await reqSevenDaysData();
    this.setState({
      sevenDaysData: response.data
    })
    console.log(response.data)
  }

  render() {
    return (
      <LineChart
        width={800}
        height={600}
        data={this.state.sevenDaysData}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 10
        }}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis stroke='BLACK' dataKey="date" height={60} tick={<CustomizedAxisTick />} />
        <YAxis stroke='BLACK' />
        <Tooltip />

        <Legend />
        <Line type="monotone" dataKey="visitorNumber" stroke="#8884d8" activeDot={{ r: 8 }}>
          <LabelList content={<CustomizedLabel />} />
        </Line>
      </LineChart>
    );
  }
}
