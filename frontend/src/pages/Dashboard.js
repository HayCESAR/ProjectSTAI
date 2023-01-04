import { useContext } from "react";
import { AuthGoogleContext } from "../context/authGoogle";
import { Box, Text } from "@chakra-ui/react";
import { SearchBar } from '../components/dashboard/SearchBar';
import { FactorsStatGroup } from '../components/dashboard/FactorsStatGroup';

import React, { useEffect, useState } from "react";

export const Dashboard = () => {
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/dashboard").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
    <Box>
      <SearchBar />
    </Box>
    <Box>
      <FactorsStatGroup />
    </Box>
    <Box>
      {(typeof backendData.charts === 'undefined') ? (
        <Text fontSize={100} color="gray.300">
        Loading...
        </Text>
      ) : (
          <Text fontSize={100} color="gray.300">
            {backendData.charts}
          </Text>
      )}
    </Box>
    </>
    )
    //Índice de turnover atual
    //4 Fatores de maior impacto atual (porcentagem de impacto)
    //gráfico do turnover através dos meses
    //Turnover por célula
    //Turnover por cargo
    //Turnover por senioridade
    //Turnover por gênero
}