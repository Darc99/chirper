import { combineReducers } from 'redux';
import authedUser from './authedUser';
import user from './users';
import tweets from './tweets';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    authedUser,
    user,
    tweets,
    loadingBar: loadingBarReducer,
});