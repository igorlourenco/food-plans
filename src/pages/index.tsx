import {Heading, Text} from "@chakra-ui/core";
import {gql} from '@apollo/client'
import client from '../services/api'
import SubscribeForm from "../components/SubscribeForm";
import Container from "../components/Container";
import {ChoosePlanData, IndexProps} from "../interfaces";
import {INITIAL_PLANS_DATA_QUERY} from "../services/graphql-queries";
import {convertJSONToArray} from "../util";
import LoadingMessage from "../components/messages/Loading";
import ErrorMessage from "../components/messages/Error";

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

    if (loading) return <LoadingMessage/>
    if (error) return <ErrorMessage/>

    let numberOfPeopleArray: number[] = []
    let weeklyRecipesArray: number[] = []

    data.listPlans.map((plan: ChoosePlanData) => {
        numberOfPeopleArray.push(plan.numberOfPeople)
        weeklyRecipesArray.push(plan.weeklyRecipes)
    })

    numberOfPeopleArray = convertJSONToArray(numberOfPeopleArray)
    weeklyRecipesArray = convertJSONToArray(weeklyRecipesArray)

    const plans = data.listPlans

    return {
        numberOfPeopleArray,
        weeklyRecipesArray,
        plans
    }
}

export default Index
