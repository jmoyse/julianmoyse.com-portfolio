// action strings
const SET_SELECTED_INDEX = 'SET_SELECTED_INDEX';
type SET_SELECTED_INDEX = typeof SET_SELECTED_INDEX;

// action type
interface PortfolioAction {
    type: string;
    index: Number;
}

// actions
function setSelectedIndex (index: Number): PortfolioAction {
    return {
        type: SET_SELECTED_INDEX,
        index: index,
    };
}
function getSelectedIndex (): PortfolioAction {
    return {
        type: SET_SELECTED_INDEX,
        index: 0,
    };
}

export { setSelectedIndex, getSelectedIndex, PortfolioAction, SET_SELECTED_INDEX };
