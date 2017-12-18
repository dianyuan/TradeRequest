import { combineReducers } from 'redux';
import TypeReducer from './reducer-type';
import CategoryReducer from './reducer-category';
import FormReducer from './reducer-form';
import AllocStratReducer from './reducer-allocstrat';
import ActiveTypeReducer from './reducer-active-type';
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
  TRType: TypeReducer,
  TRCategory: CategoryReducer,
  TRForm: FormReducer,
  TRAllocStrat: AllocStratReducer,
  ActiveTypeReducer: ActiveTypeReducer,
  form: formReducer,
});

export default allReducers;