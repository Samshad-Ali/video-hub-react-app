import { Box, Container, Heading, Image, Text, Stack, transform } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img_1 from '../assets/1.jpg'
import img_2 from '../assets/2.jpg'
import img_3 from '../assets/3.jpg'
import img_4 from '../assets/4.jpg'
import img_5 from '../assets/5.png'
const Home = () => {

  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={['80vh','100vh']}  p={['4','16']} >
        
          <Heading
            textTransform={'uppercase'}
            w={'fit-content'}
            borderBottom={'2px solid black'}
           m={'auto'}
          >
            Services
          </Heading>
        <Stack h={'full'}
          direction={['column','row-reverse']}
          p={'4'}
          alignItems={'center'}
        >
          <Image src={img_5} filter={'hue-rotate(-130deg)'} h={['40','400']} />
          <Text textAlign={'center'} letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit harum omnis earum amet, quo minima, dolorum sint et placeat eius eaque quam eligendi fuga adipisci assumenda aut sit laborum pariatur?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, voluptatum veritatis ad illo nihil eligendi veniam optio reprehenderit minus sed architecto et praesentium quidem cum, culpa delectus ea, eveniet expedita?
          </Text>
        </Stack>
      </Container>
   </Box>
  )
}

const MyCarousel = () => {

  const h = {
    pos: 'absolute',
    left:'50%',
    top: '50%',
    textTransform: 'UpperCase',
    transform: 'translate(-50%,-50%)',
    p:'4',
    borderRadius:'1',
    fontSize:['12','24']
  }

  return (
    
    
    <Carousel
    showArrows={false}
      showThumbs={false}
      showStatus={false}
    infiniteLoop
    autoPlay
    interval={2000}
  >
    <Box w={'full'}  h={'100vh'} > 
      <Image src={img_1} w={'fit-content'} sizes />
      <Heading bgColor={'blackAlpha.600'} {...h} color='white' size={['4','16']} >Watch the Future</Heading>
    </Box>
    <Box w={'full'}  h={'100vh'} > 
      <Image src={img_2} w={'fit-content'} />
      <Heading bgColor={'whiteAlpha.900'} {...h} color='black' >Gaming will Rule the World</Heading>
    </Box>
    <Box w={'full'}  h={'100vh'} > 
      <Image src={img_3} />
      <Heading bgColor={'blackAlpha.600'} {...h} color='white' >Gaming is Future</Heading>
    </Box>
    <Box w={'full'}  h={'100vh'} > 
      <Image src={img_4} />
      <Heading bgColor={'whiteAlpha.900'} {...h} color='black' >Night Life is Cool</Heading>
    </Box>
  

 
  </Carousel>
    )
}

export default Home;