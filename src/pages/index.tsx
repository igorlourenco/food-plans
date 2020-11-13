import {Button, Flex, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/core";

const Index = () => (
    <Flex width={`100vw`} height={`100vh`} flexDirection={`column`} backgroundColor={`#F5F8FA`} alignItems={`center`}
          justifyContent={`center`}>
        <Text textAlign={`center`} fontSize={`25px`} marginBottom={`25px`}>
            Configure o plano que <Text fontWeight={`bold`}>melhor se encaixa na sua rotina</Text>
        </Text>

        <Flex width={`90vw`} height={`60vh`} backgroundColor={`white`} borderRadius={`10px`}>
            <Image src={`/backgrounds/bg1.jpg`} width={`60vh`}></Image>
            <Grid
                h={`100%`}
                w={`100%`}
                templateRows="repeat(4, 1fr)"
                templateColumns="repeat(5, 1fr)"
            >
                <GridItem rowSpan={1} colSpan={5} bg="tomato"/>
                <GridItem rowSpan={2} colSpan={5} bg="papayawhip"/>
                <GridItem display={`flex`} flexDirection={`column`} rowSpan={1} colSpan={2} alignItems={`center`}
                          justifyContent={`center`}>
                    <Text fontSize={`14px`} fontWeight={`medium`} color={`#61696F`}>
                        PREÇO DO KIT POR SEMANA
                    </Text>
                    <Heading fontWeight={`medium`} color={`#FF5C26`}>
                        R$ 69,99
                    </Heading>
                </GridItem>



                <GridItem display={`flex`} rowSpan={1} colSpan={3} alignItems={`center`}
                          justifyContent={`center`}>
                    <Button backgroundColor={`#3BB300`} borderRadius={`50px`} colorScheme="blue" width={`80%`}
                            fontWeight={`medium`} fontSize={`15px`} _hover={{
                        backgroundColor: '#49AD33'
                    }} _active={{backgroundColor: '#49AD33'}}>
                        Quero assinar agora!
                    </Button>
                </GridItem>
            </Grid>
        </Flex>
    </Flex>
)

export default Index
