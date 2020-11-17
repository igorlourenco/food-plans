import {Flex, Heading} from "@chakra-ui/core"

const ErrorMessage = () => (
    <Flex width={`100vw`} height={`100vh`} alignItems={`center`} justifyContent={`center`}>
        <Heading fontColor={`#A01D21`}>Erro ao buscar dados</Heading>
    </Flex>
)

export default ErrorMessage