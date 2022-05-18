import {UPDATE_PRICE} from '../constants/types';

export const updatePrice = (payload) => ({
  type: UPDATE_PRICE,
  payload,
});
