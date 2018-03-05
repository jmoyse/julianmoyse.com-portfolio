
import { SET_SELECTED_INDEX, PortfolioAction } from '../actions/PortfolioAction';
import { PortfolioStore } from '../store/PortfolioStore';

export default function portfolioReducer (currentState: PortfolioStore.NavigationStore, action: PortfolioAction): PortfolioStore.NavigationStore {
    if (currentState === undefined) {
        currentState = { selectedIndex: 0 };
    }

    switch (action.type) {
        case SET_SELECTED_INDEX:
            return { selectedIndex: action.index };
        default:
            return currentState;
    }
}

export { portfolioReducer };
