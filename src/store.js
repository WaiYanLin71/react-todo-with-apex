import defineApex from 'apex-reactive-store'

export const useApexStore = defineApex({
    name: 'todo',
    initial: [],
    reducer: (state, action) => {
        switch (action.type) {
            case 'STORE':
                return [...state, action.data]
            case 'CHECK':
                return state.map(todo => {
                    if (todo.id === action.id) todo.completed = action.checked
                    return todo;
                })
            case 'CHECK_ALL':
                return state.map(todo => {
                    todo.completed = true
                    return todo;
                })
            case 'UNCHECK_ALL':
                return state.map(todo => {
                    todo.completed = false
                    return todo;
                })
            case 'DELETE':
                return state.filter(todo => todo.id !== action.id)
            case 'CLEAR_COMPLETED':
                return state.filter(todo => !todo.completed)
            default:
                return state
        }

    }
});