import {Flex, Heading} from "@chakra-ui/core";

const LoadingMessage = () => (
    <Flex width={`100vw`} height={`100vh`} alignItems={`center`} justifyContent={`center`}>
        <Heading fontColor={`#3BB300`}>Buscando dados...</Heading>
    </Flex>
)

export default LoadingMessage