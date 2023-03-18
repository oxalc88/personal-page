import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import App from './App'


function MyApp() {
    return (
        <ChakraProvider>
            <App />
        </ChakraProvider>)
}

export default MyApp

