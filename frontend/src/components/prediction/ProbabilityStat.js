import {
  Box,
  HStack,
  Stat,
  StatLabel,
  StatNumber,
  Fade,
  Center
} from "@chakra-ui/react";


export const ProbabilityStat = ({value, open}) => {

  return (
    <Center>
      <HStack justify="center">
        <Fade in={open}>
          <Box
            p='40px'
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
          >
            <HStack justify="center">
              <Stat>
                <StatLabel>Probabilidade de Saída</StatLabel>
                <StatNumber>{value}%</StatNumber>
              </Stat>
            </HStack>
          </Box>
        </Fade>
      </HStack>
    </Center>
  );
};