import { Box, Center, Circle, Heading, Highlight, Icon, Image, Link, List, ListIcon, ListItem, Spacer, Stack, Text, Tooltip, Wrap, WrapItem } from "@chakra-ui/react"
import { MdCheckCircle, MdSettings } from "react-icons/md";
import Project from "../components/Project";
import countries from '../assets/Countries.jpeg';
import group from '../assets/PanelAdminHome.png';
import valiente from '../assets/ValientePublicidad.png';
import datacademy from '../assets/Datacademy.png'

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

const valientePub = [
    { name: 'HTML', url: 'https://developer.mozilla.org/es/docs/Web/HTML' },
    { name: 'CSS', url: 'https://developer.mozilla.org/es/docs/Web/CSS' },
    { name: 'SASS', url: 'https://sass-lang.com/' },
]

const techData = [
    { name: 'Python', url: 'https://www.python.org/' },
    { name: 'Pandas', url: 'https://pandas.pydata.org/' },
    { name: 'Seaborn', url: 'https://seaborn.pydata.org/' },
    { name: 'Squarify', url: 'https://pypi.org/project/squarify/' },
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
                title={'Aplicaci??n Countries'}
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
                                La aplicaci??n consume datos de la API <Link color={'gray.600'} href="https://restcountries.com/">Rest Countries</Link> a trav??s de una Back End desarrollado en NodeJS utilizando Express, agregando nuevas funcionalidades a la API original, entre ellas la de agregar actividades tur??sticas a cada pa??s. Toda la informaci??n se guarda en una base de datos de PostgresSQL.
                            </Text>
                        </Box>

                        <Heading m={2} fontSize={'2xl'}>Tecnolog??as Utilizadas</Heading>
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
                            Proyecto final para el <Link color={'gray.600'} href="https://www.soyhenry.com/">Bootcamp de SoyHenry</Link>, consiste en una aplicaci??n web para la gesti??n de una helader??a, con un escaparate virtual para la venta de sus productos al p??blico en general.
                            La aplicaci??n tiene un panel de administraci??n de la helader??a para conocer el d??a a d??a y adem??s crear y/o modificar productos.
                        </Text>
                        <Heading m={2} fontSize={'2xl'}>Tecnolog??as Utilizadas</Heading>
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
            <Project
                link={'https://deepnote.com/workspace/rolando-oxalc-557e7a96-52f8-4b62-81f9-8afe449dec1b/project/Proyecto-Datacademy-af357e8c-2c11-48ff-be45-e847dafd06d3/notebook/datacademy-platzi%2Ftemplate_proyecto_datacademy-d7b81b029f8744f8b616103dc99be7fb'}
                title={'Datacademy'}
                year={2022}
                type={'Data Analysis'}
                img={datacademy}
                alt={'Proyecto Datacademy'}
                children={
                    <>
                        <Text fontSize='lg'>
                            An??lisis de los 25 retailers m??s grandes de EEUU realizado con Python haciendo uso las librer??as Pandas,  matplotlib, squarify y seaborn para el reto <Link color={'gray.600'} href="https://platzi.com/blog/escuela-data-ia-datacademy/?utm_source=twitter&utm_medium=organic&utm_campaign=LATAM_TW_BLOG_MF_1221_datacademy">Datacademy de Platzi</Link>.
                        </Text>
                        <Heading m={2} fontSize={'2xl'}>Tecnolog??as Utilizadas</Heading>
                        <Wrap spacing={3}>
                            {techData.map(t => (
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
                link={'https://proyecto-valiente.netlify.app/index.html'}
                title={'Valiente Publicidad'}
                year={2021}
                type={'Frontend'}
                img={valiente}
                alt={'Valiente Publicidad'}
                children={
                    <>
                        <Text fontSize='lg'>
                            Pagina web coporativa de agencia de publicidad, realizado con HTML y CSS construido con SASS.
                        </Text>
                        <Heading m={2} fontSize={'2xl'}>Tecnolog??as Utilizadas</Heading>
                        <Wrap spacing={3}>
                            {valientePub.map(t => (
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
