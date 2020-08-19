import { RECEIVE_TWEETS, TOOGLE_TWEET } from '../actions/tweets';

export default function tweets(state = {}, action) {
    switch (action.type) {
        case RECEIVE_TWEETS :
            return {
                ...state,
                ...action.tweets
            }
        default:
            return state
    }
}