import { Box, Center, Circle, Heading, Highlight, Image, Link, Stack, Text, Tooltip } from "@chakra-ui/react"


const Project = ({ link, children, title, year, type, img, alt }) => {
    return (
        <Stack
            direction={{ base: "column", lg: "row" }}
            spacing='5'
            my={10}
            mx={{ base: 50, lg: 200, md: 200 }}
            p={10}
            align='center'
            bg={'teal.50'}
            borderRadius={'md'}
            borderWidth='1px'
        >

            <Box maxW='sm' overflow='hidden'>
                <Link href={link} isExternal>
                    <Image src={img} alt={alt} objectFit='cover' m={2} borderRadius={'md'} />
                </Link>
            </Box>
            <Box>
                <Link href={link} isExternal>
                    <Heading m={2} fontSize='4xl'>{title}</Heading>
                </Link>
                <Stack direction='row'>
                    <Text
                        bg={'gray.600'}
                        borderRadius='full'
                        px={2}
                        mx={2}
                        color={'teal.50'}
                    >
                        {year}
                    </Text>

                    <Box color={'gray.600'}>
                        {type}
                    </Box>
                </Stack>
                <Box m={3} >
                    {children}
                </Box>
            </Box>
        </Stack>
    )
}

export default Project