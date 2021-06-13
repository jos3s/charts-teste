import "./App.css";
//import Card from "./components/cards/Card";
/* import BarChat from "./components/charts/BarChat";
import FaseCards from "./components/faseCards/FaseCards";
import CardApi from "./components/cardApi/CardApi"; */

import "bootstrap/dist/css/bootstrap.min.css";
import MyAwesomeTable from "./components/table/Table";
/* 
import Chart from "react-apexcharts";

import Card from "react-bootstrap/Card";

import Navbar from "react-bootstrap/Navbar";
 */
/* import CardDeck from "react-bootstrap/CardDeck"; */
/* import { linearBar, treemap, donut, faseDataCars } from "./data/chartsData.js"; */

//import CCards from "./components/CCards/CCards";
import { LinearChart } from "./components/LinearChart";
import { BarChart } from "./components/BarChart";
import { ComposedChart } from "./components/ComposedChart";
import { AreaChart } from "./components/AreaChart";
import { CharkaFaseCards } from "./components/CharkaFaseCards";
import { PieChart } from "./components/PieChart";
import { TreeMapChart } from "./components/TreeMapChart";
import { CardBox } from "./components/CardBox";

import { Box, Stack, SimpleGrid, ChakraProvider, Flex } from "@chakra-ui/react";
/* import { useEffect, useState } from "react";
import { api } from "./services/api"; */
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <CharkaFaseCards  />
      <SimpleGrid minChildWidth="400px" spacing="20px" m="3">
        <LinearChart />
        <BarChart />
        <LinearChart />
        <BarChart />
      </SimpleGrid>
      <SimpleGrid minChildWidth="400px" spacing="20px" m="3">
        <ComposedChart />
        <AreaChart />
      </SimpleGrid>
      <SimpleGrid minChildWidth="400px" spacing="20px" m="3">
        <TreeMapChart />
        <PieChart />
      </SimpleGrid>
      <SimpleGrid minChildWidth="400px" spacing="10px" m="3">
        <CardBox title="React Grid Table" textBadge="Tabela">
          <MyAwesomeTable />
        </CardBox>
      </SimpleGrid>
      {/* <CardDeck className="text-center m-2"></CardDeck>
      <CardDeck className="text-center m-2"></CardDeck> */}

      {/* <div className="App">
				<Heading textAlign="center" m={3}>
					Ánalise
				</Heading>

				<FaseCards data={faseDataCars}></FaseCards>

				<CardDeck className="text-center m-2">
					<Card>
						<Card.Body>
							<Chart
								options={linearBar.options}
								series={linearBar.series}
								type={"bar"}
								height={400}
							></Chart>
						</Card.Body>
						<Card.Footer>
							<Card.Title>Grafico de barra</Card.Title>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Body>
							<Chart
								options={linearBar.options}
								series={linearBar.series}
								type={"line"}
								height={400}
							/>
						</Card.Body>
						<Card.Footer>
							<Card.Title>Grafico de linha</Card.Title>
						</Card.Footer>
					</Card>
					<Card>
						<Card.Body>
							<Chart
								options={donut.options}
								series={donut.series}
								type={"pie"}
							/>
						</Card.Body>
						<Card.Footer>
							<Card.Title>Grafico de pizza</Card.Title>
						</Card.Footer>
					</Card>
				</CardDeck>

				<SimpleGrid m={5} minChildWidth="500px" spacing="40px">
					<Box
						flex="1"
						borderWidth="1px"
						borderRadius="lg"
						maxH="600px"
					>
						<Box mb={2}>
							<MyAwesomeTable />
						</Box>
						<Divider />
						<Box bg="#f7f7f7" p={2}>
							<Heading as="h4" textAlign="center">
								Tabela
							</Heading>
						</Box>
					</Box>
					<Box
						borderWidth="1px"
						borderRadius="lg"
						flex="1"
						maxH="745px"
						
					>
						<Box p={3}>
							<Chart
								options={treemap.options}
								series={treemap.series}
								type={"treemap"}
							/>
						</Box>
						<Divider />
						<Box bg="#f7f7f7" p={2}>
							<Heading as="h4" textAlign="center">
								Grafico de treemap
							</Heading>
						</Box>
					</Box>
				</SimpleGrid>

				<Stack>
					<Card className="text-center m-3">
						<BarChat></BarChat>

						<Card.Footer>Grafico de barras(Charts.js)</Card.Footer>
					</Card>
				</Stack>
				

				<CardApi></CardApi>
			</div> */}
    </ChakraProvider>
  );
}

export default App;
