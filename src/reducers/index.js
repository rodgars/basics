import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer-posts'
import WeatherReducer from './reducer-weather';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
