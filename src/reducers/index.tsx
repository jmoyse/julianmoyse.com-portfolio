import { combineReducers } from 'redux';
import { portfolioReducer } from './PortfolioReducer';


export default combineReducers({
    NavigationStore: portfolioReducer,
});

export {
    combineReducers,
    portfolioReducer,
};