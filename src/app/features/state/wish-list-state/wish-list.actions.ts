import { Action } from '@ngrx/store';

export enum WishListActionTypes {
  LoadWishLists = '[WishList] Load WishLists',
  LoadWishListsSuccess = '[WishList] Load WishLists Success',
  AddWish = '[WishList] Add Wish',
  RemoveWish = '[WishList] Remove Wish',
}

export class LoadWishLists implements Action {
  readonly type = WishListActionTypes.LoadWishLists;
}

export class LoadWishListsSuccess implements Action {
  readonly type = WishListActionTypes.LoadWishListsSuccess;
  constructor(public payload: string[]) {}
}

export class AddWish implements Action {
  readonly type = WishListActionTypes.AddWish;
  constructor(public payload: string) {}
}

export class RemoveWish implements Action {
  readonly type = WishListActionTypes.RemoveWish;
  constructor(public payload: string) {}
}

export type WishListActions =
  | LoadWishLists
  | LoadWishListsSuccess
  | AddWish
  | RemoveWish;
