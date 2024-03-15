import { 
    ADD_ITEM, 
    TOGGLE_ITEM, 
    DELETE_ITEM, 
    SEARCH_ITEM, 
    FILTER_ITEMS, 
    SHOW_ALL_ITEMS, 
    MARK_ALL_COMPLETED, 
    MARK_INCOMPLETED, 
    MARK_COMPLETED 
} from "./actionTypes"

export const initialState: any = {
    todos: [],
    filter: 'ALL',
    searchTerm: ''
}

const reducer = (state: any = initialState, action: { type: string, payload: any }) => {
    switch (action?.type) {
        case ADD_ITEM:
            return {
                ...state,
                todos: [...state.todos, { text: action.payload, completed: false }]
            }
        case DELETE_ITEM:
            return {
                ...state,
                todos: state.todos.filter((_: any,index: number) => index !== action.payload)
            }
        case SEARCH_ITEM:
            return {
                todos: state.todos,
                filter:  state.filter,
                searchTerm: action.payload
            }
        case TOGGLE_ITEM:
            return {
                ...state,
                todos: state.todos.map((todo: any, index: number) => 
                    index === action.payload 
                    ? { ...todo, completed: !todo.completed } 
                    : todo)
            }
        case FILTER_ITEMS:
            return {
                todos: state.todos,
                filter:  action.payload,
                searchTerm: state.searchTerm
            }
        case SHOW_ALL_ITEMS:
            return {
                ...state,
                filter: 'ALL'
            }
        case MARK_ALL_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo: any) => ({ ...todo, completed: true }))
            }
        case MARK_COMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo: any, index: number) => 
                (index === action.payload 
                    ? { ...todo, completed: true } 
                    : todo
                ))
            }
        case MARK_INCOMPLETED:
            return {
                ...state,
                todos: state.todos.map((todo: any, index: number) => 
                (index === action.payload 
                    ? { ...todo, completed: false } 
                    : todo
                ))
            }
        default:
            return state
    }
}

export default reducer;