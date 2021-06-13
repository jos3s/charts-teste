import { useState, useEffect, useCallback } from "react";

import { CardBox } from "../CardBox";

import { Treemap, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Area 1",
    children: [
      { name: "Fase 1", value: 23 },
      { name: "Fase 2", value: 3 },
      { name: "Fase 3", value: 2 },
      { name: "Fase 4", value: 0 },
      { name: "Fase 5", value: 20 },
      { name: "Fase 6", value: 15 },
      { name: "Fase 7", value: 9 },
    ],
  },
];

export const TreeMapChart = () => {
  const [dataValues] = useState(data);

  return (
    <CardBox title="Grafico Recharts" textBadge="TreeMap">
      <ResponsiveContainer width="100%" height={400}>
        <Treemap
          width={400}
          height={200}
          data={dataValues}
          dataKey="value"
          stroke="#fff"
          fill="#8884d8"
        />
      </ResponsiveContainer>
    </CardBox>
  );
};
