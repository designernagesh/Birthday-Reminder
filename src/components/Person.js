import { Flex, Box, Image, Heading, Text } from "@chakra-ui/react";

const Person = ({image, age, name}) => {
    return (
        <Flex boxShadow='lg' px='6' py='3' rounded='md' alignItems='center' mb='10px'>
            <Image
                borderRadius='full'
                boxSize='75px'
                src={image}
                alt={name}
                objectFit='cover'
                mr='20px'
            />
            <Box>
                <Heading fontSize='21px'>{name}</Heading>
                <Text color='gray.500'>On: {age} </Text>
            </Box>
        </Flex>
    )
}

export default Person;