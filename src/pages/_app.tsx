import {ChakraProvider} from '@chakra-ui/core'
import {ApolloProvider} from '@apollo/client';
import theme from '../theme'
import {AppProps} from 'next/app'
import client from "../services/api";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ApolloProvider client={client}>
            <ChakraProvider resetCSS theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default MyApp
