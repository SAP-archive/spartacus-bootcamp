import {StateWithWishList, WISH_LIST_FEATURE, WishListState} from './wish-list.state';
import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

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
