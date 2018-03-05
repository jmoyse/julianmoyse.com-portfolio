import reducer from '../reducers/';
import { createStore } from 'redux';

namespace PortfolioStore {
    export type NavigationStore = { selectedIndex: Number };

    export type Stores = {
        NavigationStore: NavigationStore;
    };
}

const store = createStore(reducer);
console.log(store);

export default PortfolioStore;

export { store, PortfolioStore };
