export const WISH_LIST_FEATURE = 'wishList';

export interface WishListState {
  wishes: string[];
}

export interface StateWithWishList {
  [WISH_LIST_FEATURE]: WishListState;
}
