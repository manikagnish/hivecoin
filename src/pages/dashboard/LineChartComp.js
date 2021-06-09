import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Dec 1",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Dec 7",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Dec 14",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Dec 21",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Dec 28",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Dec 35",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Dec 42",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class LineChartComp extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/synchronized-line-charts-zc3nl";

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#eb862c"
              fill="#eb862c"
            />
            <Brush fill="#fff" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
