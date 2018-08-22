import storage from '../../utils/storage';

const defaultState = storage.get() || {
    event: [],
    count: 0
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADDEVENT':
            const data = {
                id: state.count + 1,
                content: action.content,
                type: 1
            }
            const event = state.event;
            event.unshift(data);
            return {...state, ...{event, count: data.id}};
        case 'EVENTDONE':
            
            return state;
        default:
            return state;
    }
}