import {Flex, FlexProps} from "@chakra-ui/core";

const Container = (props: FlexProps) => (
    <Flex
        width={`100%`}
        height={`100%`}
        flexDirection={`column`}
        backgroundColor={`#F5F8FA`}
        alignItems={`center`}
        justifyContent={`center`}
        padding={4} minWidth={`100vw`}
        minHeight={`100vh`}
        {...props}
    >
        {props.children}
    </Flex>
)

export default Container