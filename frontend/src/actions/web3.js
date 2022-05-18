import SET_WEB3, {
  UPDATE_CHAIN_ID,
  UPDATE_USER_ADDRESS,
} from '../constants/types';

export const setWeb3 = (payload) => ({
  type: SET_WEB3,
  payload,
});
export const updateAccount = (account) => ({
  type: UPDATE_USER_ADDRESS,
  payload: account,
});
export const updateChainId = (_chainId) => ({
  type: UPDATE_CHAIN_ID,
  payload: _chainId,
});
