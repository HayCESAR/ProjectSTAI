import { Login } from '../modules/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { Dashboard } from '../pages/Dashboard';
import { Prediction } from '../pages/Prediction';
import { Datasets } from '../pages/Datasets';
import { Users } from '../pages/Users';
import Sidebar from "../components/navbar/Sidebar";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <HStack w="full" h="100vh" bg="gray.100" padding={10}>
      <Sidebar/>
      <Flex
        as="main"
        w="full"
        h="full"
        bg="white"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        borderRadius="3xl"
      >
        <Fragment>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/prediction' element={<Prediction />} />
            <Route path='/datasets' element={<Datasets />} />
            <Route path='/users' element={<Users />} />
          </Routes>
        </Fragment>
      </Flex>
      </HStack>
    </BrowserRouter>
  );
};
