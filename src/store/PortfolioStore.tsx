import reducer from '../reducers/';
import { createStore } from 'redux';

namespace PortfolioStore {
    export type NavigationStore = { selectedIndex:  number };

    export type Stores = {
        NavigationStore: NavigationStore;
    };
}

const store = createStore(reducer);

export default PortfolioStore;
export { store, PortfolioStore };
