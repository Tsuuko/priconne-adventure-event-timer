import { Box, ChakraProvider, Stack } from '@chakra-ui/react';
import { AppComponent } from 'next/dist/shared/lib/router/router';
import Div100vh from 'react-div-100vh';
import { Footer } from '../components/Footer';

const App: AppComponent = ({ Component, pageProps }) => {
  return (
    <Div100vh>
      <ChakraProvider>
        <Stack h="full">
          <Box flexGrow={1}>
            <Component {...pageProps} />
          </Box>
          <Footer flexShrink={0} />
        </Stack>
      </ChakraProvider>
    </Div100vh>
  );
};

export default App;
