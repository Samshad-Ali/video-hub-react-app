import React, { useState } from 'react';
import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react';
const Videos = () => {
  const videosArr = [
    {
      name: ' 1',
      src: 'https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882',
    },
    {
      name: ' 2',
      src: 'https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf',
    },
    {
      name: ' 3',
      src: 'https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174',
    },
    {
      name: ' 4',
      src: 'https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614',
    },
    {
      name: ' 5',
      src: 'https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174',
    },
  ];
  const [video, setVideo] = useState('');

  return (
    <Stack direction={['column', 'row']} h={'100vh'}>
      <VStack w={'full'}>
        <video
          style={{ width: '100%' }}
          autoPlay
          controls
          controlsList="nodownload"
          muted={false}
          src={video.src}
        ></video>

        <VStack alignItems={'flex-start'} p={'1'} w={'full'}>
          <Heading>Sample Vidoes {video.name} </Heading>
          <Text>This is a sample video of the Vidoe Hub</Text>
        </VStack>
      </VStack>
      <VStack
        alignItems={'stretch'}
        p={'12'}
        w={['full', 'xl']}
        spacing={['2', '6']}
      >
        {videosArr.map((item, id) => {
          return (
            <Button
              onClick={() => {
                setVideo(item);
              }}
              colorScheme={'purple'}
              variant={'ghost'}
            >
              Video {id + 1}
            </Button>
          );
        })}
      </VStack>
    </Stack>
  );
};

export default Videos;
