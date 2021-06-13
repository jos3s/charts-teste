import { useEffect, useState, useCallback } from "react";
import { api } from "../../services/api";

import {
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CardBox } from "../CardBox";

export const data = [
  { name: "Fase 1", value: 0 },
  { name: "Fase 2", value: 0 },
  { name: "Fase 3", value: 0 },
  { name: "Fase 4", value: 0 },
  { name: "Fase 5", value: 0 },
  { name: "Fase 6", value: 0 },
  { name: "Fase 7", value: 0 },
];

export const BarChart = () => {
  /* const [chartValues, setChartValues] = useState(linearBar); */
  const [dataValues, setDataValue] = useState(data);
  const handleData = useCallback(async () => {
    const { data } = await api.get("/posts");
    const series = data.map((data) => ({ name: data.title, value: data.id }));
    setDataValue(series);
    console.log(series);
  }, []);

  useEffect(() => {
    handleData();
  }, [handleData]);

  return (
    <CardBox title="Grafico Recharts" textBadge="Barras">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsBarChart data={dataValues}>
          <CartesianGrid strokeDasharray="34 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </RechartsBarChart>
      </ResponsiveContainer>
    </CardBox>
  );
};
