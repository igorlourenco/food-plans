import {Button, ButtonGroup, Flex, Grid, GridItem, Heading, Image, Text, useToast} from "@chakra-ui/core";
import {useState} from "react";
import {Plan, SubscribeFormProps} from "../interfaces";
import {gql, useMutation} from "@apollo/client";

const SUBSCRIBE_TO_PLAN_MUTATION = gql`
mutation SubscribeToPlan($id: Int){
  subscribeToPlan(id: $id){
    name
    price
    numberOfPeople
    weeklyRecipes
  }
}
`

const getCurrentPlan = (numberOfPeople: number, weeklyRecipes: number, plans: Plan[]) => {
    return plans.find(
        (item: Plan) => item.numberOfPeople === numberOfPeople && item.weeklyRecipes === weeklyRecipes
    )
}

const SubscribeForm = ({numberOfPeopleArray, weeklyRecipesArray, plans}: SubscribeFormProps) => {
    const initialNumberOfPeople = numberOfPeopleArray[0]
    const initialWeeklyRecipes = weeklyRecipesArray[0]

    const toast = useToast()
    const [numberOfPeople, setNumberOfPeople] = useState<number>(initialNumberOfPeople);
    const [weeklyRecipes, setWeeklyRecipes] = useState<number>(initialWeeklyRecipes);

    const [subscribeToPlan] = useMutation(SUBSCRIBE_TO_PLAN_MUTATION);

    const PlanPrice = () => {
        const plan: Plan | undefined = getCurrentPlan(numberOfPeople, weeklyRecipes, plans)

        if (!plan) {
            return <Heading
                fontSize={`14px`}
                fontWeight={`medium`}
                color={`#FF5C26`}
                textAlign={`center`}
            >
                Desculpe, ainda não temos esse plano
            </Heading>
        }

        const formattedPrice = "R$ " + plan.price.toString().replace(".", ",")

        return <Heading
            fontSize={`34px`}
            fontWeight={`medium`}
            color={`#FF5C26`}
            textAlign={`center`}
        >
            {formattedPrice}
        </Heading>


    }

    function handleSubscribeToPlan() {
        const plan: Plan | undefined = getCurrentPlan(numberOfPeople, weeklyRecipes, plans)

        if (!plan) {
            toast({
                title: `Ocorreu um erro :(`,
                description: `Não foi possível completar sua assinatura. 
                               Por favor, confira os dados do plano selecionado e tente novamente.`,
                status: `error`,
                duration: 9000,
                isClosable: true,
            })
            return
        }

        subscribeToPlan({variables: {id: plan.id}}).then(
            ({data}) => toast({
                title: `Assinatura feita com sucesso!`,
                description: `Você assinou o plano de ${data.subscribeToPlan.name}, que atende ${data.subscribeToPlan.numberOfPeople} pessoas`,
                status: `success`,
                duration: 9000,
                isClosable: true,
            })
        ).catch(() => {
            toast({
                title: `Ocorreu um erro :(`,
                description: `Não foi possível completar sua assinatura. 
                               Por favor, confira os dados do plano selecionado e tente novamente.`,
                status: `error`,
                duration: 9000,
                isClosable: true,
            })
            return
        })
    }

    return (
        <Grid width={[`95%`, `95%`, `90%`, `90%`]} maxWidth={`1200px`} height={`auto`}
              templateRows={`repeat(1, 1fr)`}
              templateColumns={`repeat(6, 1fr)`} backgroundColor={`white`}
              direction={[`column`, `column`, `row`, `row`]} borderRadius={`10px`} overflow={`hidden`}>

            <GridItem height={[`60vh`, `60vh`, `auto`, `auto`]} colSpan={[6, 6, 2, 2]} rowSpan={1}>
                <Image src={`/backgrounds/bg1.jpg`} objectFit={[`none`, `none`, `cover`, `cover`]} boxSize={`100%`}/>
            </GridItem>

            <GridItem colSpan={[6, 6, 4, 4]} rowSpan={[4, 4, 1, 1]} marginY={3}>
                <Grid
                    flexDirection={[`column`, `column`, `row`, `row`]}
                    templateRows={[`repeat(1, 1fr)`, `repeat(1, 1fr)`, `repeat(4, 1fr)`, `repeat(4, 1fr)`]}
                    templateColumns={[`repeat(4, 1fr)`, `repeat(4, 1fr)`, `repeat(1, 1fr)`, `repeat(1, 1fr)`]}
                    gap={6}
                    paddingY={[0, 0, 2, 2]}
                >
                    <GridItem display={`flex`} flexDirection={`column`} rowSpan={1} colSpan={[4, 4, 1, 1]}
                              alignItems={`center`}
                              justifyContent={`center`}>
                        <Heading textAlign={`center`} fontWeight={`bold`}
                                 fontSize={[`24px`, `24px`, `25px`, `25px`]}>
                            Gostou e ainda não é assinante? <Text>Escolha já um plano semanal!</Text>
                        </Heading>
                    </GridItem>
                    <GridItem rowSpan={[1, 1, 3, 3]} colSpan={[4, 4, 1, 1]} display={`flex`}
                              flexDirection={`column`} alignItems={`center`}
                              justifyContent={`center`}>

                        <Grid
                            templateRows="repeat(1, 1fr)"
                            templateColumns="repeat(2, 1fr)"
                            width={`95%`}
                            height={[`auto`, `auto`, `95%`, `95%`]}
                            borderRadius={`10px`}
                            backgroundColor={`#F5F8FA`}
                            paddingY={[6, 6, 8, 8]}
                            paddingX={[6, 6, 10, 10]}
                            display={`flex`}
                            alignItems={`center`}
                            justifyContent={`center`}
                            flexDirection={[`column`, `column`, `row`, `row`]}
                            gap={8}
                        >
                            <GridItem display={`flex`} flexDirection={`column`} alignItems={`center`}
                                      justifyContent={`center`} gridGap={6}>
                                <Flex direction={`row`} alignItems={`center`} justifyContent={`center`}>
                                    <Image src={`/icons/user.svg`} width={`30px`} marginRight={3}/>
                                    <Text width={`60%`} fontSize={`16px`} color={`#49AD33`}>
                                        Receita para quantas pessoas?
                                    </Text>
                                </Flex>
                                <ButtonGroup display={`flex`} flexWrap={`wrap`} aling={`center`} justify={`center`}
                                             gridGap={1}>
                                    {
                                        numberOfPeopleArray.map((item: number) => (
                                            <Button key={item} width={`50px`} height={`50px`}
                                                    backgroundColor={numberOfPeople === item ? `#3BB300` : `#FFFFFF`}
                                                    borderRadius={`10px`} fontSize={`28px`} fontWeight={`medium`}
                                                    color={numberOfPeople === item ? `#FFFFFF` : `#AEB2B8`}
                                                    onClick={() => {
                                                        setNumberOfPeople(item)
                                                    }}>
                                                {item}
                                            </Button>
                                        ))
                                    }

                                </ButtonGroup>
                            </GridItem>
                            <GridItem display={`flex`} flexDirection={`column`} alignItems={`center`}
                                      justifyContent={`center`} gridGap={6}>
                                <Flex direction={`row`} alignItems={`center`} justifyContent={`center`}>
                                    <Image src={`/icons/kitchen-tools.svg`} width={`30px`} marginRight={3}/>
                                    <Text width={`60%`} fontSize={`16px`} color={`#49AD33`}>
                                        Quantas receitas por semana?
                                    </Text>
                                </Flex>
                                <ButtonGroup display={`flex`} flexWrap={`wrap`} aling={`center`} justify={`center`}
                                             gridGap={1}>
                                    {
                                        weeklyRecipesArray.map((item: number) => (
                                            <Button key={item} width={`50px`} height={`50px`}
                                                    backgroundColor={weeklyRecipes === item ? `#3BB300` : `#FFFFFF`}
                                                    borderRadius={`10px`} fontSize={`28px`} fontWeight={`medium`}
                                                    color={weeklyRecipes === item ? `#FFFFFF` : `#AEB2B8`}
                                                    onClick={() => {
                                                        setWeeklyRecipes(item)
                                                    }}>
                                                {item}
                                            </Button>
                                        ))
                                    }
                                </ButtonGroup>
                            </GridItem>
                        </Grid>
                    </GridItem>
                    <GridItem rowSpan={1} display={`flex`} flexDirection={[`column`, `column`, `row`, `row`]}
                              alignItems={`center`}
                              justifyContent={`center`} colSpan={[4, 4, 1, 1]}>

                        <Grid
                            flexDirection={`column`}
                            templateRows={`repeat(1, 1fr)`}
                            templateColumns={`repeat(5, 1fr)`}
                            minWidth={`100%`}
                            gap={5}
                        >
                            <GridItem colSpan={[5, 5, 2, 2,]} display={`flex`} flexDirection={`column`}
                                      alignItems={`center`}
                                      justifyContent={`center`} gridGap={2}>
                                <Text fontSize={[`16px`, `16px`, `14px`, `14px`]} fontWeight={`medium`}
                                      textAlign={`center`} color={`#61696F`}>
                                    PREÇO DO KIT POR SEMANA
                                </Text>
                                <PlanPrice/>
                            </GridItem>

                            <GridItem colSpan={[5, 5, 3, 3]} display={`flex`} alignItems={`center`}
                                      justifyContent={`center`}>
                                <Button backgroundColor={`#3BB300`} colorScheme={`#3BB300`} borderRadius={`50px`}
                                        width={`90%`}
                                        fontWeight={`medium`} fontSize={`15px`}
                                        onClick={() => handleSubscribeToPlan()}
                                >
                                    Quero assinar agora!
                                </Button>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>
            </GridItem>
        </Grid>
    )
}

export default SubscribeForm