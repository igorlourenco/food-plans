import {Plan} from "./interfaces";

export const convertJSONToArray = (array: any[]) => {
    return array.filter((item, index) => {
        return array.indexOf(item) === index
    })
}

export const getCurrentPlan = (numberOfPeople: number, weeklyRecipes: number, plans: Plan[]) => {
    return plans.find(
        (item: Plan) => item.numberOfPeople === numberOfPeople && item.weeklyRecipes === weeklyRecipes
    )
}

export const errorToast = (toast: any) => { // o tipo ficou "any" porque o Chakra UI ainda não provê tipo específico para a função toast
    return toast({
        title: `Ocorreu um erro :(`,
        description: `Não foi possível completar sua assinatura. 
                               Por favor, confira os dados do plano selecionado e tente novamente.`,
        status: `error`,
        duration: 9000,
        isClosable: true,
    })
}

export const successToast = (toast: any, title: string, message: string) => { // o tipo ficou "any" porque o Chakra UI ainda não provê tipo específico para a função toast
    return toast({
        title: title,
        description: message,
        status: `success`,
        duration: 9000,
        isClosable: true,
    })

}