import { useEffect, useState, useCallback } from "react";
import { api } from "../../services/api";

import { CardBox } from "../CardBox";

import {
  ComposedChart as RechartsComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const ComposedChart = () => {
  /* const [chartValues, setChartValues] = useState(linearBar); */
  const [dataValues, setDataValue] = useState([]);
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
    <CardBox title="Grafico Recharts" textBadge="Composed">
      <ResponsiveContainer width="100%" height={400}>
        <RechartsComposedChart width={700} height={300} data={dataValues}>
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="line" stroke="#8884d8" />
          <Bar dataKey="bar" fill="#413ea0" />
        </RechartsComposedChart>
      </ResponsiveContainer>
    </CardBox>
  );
};
