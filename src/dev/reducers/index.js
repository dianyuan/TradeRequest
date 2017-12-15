import { combineReducers } from 'redux';
import TypeReducer from './reducer-type';
import CategoryReducer from './reducer-category';
import FormReducer from './reducer-form';
import AllocStratReducer from './reducer-allocstrat';

const allReducers = combineReducers({
  TRType: TypeReducer,
  TRCategory: CategoryReducer,
  TRForm: FormReducer,
  TRAllocStrat: AllocStratReducer,
});

export default allReducers;