import { combineReducers } from 'redux';
import TypeReducer from './reducer-tr-type';
import CategoryReducer from './reducer-tr-category';
import FormReducer from './reducer-tr-form';
import AllocStratReducer from './reducer-tr-allocStrat';

const allReducers = combineReducers({
  TRType: TypeReducer,
  TRCategory: CategoryReducer,
  TRForm: FormReducer,
  TRAllocStrat: AllocStratReducer,
});

export default allReducers;