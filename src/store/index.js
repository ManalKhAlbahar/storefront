import {combineReducers, createStore} from 'redux';
import ReduceCategory from './categories';
import ReduceProducts from './products';


let reducers = combineReducers({ReduceCategory,ReduceProducts});

const store = () => {
  
    return createStore(reducers)
}


export default store();