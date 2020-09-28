import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';
import {
  StateWithWishList,
  WishListState,
  WISH_LIST_FEATURE,
} from './wish-list.state';

export const getWishListState: MemoizedSelector<
  StateWithWishList,
  WishListState
> = createFeatureSelector<WishListState>(WISH_LIST_FEATURE);

export const getWishes: MemoizedSelector<
  StateWithWishList,
  string[]
> = createSelector(
  getWishListState,
  (state: WishListState) => state.wishes
);
