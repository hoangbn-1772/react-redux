import { VisibilityFilters } from '../constants/VisibilityFilters'

const visibileReducer = (state = VisibilityFilters.SHOW_ALL, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter

        default:
            return state
    }
}

export default visibileReducer;
