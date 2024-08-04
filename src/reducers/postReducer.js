/* export default (state = [], action) => {
    if(action.type === 'FETCH_PSOTS'){
        return [...state, action.playload];
    }
    return state;
} */

// Alternatively
export default (state = [], action) => {
    switch(action.type){
        case 'FETCH_POSTS':
            return action.playload.data;
        default:
            return state
    }
}