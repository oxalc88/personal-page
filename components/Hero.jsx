import { Box, Circle, Heading, Highlight, Link, Stack, Text } from "@chakra-ui/react"
import Image from "next/image"
import muestra from '../public/assets/myAvatar.png'

const Hero = () => {
    return (
        <Stack
            direction={{ base: "column", lg: "row" }}
            spacing='5'
            my={50}
            mx={{ base: 50, lg: 200, md: 200 }}
            align='center'
        >

            <Circle position='relative' borderRadius='full' boxSize={'200px'} m={2} overflow="hidden">
                <Box position="absolute" inset={0}>
                    <Image src={muestra} alt={'Rolando Quispe'} fill cover />
                </Box>
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
                    <Text fontSize='xl' >Soy egresado del <Link color={'gray.800'} href="https://www.soyhenry.com/">Bootcamp de SoyHenry</Link> y desarrollo proyectos de punta a punta haciendo el modelado de datos y el backend usando tecnologías como NodeJs, Express, Sequelize, que almacenan información en bases de datos SQL como Postgres, y/o NoSQL como MongoDb, creando así REST API que se comunican con el frontend que visualiza el usuario a través de interfaces creadas y gestionadas con ReactJs y Redux.</Text>
                </Box>
            </Box>
        </Stack>
    )
}

export default Hero