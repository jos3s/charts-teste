import { useEffect, useState, useCallback } from "react";
import { api } from "../../services/api";

import { CardBox } from "../CardBox";

import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const data = [
  { name: "Fase 1", value: 0 },
  { name: "Fase 2", value: 0 },
  { name: "Fase 3", value: 0 },
  { name: "Fase 4", value: 0 },
  { name: "Fase 5", value: 0 },
  { name: "Fase 6", value: 0 },
  { name: "Fase 7", value: 0 },
];

export const AreaChart = () => {
  /* const [chartValues, setChartValues] = useState(linearBar); */
  const [dataValues, setDataValue] = useState(data);
  const handleData = useCallback(async () => {
    const { data } = await api.get("/posts");
    const series = data.map((data) => ({
      name: data.title,
      bar: data.id,
      line: data.id * 3,
    }));
    setDataValue(series);
    console.log(series);
  }, []);

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <CardBox title="Grafico Recharts" textBadge="Area">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsAreaChart width={700} height={300} data={dataValues}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Area type="monotone" dataKey="line" stroke="#8884d8" />
          <Area dataKey="bar" fill="#413ea0" />
        </RechartsAreaChart>
      </ResponsiveContainer>
    </CardBox>
  );
};
