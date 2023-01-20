import React from 'react'
import { Avatar, Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const SignUp = () => {
  
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'8'} >
        <form >
          <VStack alignItems={'stretch'} spacing={'4'} w={['full','96']} m={'auto'} my={'16'} >
            <Heading textAlign={'center'} >VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={'28'} />
            <Input placeholder='Name' type={'text'} required focusBorderColor={'purple.500'} />
            <Input placeholder='Email' type={'email'} required focusBorderColor={'purple.500'} />
            <Input placeholder='Password' type={'password'} required focusBorderColor={'purple.500'} />
            <Input placeholder='confirm password' type={'password'} required focusBorderColor={'purple.500'} />
          
            <Button type='submit' colorScheme={'purple'}><Link to={'/login'}>Sign Up</Link></Button>
            <Text textAlign={'right'} >Already Signed Up ?  <Button colorScheme={'purple'} variant={'link'}><Link to='/login'>Log In</Link></Button> </Text>
          </VStack>
  </form>
      </Container>
  )
}

export default SignUp