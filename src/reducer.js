export const initialState = {
    info: {},
};

/* // Selector
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0); */

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_CONTACT_INFO':
            return {
                ...state,
                info: action.info,
            };

        default:
            return state;
    }
};

export default reducer