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
                    <Text fontSize='xl' >Egresado del bootcamp de soyHenry y desarrollo proyectos de punta a punta haciendo el modelado de datos y el backend usando tecnologías como NodeJs, Express, Sequelize, para almacenar en bases de datos SQL como Postgres, y/o NoSQL como MongoDb, creando con ellos REST API que se comunican con el frontend que visualiza el usuario a través de interfaces creadas y gestionadas con ReactJs y Redux.</Text>
                </Box>
            </Box>
        </Stack>
    )
}

export default Hero