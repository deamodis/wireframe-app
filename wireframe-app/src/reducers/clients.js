const initialState = [];

export default function Clients(state = initialState, action){
    if(action.type === 'INITIAL_STATE_AFTER_CONNECTING'){
        return action.payload;
    }
    return state;
}