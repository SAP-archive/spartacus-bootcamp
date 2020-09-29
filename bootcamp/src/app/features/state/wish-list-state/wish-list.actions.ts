import { Action } from '@ngrx/store';

export enum WishListActionTypes {
  LoadWishLists = '[WishList] Load WishLists',
  LoadWishListsSuccess = '[WishList] Load WishLists Success',
  AddWish = '[WishList] Add Wish',
  RemoveWish = '[WishList] Remove Wish',
}

/**
 * Action to initiate wish list load
 */
export class LoadWishLists implements Action {
  readonly type = WishListActionTypes.LoadWishLists;
}

/**
 * Action dispatched on successful wish list load
 */
export class LoadWishListsSuccess implements Action {
  readonly type = WishListActionTypes.LoadWishListsSuccess;
  constructor(public payload: string[]) {}
}

/**
 * Action for adding new wish to the list
 */
export class AddWish implements Action {
  readonly type = WishListActionTypes.AddWish;
  constructor(public payload: string) {}
}

/**
 * Action for removing wish from the list
 */
export class RemoveWish implements Action {
  readonly type = WishListActionTypes.RemoveWish;
  constructor(public payload: string) {}
}

export type WishListActions =
  | LoadWishLists
  | LoadWishListsSuccess
  | AddWish
  | RemoveWish;
