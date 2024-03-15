import { 
    ADD_ITEM, 
    TOGGLE_ITEM, 
    DELETE_ITEM, 
    FILTER_ITEMS, 
    MARK_ALL_COMPLETED, 
    MARK_COMPLETED, 
    MARK_INCOMPLETED, 
    SEARCH_ITEM, 
    SHOW_ALL_ITEMS 
} from "./actionTypes"


export const addItem = (text: string) => {
    return {
        type: ADD_ITEM,
        payload: text
    }
}


export const deleteItem = (index: number) => {
    return {
        type: DELETE_ITEM,
        payload: index
    }
}


export const searchItem = (searchTerm: string) => {
    return {
        type: SEARCH_ITEM,
        payload: searchTerm
    }
}


export const checkItem = (index: number) => {
    return {
        type: TOGGLE_ITEM,
        payload: index
    }
}


export const filterItems = (filter: {}) => {
    return {
        type: FILTER_ITEMS,
        payload: filter
    }
}


export const showAllItems = (items: {}) => {
    return {
        type: SHOW_ALL_ITEMS,
        payload: items
    }
}


export const markAllCompleted = () => {
    return {
        type: MARK_ALL_COMPLETED
    }
}


export const markCompleted = (id: number) => {
    return {
        type: MARK_COMPLETED,
        payload: id
    }
}

export const markInCompleted = (id: number) => {
    return {
        type: MARK_INCOMPLETED,
        payload: id
    }
}
