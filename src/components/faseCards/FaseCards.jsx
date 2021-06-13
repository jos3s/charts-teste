import React, {useState,useEffect} from "react";

//import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";

//import Col from "react-bootstrap/Col";
//import Row from "react-bootstrap/Row";
//import Card from "./../cards/Card"

import {
	Stat,
	StatLabel,
	StatNumber,
	StatHelpText,
	HStack,
	Flex,
	Spacer,
	SimpleGrid,
} from "@chakra-ui/react";


import { posts } from "../../services/api";
export default  function FaseCards(props) {



	return (
		<SimpleGrid m={5} minChildWidth="160px" spacing="40px">
			{props.data.map((el, idx) => {
				return (
					<Stat
						px={{
							base: 4,
							sm: 6,
						}}
						py="3"
						shadow="base"
						rounded="lg"
						key={el.fase}
					>
						<StatLabel>{el.fase}</StatLabel>
						<StatNumber>{el.value}</StatNumber>
						<StatHelpText>N de frutos</StatHelpText>
					</Stat>
				);
			})}
		</SimpleGrid>
	);
}
