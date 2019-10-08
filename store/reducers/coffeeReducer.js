import { GET_COFFEESHOPS, COFFEESHOPS_LOADING } from "./actions/types";

const initialState = {
  loading: true,
  coffeeShops: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_COFFEESHOPS:
      return {
        ...state,
        coffeeShops: payload,
        loading: false
      };
    case COFFEESHOPS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
export default reducer;
