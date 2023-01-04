import React from "react";
import ScaleText from "react-scale-text";
import { Avatar, Box, Flex, IconButton, Text } from "@chakra-ui/react";

export const AvatarBox  = ({navSize}) => {

  return(
    <Flex
      borderWidth={0}
      borderColor="gray.100"
      borderRadius="full"
      w="full"
      p={2}
      alignItems="center"
      justifyContent="space-between"
      gap={2}
      flexDirection={"row"}
    >
      <Avatar name="STAI-USER" bg="teal.300" src=""/>
      <Flex
        w="full"
        flexDirection="column"
        gap={4}
        justifyContent="center"
        alignItems="flex-start"
        display={navSize == "small" ? "none" : "flex"}
      >
        <Text fontWeight="bold" pb="0" lineHeight={0}>
          Olá, STAI-USER
        </Text>
        <Text as="small" color="gray.500" fontSize={14} lineHeight={0} ellipsizeMode='tail'>
          STAI-USER@cesar.org
        </Text>
        <Text as="small" color="gray.500" fontSize={12} lineHeight={0} ellipsizeMode='tail'>
          <a href="/home">sair</a>
        </Text>
      </Flex>
    </Flex>
  );
};