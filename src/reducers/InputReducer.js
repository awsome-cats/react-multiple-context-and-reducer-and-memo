const inputReducer = (state, action) => {

    switch (action.type) {

        case 'INPUT':
               //console.log('action', action)
              return {
                  ...state,
                  //payloadを使わない場合
                  todos:[...state.todos, action.todo]
                //   todos: [...state.todos, action.payload]
              }
        case 'TOGGLE':
            return {
                ...state,
                todos: state.todos.map((todo) => todo.id === action.todoId?{...todo,complete:!todo.complete}:todo)
            }
        case 'DELETE':
            return {}
        default:
            return state;
    }
}

export default inputReducer
