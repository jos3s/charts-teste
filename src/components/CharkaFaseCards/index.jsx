import { useEffect, useState, useCallback } from "react";
import { api } from "../../services/api";
import { SimpleGrid } from "@chakra-ui/react";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatGroup,
} from "@chakra-ui/react";

export const data = [
  { name: "Fase 1", value: 0 },
  { name: "Fase 2", value: 0 },
  { name: "Fase 3", value: 0 },
  { name: "Fase 4", value: 0 },
  { name: "Fase 5", value: 0 },
  { name: "Fase 6", value: 0 },
  { name: "Fase 7", value: 0 },
];

export const CharkaFaseCards = ({ children }) => {
  const [dataValues] = useState(data);

  return (
    <StatGroup>
      {dataValues.map((data) => (
        <Stat
          key={data.name}
          p="2"
          size="sm"
          borderWidth="1px"
          borderRadius="lg"
          m="3"
        >
          <StatLabel> {data.name}</StatLabel>
          <StatNumber>{data.value}</StatNumber>
          <StatHelpText>Nº de Frutos</StatHelpText>
        </Stat>
      ))}
    </StatGroup>
  );
};
