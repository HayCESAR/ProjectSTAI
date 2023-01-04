import React, { ReactNode } from 'react'

import { Box, Container, Text, Image } from '@chakra-ui/react'
import Logo from '../../common/assets/logo-stai.png'

export const FullPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    
      <Box
        backgroundColor='#F5F5F8'
        h='100vh !important'
        w='100%'
        display='flex'
        flexDir='column'
        alignItems='flex-start'
        justifyContent='center'
        overflowY='auto'
        p={[1, 6]}
      >
        <Box
          w='full'
          display='flex'
          alignItems='center'
           justifyContent='center'
          as='header'
          pb={[3, 7]}
        >
          <Image src={Logo} alt='stai' width={48} maxW='full' />
        </Box>
        <Container
          p={8}
          w={['none', 'lg']}
          bg={['none', 'white']}
          borderRadius={['none', 10]}
          boxShadow={['none', '0px 0px 20px 2px #E5E5E5']}
          maxW='container.md'
          >
            {children}
            <Box mt={6} justifyContent='center'>
              <Text textAlign='center' fontSize='xs' color='gray.300'>
                © 2022 - STAI todos os direitos reservados
              </Text>
            </Box>
          </Container>
      </Box>
      
    
  )
}

export default FullPageLayout
