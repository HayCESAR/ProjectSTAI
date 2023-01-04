import React, { useState } from 'react'
import {
    Flex,
    IconButton,
    Divider,
    Image
} from '@chakra-ui/react'
import {
    FiMenu,
    FiPieChart,
    FiThermometer,
    FiDatabase,
    FiUsers
} from 'react-icons/fi'
import NavItem from './NavItem'
import LogoStai from './logo-stai.png'
import { AvatarBox } from './AvatarBox'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large");

    return (
        <Flex
            pos="sticky"
            left="5"
            h="100%"
            w={navSize == "small" ? "75px" : "15%"}
            flexDir="column"
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Flex mt={4} align="center" justifyContent="space-between">
                    <Image src={LogoStai} alt='stai' />
                </Flex>
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <IconButton
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={<FiMenu />}
                    aria-label='Menu'
                    onClick={() => {
                        if (navSize == "small")
                            changeNavSize("large")
                        else
                            changeNavSize("small")
                    }}
                />
                <NavItem index={1} navSize={navSize} icon={FiPieChart} title="Dashboard" page={'/dashboard'}/>
                <NavItem index={2} navSize={navSize} icon={FiThermometer} title="Predição" page={'/prediction'}/>
                <NavItem index={3} navSize={navSize} icon={FiDatabase} title="Base de Dados" page={'/datasets'}/>
                <NavItem index={4} navSize={navSize} icon={FiUsers} title="Usuários" page={'/users'}/>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center" justifyContent="space-between">
                    <AvatarBox navSize={navSize} />
                </Flex>
            </Flex>
        </Flex>
    )
}