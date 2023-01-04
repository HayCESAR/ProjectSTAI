import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
} from '@chakra-ui/react'
  
export const FactorsStatGroup = ()  => {

    return(
        <StatGroup>

            <Stat>
                <StatLabel>Regime de Trabalho</StatLabel>
                <StatNumber>10%</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                7.05
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Gênero</StatLabel>
                <StatNumber>3.45%</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                2.36
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Reconhecimento</StatLabel>
                <StatNumber>4.5%</StatNumber>
                <StatHelpText>
                <StatArrow type='decrease' />
                1.05
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Idade</StatLabel>
                <StatNumber>1.5%</StatNumber>
                <StatHelpText>
                <StatArrow type='decrease' />
                0.05
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Senioridade</StatLabel>
                <StatNumber>2.5%</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                0.5
                </StatHelpText>
            </Stat>

        </StatGroup>
    );
}