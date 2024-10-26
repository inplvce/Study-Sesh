import {initialPeople, UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedPeople = [...initialPeople].sort((a, b) => {
                return action.payload === 'up'
                    ? a.name.localeCompare(b.name) // Сортировка по возрастанию
                    : b.name.localeCompare(a.name); // Сортировка по убыванию
            });
            return sortedPeople
        }
        case 'check': {
            const sortedPeople = [...initialPeople.filter((p) => p.age >= 18)]
            return sortedPeople // need to fix
        }
        default:
            return state
    }
}
