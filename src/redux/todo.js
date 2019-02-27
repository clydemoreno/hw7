
export const LOAD_TODOS = "LOAD_TODOS";

export const GET_TODOS = "GET_TODOS";

export const GET_TODO_ITEM = "GET_TODOS_ITEM";

export const LOAD_TODO_ITEM = "LOAD_TODOS_ITEM";

const initialState = {
    todos: []
}

export const loadTodos = (todos) => ({

    type: LOAD_TODOS,
    todos
})

export const getTodos = () => ({
    type: GET_TODOS,

})

export const loadTodoItem = (todo) => ({

    type: LOAD_TODO_ITEM ,
    todo
})


export const getTodoItem = (id) => ({
    type: GET_TODO_ITEM,
    id: id

})




const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS: {
            return state;
        }
        case LOAD_TODOS: {
            return {
                ...state,
                todos: action.todos
            }
        }
        case GET_TODO_ITEM: {
            return {
                ...state,
                todo: action.todo
            }
        }
        case LOAD_TODO_ITEM: {
            return {
                ...state,
                todo: action.todo
            }
        }
        default: return state
    }
}

export default reducer;