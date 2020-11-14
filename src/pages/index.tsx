import {Button, Flex, Grid, GridItem, Heading, Image, Text} from "@chakra-ui/core";

const Index = () => (
    <Flex width={`100%`} height={`100%`} flexDirection={`column`} backgroundColor={`#F5F8FA`} alignItems={`center`}
          justifyContent={`center`}>
        <Text textAlign={`center`} fontSize={`25px`} marginBottom={`25px`}>
            Configure o plano que <Text fontWeight={`bold`}>melhor se encaixa na sua rotina</Text>
        </Text>

        <Grid width={`70%`} height={`20vh`} templateRows={`repeat(1, 1fr)`}
              templateColumns={`repeat(6, 1fr)`} backgroundColor={`white`} borderRadius={`10px`}
              direction={[`column`, `column`, `row`, `row`]}>

            <GridItem colSpan={2} overflow={`hidden`}>
                <Image src={`/backgrounds/bg1.jpg`} boxSize="100%"
                       objectFit="cover" borderLeftRadius={`10px`}></Image>
            </GridItem>


            <GridItem colSpan={4} borderRadius={`10px`}>
                <Grid
                    flexDirection={[`column`, `column`, `row`, `row`]}
                    templateRows={`repeat(4, 1fr)`}
                    templateColumns={`repeat(1, 1fr)`} borderRadius={`10px`}
                    gap={1}
                    paddingY={2}
                >
                    <GridItem display={`flex`} flexDirection={`column`} rowSpan={1} alignItems={`center`}
                              borderTopRightRadius={`10px`}
                              justifyContent={`center`}>
                        <Heading textAlign={`center`} fontWeight={`bold`} fontSize={`25px`}>
                            Gostou e ainda não é assinante? <Text>Escolha já um plano semanal!</Text>
                        </Heading>
                    </GridItem>
                    <GridItem rowSpan={3} display={`flex`} flexDirection={`column`} alignItems={`center`}
                              justifyContent={`center`}>

                            <Grid
                                templateRows="repeat(1, 1fr)"
                                templateColumns="repeat(2, 1fr)"
                                width={`90%`}
                                height={`95%`}
                                backgroundColor={`#F5F8FA`}
                                paddingY={8}
                                paddingX={12}
                                borderRadius={`10px`}
                            >
                                <GridItem>
                                    <Flex direction={`row`}>
                                        <Image src={`/icons/user.svg`} width={`30px`} marginRight={3}/>
                                        <Text width={`80%`} fontSize={`16px`} color={`#49AD33`}>
                                            Receita para quantas pessoas?
                                        </Text>
                                    </Flex>
                                </GridItem>
                                <GridItem>
                                    <Flex direction={`row`}>
                                        <Image src={`/icons/kitchen-tools.svg`} width={`30px`} marginRight={3}/>
                                        <Text width={`80%`} fontSize={`16px`} color={`#49AD33`}>
                                            Quantas receitas por semana?
                                        </Text>
                                    </Flex>
                                </GridItem>
                            </Grid>

                    </GridItem>
                    <GridItem display={`flex`} rowSpan={1} borderBottomRightRadius={`10px`}>
                        <Flex direction={[`column`, `column`, `row`, `row`]} width={`100%`}>

                            <Grid
                                flexDirection={`column`}
                                templateRows={`repeat(1, 1fr)`}
                                templateColumns={`repeat(5, 1fr)`}
                            >
                                <GridItem colSpan={2} display={`flex`} flexDirection={`column`} alignItems={`center`}
                                          justifyContent={`center`}>
                                    <Text fontSize={`14px`} fontWeight={`medium`}>
                                        PREÇO DO KIT POR SEMANA
                                    </Text>
                                    <Heading fontWeight={`medium`} color={`#FF5C26`}>
                                        R$ 69,99
                                    </Heading>
                                </GridItem>

                                <GridItem colSpan={3} display={`flex`} alignItems={`center`} justifyContent={`center`}>
                                    <Button backgroundColor={`#3BB300`} colorScheme={`#3BB300`} borderRadius={`50px`}
                                            width={`80%`}
                                            fontWeight={`medium`} fontSize={`15px`}>
                                        Quero assinar agora!
                                    </Button>
                                </GridItem>
                            </Grid>
                        </Flex>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    </Flex>
)

export default Index
