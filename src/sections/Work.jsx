import { Box, Center, Circle, Heading, Highlight, Icon, Image, Link, List, ListIcon, ListItem, Spacer, Stack, Text, Tooltip, Wrap, WrapItem } from "@chakra-ui/react"
import countries from '../assets/Countries.jpeg'
import group from '../assets/PanelAdminHome.png'
import Project from "../components/Project"
import { MdCheckCircle, MdSettings } from "react-icons/md";

const techGrupal = [
    { name: 'React', url: 'https://es.reactjs.org/' },
    { name: 'Chakra UI', url: 'https://chakra-ui.com/' },
    { name: 'React Simple Chatbot', url: 'https://lucasbassetti.com.br/react-simple-chatbot/' },
    { name: 'Cloudinary', url: 'https://cloudinary.com/documentation/image_upload_api_reference' },
    { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
    { name: 'React Apex Charts', url: 'https://apexcharts.com/docs/react-charts/' },
    { name: 'Mercado Pago', url: 'https://www.mercadopago.com.pe/developers/es' },
    { name: 'NodeJs', url: 'https://nodejs.org/en/' },
    { name: 'ExpressJs', url: 'https://expressjs.com/es/' },
    { name: 'Auth0', url: 'https://auth0.com/es' },
    { name: 'Nodemailer', url: 'https://nodemailer.com/about/' },
    { name: 'MongoDB', url: 'https://www.mongodb.com/' },
    { name: 'Mongoose', url: 'https://mongoosejs.com/' },
    { name: 'Mongo Atlas', url: 'https://www.mongodb.com/es/atlas/database' },
]

const techIndividual = [
    { name: 'React', url: 'https://es.reactjs.org/' },
    { name: 'Redux', url: 'https://es.redux.js.org/' },
    { name: 'NodeJs', url: 'https://nodejs.org/en/' },
    { name: 'ExpressJs', url: 'https://expressjs.com/es/' },
    { name: 'Sequelize', url: 'https://sequelize.org/' },
    { name: 'Docker', url: 'https://www.docker.com/' },
]

const Work = () => {
    return (
        <Box bg={'teal.100'} py={5}>
            <Box
                my={5}
                mx={{ base: 50, lg: 200, md: 200 }}
                display={'flex'}
                justifyContent={{
                    base: 'center', lg: 'flex-start'
                }}
            >
                <Heading fontSize='xl'>Proyectos</Heading>
            </Box>
            <Project
                link={'https://countries.oxalc.me/'}
                title={'Aplicación Countries'}
                year={2022}
                type={'Full Stack'}
                img={countries}
                alt={'Proyecto Paises'}
                children={
                    <>
                        <Box>
                            <Text fontSize='lg'>
                                Proyecto individual para el <Link color={'gray.600'} href="https://www.soyhenry.com/">Bootcamp de SoyHenry</Link>, consiste en una Single Page Application utilizando React para el Front End y Redux como state management. Todos los componentes fueron desarrollados con CSS sin uso de librerias externas.
                            </Text>
                            <Text fontSize='lg'>
                                La aplicación consume datos de la API <Link color={'gray.600'} href="https://restcountries.com/">Rest Countries</Link> a través de una Back End desarrollado en NodeJS utilizando Express, agregando nuevas funcionalidades a la API original, entre ellas la de agregar actividades turísticas a cada país. Toda la información se guarda en una base de datos de PostgresSQL.
                            </Text>
                        </Box>

                        <Heading m={2} fontSize={'2xl'}>Tecnologías Utilizadas</Heading>
                        <Wrap spacing={3}>
                            {techIndividual.map(t => (
                                <WrapItem key={t.name} alignItems={'center'}>
                                    <Icon as={MdCheckCircle} color='green.500' />
                                    <Link color={'gray.600'} href={t.url}>{t.name}</Link>
                                </WrapItem>
                            )
                            )}
                        </Wrap>
                    </>
                }
            />
            <Project
                link={'https://heladitos-app.netlify.app/'}
                title={'Heladitos App'}
                year={2022}
                type={'Full Stack'}
                img={group}
                alt={'Proyecto Heladitos App'}
                children={
                    <>
                        <Text fontSize='lg'>
                            Proyecto final para el <Link color={'gray.600'} href="https://www.soyhenry.com/">Bootcamp de SoyHenry</Link>, consiste en una aplicación web para la gestión de una heladería, con un escaparate virtual para la venta de sus productos al público en general.
                            La aplicación tiene un panel de administración de la heladería para conocer el día a día y además crear y/o modificar productos.
                        </Text>
                        <Heading m={2} fontSize={'2xl'}>Tecnologías Utilizadas</Heading>
                        <Wrap spacing={3}>
                            {techGrupal.map(t => (
                                <WrapItem key={t.name} alignItems={'center'}>
                                    <Icon as={MdCheckCircle} color='green.500' />
                                    <Link color={'gray.600'} href={t.url}>{t.name}</Link>
                                </WrapItem>
                            )
                            )}
                        </Wrap>
                    </>
                }
            />

        </Box>
    )
}

export default Work
