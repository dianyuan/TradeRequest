import { combineReducers } from 'redux';
import TypeReducer from './reducer-type';
import CategoryReducer from './reducer-category';
import FormReducer from './reducer-form';
import AllocStratReducer from './reducer-allocstrat';
import ActiveTypeReducer from './reducer-active-type';

const allReducers = combineReducers({
  TRType: TypeReducer,
  TRCategory: CategoryReducer,
  TRForm: FormReducer,
  TRAllocStrat: AllocStratReducer,
  ActiveTypeReducer: ActiveTypeReducer,
});

export default allReducers;