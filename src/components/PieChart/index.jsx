import { useEffect, useState, useCallback } from "react";
import { api } from "../../services/api";

import { CardBox } from "../CardBox";

import {
  PieChart as RechartsPieChart,
  Pie,
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

export const PieChart = () => {
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
    <CardBox title="Grafico Recharts" textBadge="Pie">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsPieChart width={700} height={300}>
          <Tooltip />
          <Legend />
          <Pie
            data={dataValues}
            dataKey="value"
            fill="#8884d8"
            innerRadius={50}
          />
        </RechartsPieChart>
      </ResponsiveContainer>
    </CardBox>
  );
};
