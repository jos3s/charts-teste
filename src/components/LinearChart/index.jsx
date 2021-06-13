import { useEffect, useState, useCallback } from "react";
import { api } from "../../services/api";

import { CardBox } from "../CardBox";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const data = [
  { name: "Fase 1", value: 40 },
  { name: "Fase 2", value: 34 },
  { name: "Fase 3", value: 78 },
  { name: "Fase 4", value: 29 },
  { name: "Fase 5", value: 46 },
  { name: "Fase 6", value: 89 },
  { name: "Fase 7", value: 200 },
];

export const LinearChart = () => {
  /* const [chartValues, setChartValues] = useState(linearBar); */
  const [dataValues, setDataValue] = useState(data);

  const handleData = useCallback(async () => {
    const { data } = await api.get("/posts");
    const series = data.map((data) => ({ name: data.title, value: data.id }));
    setDataValue(series);
  }, []);

  return (
    <CardBox
      title="Grafico Recharts"
      textBadge="Linha"
      button
      textButton="Update"
      handleClick={handleData}
    >
      <ResponsiveContainer width="100%" height={400}>
        <LineChart width={700} height={300} data={dataValues}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </CardBox>
  );
};
