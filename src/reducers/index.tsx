import { combineReducers } from 'redux';
import { portfolioReducer } from './PortfolioReducer';


export default combineReducers({
    PortfolioStore: portfolioReducer,
});

export {
    combineReducers,
    portfolioReducer,
};