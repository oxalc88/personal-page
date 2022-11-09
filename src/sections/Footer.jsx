import { Box, Center, Flex, HStack, Icon, Link, Stack, Text } from "@chakra-ui/react"
import { SiGithub, SiLinkedin } from "react-icons/si"
import { FaRegCopyright } from 'react-icons/fa'

const Footer = () => {
    return (
        <Stack
            my={50}
        >
            <Center>
                <HStack
                    spacing='5'
                >
                    <Link href="https://www.linkedin.com/in/rolando-quispe/" isExternal>
                        <Icon as={SiLinkedin} w={8} h={8} _hover={{ color: 'teal.500' }} />
                    </Link>
                    <Link href="https://github.com/oxalc88" isExternal>
                        <Icon as={SiGithub} w={8} h={8} _hover={{ color: 'teal.500' }} />
                    </Link>
                </HStack>
                <Box m={4}>
                    <Icon as={FaRegCopyright} /> 2022 Rolando Quispe, todos los derechos reservados.
                </Box>
            </Center>
        </Stack>
    )
}

export default Footer