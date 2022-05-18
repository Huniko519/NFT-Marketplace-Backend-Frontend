import {combineReducers} from 'redux';
const initialState = {
  web3: null,
  chainId: 97,
  userAccount: null,
  tokenBalane: 0,
  bnbBalance: 0,
};
const initialUserData = {
  name: 'Artist',
  avatar: 'https://ipfs.io/ipfs/QmRRXBjQRQBdnivJuGe9bgk4yqogULSYoLmcy32y6AierY',
  bio: 'Artist Bio',
  twitter: '',
  telegram: '',
  instagram: '',
  token: localStorage.getItem('moonstarToken') || '',
  loading: false,
  error: null
};
const initialPrice = {
  bnb: 0,
  moonstar: 0,
};
function web3(state = initialState, action) {
  switch (action.type) {
    case 'SET_WEB3_DATA':
      return {
        ...state,
        ...action.payload,
      };
    case 'UPDATE_CHAIN_ID':
      return {
        ...state,
        chainId: action.payload,
      };
    case 'UPDATE_USER_ADDRESS':
      return {
        ...state,
        userAccount: action.payload,
      };
    default:
      return state;
  }
}
function user(state = initialUserData, action) {
  switch (action.type) {
    case 'SET_PROFILE':
      action.payload = Object.assign({}, action.payload, initialUserData);
      return {
        ...action.payload,
      };
    case 'REQUEST_LOGIN':
        return {
            ...state,
            loading: true,
        };  
    case 'LOGIN_SUCCESS':
        return {
            ...state,
            token: action.payload,
            loading: false,
        };
    case 'LOGOUT':
        return {
            ...state,
            token: '',
        };  
    case 'LOGIN_ERROR':
      return {
          ...state,
          loading: false,
          error: action.error
      };    
    default:
      return state;
  }
}
function price(state = initialPrice, action) {
  switch (action.type) {
    case 'UPDATE_PRICE':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  web3,
  user,
  price,
});

export default rootReducer;
