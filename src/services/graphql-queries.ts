export const SUBSCRIBE_TO_PLAN_MUTATION =`
mutation SubscribeToPlan($id: Int){
  subscribeToPlan(id: $id){
    name
    price
    numberOfPeople
    weeklyRecipes
  }
}
`

export const INITIAL_PLANS_DATA_QUERY = `
{
  listPlans {
    id
    name
    price
    weeklyRecipes
    numberOfPeople
  }
}
`