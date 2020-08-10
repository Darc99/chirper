import { combinedReducers } from 'redux';
import authedUser from './authedUser';
import user from './users';
import tweets from './tweets';

export default combinedReducers({
    authedUser,
    user,
    tweets
});