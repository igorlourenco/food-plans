import {Center, Button, Flex, Grid, GridItem, Heading, Image, Text, Wrap, WrapItem} from "@chakra-ui/core";

const Index = () => (
    <Flex width={`100%`} height={`100%`} flexDirection={`column`} backgroundColor={`#F5F8FA`} alignItems={`center`}
          justifyContent={`center`} padding={4} minWidth={`100vw`} minHeight={`100vh`}>
        <Text textAlign={`center`} fontSize={`25px`} marginBottom={`25px`}>
            Configure o plano que <Text fontWeight={`bold`}>melhor se encaixa na sua rotina</Text>
        </Text>

        <Grid width={[`95%`, `95%`, `70%`, `70%`]} height={`auto`} templateRows={`repeat(1, 1fr)`}
              templateColumns={`repeat(6, 1fr)`} backgroundColor={`white`}
              direction={[`column`, `column`, `row`, `row`]} borderRadius={`10px`} overflow={`hidden`}>

            <GridItem colSpan={[6, 6, 2, 2]}>
                <Image src={`/backgrounds/bg1.jpg`} boxSize={`100%`} borderRadius={`10px`}
                       objectFit="cover"/>
            </GridItem>


            <GridItem colSpan={[6, 6, 4, 4]}>
                <Grid
                    flexDirection={[`column`, `column`, `row`, `row`]}
                    templateRows={`repeat(4, 1fr)`}
                    templateColumns={`repeat(1, 1fr)`}
                    gap={1}
                    paddingY={2}
                >
                    <GridItem display={`flex`} flexDirection={`column`} rowSpan={1} alignItems={`center`}
                              justifyContent={`center`}>
                        <Heading textAlign={`center`} fontWeight={`bold`} fontSize={[`24px`, `24px`, `25px`, `25px`]}>
                            Gostou e ainda não é assinante? <Text>Escolha já um plano semanal!</Text>
                        </Heading>
                    </GridItem>
                    <GridItem rowSpan={3} display={`flex`} flexDirection={`column`} alignItems={`center`}
                              justifyContent={`center`}>

                        <Grid
                            templateRows="repeat(1, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                            width={`95%`}
                            height={`95%`}
                            borderRadius={`10px`}
                            backgroundColor={`#F5F8FA`}
                            paddingY={8}
                            paddingX={12}
                            display={`flex`}
                            alignItems={`center`}
                            justifyContent={`center`}
                            flexDirection={[`column`, `column`, `row`, `row`]}
                            gap={4}
                        >
                            <GridItem>
                                <Flex direction={`row`}>
                                    <Image src={`/icons/user.svg`} width={`30px`} marginRight={3}/>
                                    <Text width={`80%`} fontSize={`16px`} color={`#49AD33`}>
                                        Receita para quantas pessoas?
                                    </Text>
                                </Flex>
                                <Wrap aling={`center`} justify={`center`}>
                                    <WrapItem>
                                        <Center width={`56px`} height={`56px`} backgroundColor={`#49AD33`}
                                                borderRadius={`10px`}>
                                            <Text fontSize={`28px`} fontWeight={`medium`} color={`#FFFFFF`}>1</Text>
                                        </Center>
                                    </WrapItem>
                                    <WrapItem>
                                        <Center width={`56px`} height={`56px`} backgroundColor={`#FFFFFF`}
                                                borderRadius={`10px`}>
                                            <Text fontSize={`28px`} fontWeight={`medium`} color={`#AEB2B8`}>2</Text>
                                        </Center>
                                    </WrapItem>
                                </Wrap>
                            </GridItem>
                            <GridItem>
                                <Flex direction={`row`}>
                                    <Image src={`/icons/kitchen-tools.svg`} width={`30px`} marginRight={3}/>
                                    <Text width={`80%`} fontSize={`16px`} color={`#49AD33`}>
                                        Quantas receitas por semana?
                                    </Text>
                                </Flex>
                                <Wrap aling={`center`} justify={`center`}>
                                    <WrapItem>
                                        <Center width={`56px`} height={`56px`} backgroundColor={`#49AD33`}
                                                borderRadius={`10px`}>
                                            <Text fontSize={`28px`} fontWeight={`medium`} color={`#FFFFFF`}>1</Text>
                                        </Center>
                                    </WrapItem>
                                    <WrapItem>
                                        <Center width={`56px`} height={`56px`} backgroundColor={`#FFFFFF`}
                                                borderRadius={`10px`}>
                                            <Text fontSize={`28px`} fontWeight={`medium`} color={`#AEB2B8`}>2</Text>
                                        </Center>
                                    </WrapItem>
                                    <WrapItem>
                                        <Center width={`56px`} height={`56px`} backgroundColor={`#FFFFFF`}
                                                borderRadius={`10px`}>
                                            <Text fontSize={`28px`} fontWeight={`medium`} color={`#AEB2B8`}>3</Text>
                                        </Center>
                                    </WrapItem>
                                </Wrap>
                            </GridItem>
                        </Grid>

                    </GridItem>
                    <GridItem rowSpan={1} display={`flex`} flexDirection={[`column`, `column`, `row`, `row`]}
                              alignItems={`center`}
                              justifyContent={`center`}>

                        <Grid
                            flexDirection={`column`}
                            templateRows={`repeat(1, 1fr)`}
                            templateColumns={`repeat(5, 1fr)`}
                            minWidth={`100%`}
                            gap={2}
                        >
                            <GridItem colSpan={[5, 5, 2, 2,]} display={`flex`} flexDirection={`column`}
                                      alignItems={`center`}
                                      justifyContent={`center`}>
                                <Text fontSize={`14px`} fontWeight={`medium`}>
                                    PREÇO DO KIT POR SEMANA
                                </Text>
                                <Heading fontWeight={`medium`} color={`#FF5C26`}>
                                    R$ 69,99
                                </Heading>
                            </GridItem>

                            <GridItem colSpan={[5, 5, 3, 3]} display={`flex`} alignItems={`center`}
                                      justifyContent={`center`}>
                                <Button backgroundColor={`#3BB300`} colorScheme={`#3BB300`} borderRadius={`50px`}
                                        width={`90%`}
                                        fontWeight={`medium`} fontSize={`15px`}>
                                    Quero assinar agora!
                                </Button>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </Flex>
)

export default Index
