import React from 'react'
import {
    Flex,
    Text,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuList
} from '@chakra-ui/react'


export default function NavItem({ icon, index, title, active, navSize, page }: any){
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Menu placement="right">
                <Link
                    backgroundColor={active && "#A4A4A4"}
                    p={3}
                    borderRadius={8}
                    _hover={{ textDecor: 'none', backgroundColor: "#D8D8D8" }}
                    w={navSize == "small" ? "70%" : "100%"}
                    href={page}
                >
                    <MenuButton>
                        <Flex>
                            <Icon as={icon} fontSize="xl" color={active ? "#F2F2F2" : "gray.500"} />
                            <Text ml={5} display={navSize == "small" ? "none" : "flex"} color={active ? "#F2F2F2" : "gray.500"}>{title}</Text>
                        </Flex>
                    </MenuButton>
                </Link>
            </Menu>
        </Flex>
    )
}