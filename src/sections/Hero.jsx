import { Box, Center, Circle, Heading, Highlight, Image, Stack, Text } from "@chakra-ui/react"
import muestra from '../assets/myAvatar.png'

const Hero = () => {
    return (
        <Stack
            direction={{ base: "column", lg: "row" }}
            spacing='5'
            my={50}
            mx={{ base: 50, lg: 200, md: 200 }}
            align='center'
        >
            <Circle>
                <Image src={muestra} alt={'Rolando Quispe'} borderRadius='full' objectFit='cover' boxSize={'200px'} m={2} />
            </Circle>
            <Box>
                <Heading lineHeight='tall' m={3} >
                    <Highlight
                        query={['Rolando', 'Quispe']}
                        styles={{
                            px: '2', py: '1', bg: 'teal.100'
                        }}
                    >
                        Hola, soy Rolando Quispe,
                        Desarrollador Full Stack
                    </Highlight>
                </Heading>
                <Box m={3} >
                    <Text fontSize='xl' >Egresado del bootcamp de soyHenry con habilidad de crear aplicaciones de punta a punta usando tecnologías como ReactJS y Redux en el Frontend, junto a tecnologías como NodeJs, Express y Sequelize en el Backend que hacen conexiones con bases de datos Relacionales, como PostgresSQL, y no relacionales, como MongoDB, para mostrarle la información de la aplicación al usuario.</Text>
                </Box>
            </Box>
        </Stack>
    )
}

export default Hero