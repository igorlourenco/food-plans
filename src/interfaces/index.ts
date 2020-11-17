export interface ChoosePlanData {
    numberOfPeople: number
    weeklyRecipes: number
}

export interface Plan {
    id: number
    name: string
    price: number
    numberOfPeople: number
    weeklyRecipes: number
}

export interface IndexProps {
    numberOfPeopleArray: number[]
    weeklyRecipesArray: number[]
    plans: Plan[]
}

export interface SubscribeFormProps {
    numberOfPeopleArray: number[]
    weeklyRecipesArray: number[]
    plans: Plan[]
}