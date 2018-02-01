import {ADD_LIST, ADD_CARD} from '../actions';

const initialState = {
    lists: []
};

export const trelloReducer = (state = initialState, action) => {
    if (action.type === ADD_LIST) {
        return Object.assign({}, state, {
            lists: [
                ...state.lists,
                {
                    title: action.title,
                    cards: []
                }
            ]
        });
    } else if (action.type === ADD_CARD) {
        let lists = state.lists.map((list, index) => {
            if (index !== action.listIndex) {
                return list;
            }
            return Object.assign({}, list, {
                cards: [
                    ...list.cards,
                    {
                        text: action.text
                    }
                ]
            });
        });

        return Object.assign({}, state, {
            lists
        });
    }
    return state;
};
