import { Box, Button, Input, Text, VStack } from '@chakra-ui/react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthGoogleContext } from '../../context/authGoogle'
import FullPageLayout from './components/full-page-layout'

export const Login = () => {
  const { signInGoogle, signed } = useContext(AuthGoogleContext);
  async function handleLoginFromGoogle() {
    await signInGoogle();
  }
  if (!signed) {
    return (
      <FullPageLayout>
        <Box>
          <Text
            mb={6}
            textAlign='center'
            color='#C20000'
            fontSize='2xl'
            fontWeight='bold'
          >
            Login
          </Text>
          <Box textAlign='center'>
            <Button borderRadius='xl' px={12} size='md' mt={6} colorScheme='pink' onClick={() => signInGoogle()}>
              <span>Fazer login com Google</span>
            </Button>
          </Box>
        </Box>
      </FullPageLayout>
    )
  } else {
    return <Navigate to="/Home" />;
  }
}
