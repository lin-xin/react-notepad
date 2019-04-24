import storage from '../../utils/storage';
import getDate from '../../utils/date';

const defaultState = storage.get() || {
    event: [],
    count: 0
}

// 添加待办事件
const addEvent = (state, action) => {
    const data = {
        id: state.count + 1,
        content: action.content,
        type: 1
    }
    const event = state.event;
    event.unshift(data);
    const newState = {...state, ...{event, count: data.id}};
    storage.set(newState);
    return newState;
}

// 改变事件状态
const changeType = (state, action) => {
    const event = state.event;
    let item = null;
    for (let i = 0, len = event.length; i < len; i++) {
        if(event[i].id === action.id){
            event[i].type = action.eventType;
            if(action.eventType === 2){
                event[i].time = getDate(new Date());
            }
            item = event[i];
            event.splice(i, 1);
            break;
        }
    }
    event.unshift(item);
    const newState = {...state, ...{event}};
    storage.set(newState);
    return newState;
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case 'ADDEVENT':
            return addEvent(state, action);
        case 'CHANGETYPE':
            return changeType(state, action);
        case 'CLEAREVENT':
            const newState = {...state, ...{event: [], count: 0}};
            storage.set(newState);
            return newState;
        case 'UPLOADEVENT':
            const uploadState = {...state, ...action.content};
            storage.set(uploadState);
            return uploadState;
        default:
            return state;
    }
}