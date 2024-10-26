import {initialPeople, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedPeople = [...initialPeople].sort((a, b) => {
                const nameComparison = action.payload === 'up'
                    ? a.name.localeCompare(b.name)
                    : b.name.localeCompare(a.name);

                // Если имена одинаковые, сортировать по возрасту
                if (nameComparison === 0) {
                    return action.payload === 'up' ? a.age - b.age : b.age - a.age;
                }
                return nameComparison;
            });
            return sortedPeople;
        }
        case 'check': {
            const sortedPeople = [...initialPeople.filter((p) => p.age >= 18)]
            return sortedPeople // need to fix
        }
        default:
            return state
    }
}
