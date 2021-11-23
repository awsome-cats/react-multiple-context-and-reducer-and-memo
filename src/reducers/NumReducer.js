export const numReducer = (state, action) => {
    switch (action.type) {
        case 'DECREASE':
            return {
                ...state,
                num: state.num -1
            }
        default:
            return state;
    }
}
