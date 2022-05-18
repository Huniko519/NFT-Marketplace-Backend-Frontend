import Web3 from 'web3';
import {SET_PROFILE} from '../constants/types';
import restApi from '../utils/restApi';

export const setProfile = (payload) => ({
  type: SET_PROFILE,
  payload,
});


export async function login(dispatch, account, nonce) {
	try {
		dispatch({ type: 'REQUEST_LOGIN' });
    try {
        const {ethereum} = window;
        const web3 = new Web3(ethereum);
        const signature = await web3.eth.personal.sign(
          `Moonstar NFT Marketplace signing with one-time nonce: ${nonce}`, account, ''
        );
        
        if(signature) {
            const { data } = await restApi.post(`login`, {address: account, signature: signature})
            const token = data.token;
            if(token) {
                localStorage.setItem('moonstarToken', token);
                dispatch({ type: 'LOGIN_SUCCESS', payload: token });
                return token;
            }
        }
      } catch (err) {
        dispatch({ type: 'LOGIN_ERROR', error: err });
        console.log(err);
      }

	} catch (error) {
		dispatch({ type: 'LOGIN_ERROR', error: error });
		console.log(error);
	}
}

export async function logout(dispatch) {
	dispatch({ type: 'LOGOUT' });
	localStorage.removeItem('moonstarToken');
}