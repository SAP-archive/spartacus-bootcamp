import { WishListActions, WishListActionTypes } from './wish-list.actions';
import { WishListState } from './wish-list.state';

export const initialState: WishListState = {
  wishes: undefined,
};

export function reducer(
  state = initialState,
  action: WishListActions
): WishListState {
  switch (action.type) {
    case WishListActionTypes.LoadWishListsSuccess:
      return { wishes: action.payload };

    case WishListActionTypes.AddWish: {
      if (state.wishes.find(wish => wish === action.payload)) {
        // don't modify the sate if wish is already in list
        return state;
      }
      return { wishes: [...state.wishes, action.payload] };
    }

    case WishListActionTypes.RemoveWish:
      return { wishes: state.wishes.filter(wish => wish !== action.payload) };

    default:
      return state;
  }
}
