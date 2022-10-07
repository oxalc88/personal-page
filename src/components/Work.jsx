import { Box, Center, Circle, Heading, Highlight, Image, Link, Stack, Text, Tooltip } from "@chakra-ui/react"
import countries from '../assets/Countries.jpeg'


const Work = () => {
    return (
        <Box bg={'teal.100'} py={5}>
            <Box
                my={5}
                mx={100}
                display={'flex'}
                justifyContent={{
                    base: 'center', lg: 'flex-start'
                }}
            >
                <Heading fontSize='xl'>Proyectos</Heading>
            </Box>
            <Stack
                direction={{ base: "column", lg: "row" }}
                spacing='5'
                my={10}
                mx={100}
                p={10}
                align='center'
                bg={'teal.50'}
                borderRadius={'md'}
                borderWidth='1px'
            >

                <Box maxW='sm' overflow='hidden'>
                    <Image src={countries} alt={'Proyecto Paises'} objectFit='cover' m={2} borderRadius={'md'} />
                </Box>
                <Box>
                    <Heading m={2} fontSize='4xl'>Aplicación Countries</Heading>
                    <Stack direction='row'>
                        <Text
                            bg={'gray.600'}
                            borderRadius='full'
                            px={2}
                            mx={2}
                            color={'teal.50'}
                        >
                            2022
                        </Text>

                        <Box color={'gray.600'}>
                            Full Stack
                        </Box>
                    </Stack>
                    <Box m={3} >
                        <Text fontSize='lg'>
                            Proyecto individual para <Link color={'gray.600'} href="https://www.soyhenry.com/">Henry</Link>, se usó ReactJS y Redux en el Frontend.
                            Para el backend se usó NodeJs, Express y Sequelize para conectarse con una base de datos de PostgresSQL.
                        </Text>
                    </Box>
                </Box>
            </Stack>
        </Box>
    )
}

export default Work
