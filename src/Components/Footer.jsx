import { Box, Button, Heading, HStack, Input, Stack,Text, VStack } from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <Box minH={'40'} bgColor={'blackAlpha.900'} color={'white'} p={'4'} >
      <Stack direction={['column','row']} >
      <VStack w={'full'} alignItems={'stretch'} p={'4'} >
          <Heading size={'sm'} textTransform={'uppercase'} >
            Subscribe to stay updated
          </Heading>
          <HStack borderBottom={'2px solid white'} p={'2'} >
            <Input placeholder='Enter email...'
              border={'none'}
              py={'2'}
              outline={'none'}
              borderRadius='none'
              focusBorderColor='none'
            />
          <Button colorScheme={'purple'} color={'white'} h={'10'} p={'0'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
      <AiOutlineSend size={'20'} color={'purple'} />
          </Button>
      </HStack>
        </VStack>
        <VStack color={'white'} w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']} textTransform={'uppercase'} p={'4'} >
          <Heading size={'md'} >Video Hub</Heading>
          <Text>All right reserved </Text>
        </VStack>
        <VStack w={'full'} textTransform={'uppercase'} p={'4'} >
          <Heading size={'md'} >Social Media</Heading>
          <Button variant={'link'} >
            <a target={'_blank'} href="https://www.youtube.com">YouTube</a>
          </Button>
          <Button variant={'link'} >
            <a target={'_blank'} href="https://www.github.com">GitHub</a>
          </Button>
          <Button variant={'link'} >
            <a target={'_blank'} href="https://www.instagram.com">Instagram</a>
          </Button>
        </VStack>
     </Stack>
    </Box>
  )
}

export default Footer