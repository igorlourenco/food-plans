import {Flex, Heading} from "@chakra-ui/core";

export const Error = () => (
    <Flex width={`100vw`} height={`100vh`} alignItems={`center`} justifyContent={`center`}>
        <Heading fontColor={`#A01D21`}>Erro ao buscar dados</Heading>
    </Flex>
)

export const Loading = () => (
    <Flex width={`100vw`} height={`100vh`} alignItems={`center`} justifyContent={`center`}>
        <Heading fontColor={`#3BB300`}>Buscando dados...</Heading>
    </Flex>
)