import {Heading, Text} from "@chakra-ui/core";
import {gql} from '@apollo/client'
import client from '../services/api'
import SubscribeForm from "../components/SubscribeForm";
import {Loading, Error} from "../components/messages";
import Container from "../components/Container";

const INITIAL_PLANS_DATA_QUERY = `query {
                    listPlans {
                        id
                        name
                        price
                        weeklyRecipes
                        numberOfPeople
                    }
                }`


const Title = () => (
    <Heading
        fontWeight={`regular`}
        textAlign={`center`}
        fontSize={`25px`}
        marginBottom={`25px`}
    >
        Configure o plano que
        <Text fontWeight={`bold`}>melhor se encaixa na sua rotina</Text>
    </Heading>
)

const Index = ({numberOfPeopleArray, weeklyRecipesArray, plans}: IndexProps) => {
    return (
        <Container>
            <Title/>
            <SubscribeForm
                numberOfPeopleArray={numberOfPeopleArray}
                weeklyRecipesArray={weeklyRecipesArray}
                plans={plans}
            />
        </Container>
    )
}


Index.getInitialProps = async () => {
    const response = await client
        .query({
            query: gql`${INITIAL_PLANS_DATA_QUERY}`
        })

    const {data, loading, error} = response

    if (loading) return <Loading/>
    if (error) return <Error/>

    let numberOfPeopleArray: number[] = []
    let weeklyRecipesArray: number[] = []

    data.listPlans.map((plan: ChoosePlanData) => {
        numberOfPeopleArray.push(plan.numberOfPeople)
        weeklyRecipesArray.push(plan.weeklyRecipes)
    })

    numberOfPeopleArray = numberOfPeopleArray.filter((item, index) => {
        return numberOfPeopleArray.indexOf(item) === index
    })

    weeklyRecipesArray = weeklyRecipesArray.filter((item, index) => {
        return weeklyRecipesArray.indexOf(item) === index
    })

    const plans = data.listPlans

    return {
        numberOfPeopleArray,
        weeklyRecipesArray,
        plans
    }
}

export default Index
