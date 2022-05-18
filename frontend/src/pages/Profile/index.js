import React, {Suspense, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import {Spinner} from 'reactstrap';
import { login } from '../../actions/user';
import spaceBack from '../../assets/img/spaceback.png';

const NftLists = React.lazy(() => import('./nftLists'));
const Account = React.lazy(() => import('./account'));
const HotLists = React.lazy(() => import('./hotlists'));
const Collections = React.lazy(() => import('./collections'));

const Profile = () => {
  const web3 = useSelector((state) => state.web3);
  const user = useSelector((state) => state.user);
  let {account} = useParams();
  const isMyAccount = !account || (account && web3.userAccount && (account.toLowerCase() === web3.userAccount.toLowerCase()));
  if(!account) {
    account = web3.userAccount;
  }
  const dispatch = useDispatch();
  const [login_loading, setLoginLoading] = useState(true);
  const [login_error, setLoginError] = useState(null);

  useEffect(() => {
    async function loginUser(user, account) {
      if(!user || !account) {
        return;
      }
      if(!isMyAccount || user.token) {
        setLoginError(null);
        setLoginLoading(false);
        return;
      }
      if(user.loading) {
        setLoginLoading(user.loading);return;
      }
      if(user.error) {
        setLoginError(user.error); return;
      }
      await login(dispatch, account, user.nonce)
    }
    
    loginUser(user, web3.userAccount)
  }, [user, web3.userAccount])

  return (
    <Suspense fallback={<div className="text-center col-12">...</div>}>
      { (isMyAccount && user.token) || !isMyAccount ? (
        <>
          <section
            className="intro-hero"
            style={{background: `url(${spaceBack}) no-repeat center/cover`}}
          >
            <Account isMyAccount={isMyAccount} account={account}/>
          </section>
          <HotLists isMyAccount={isMyAccount} account={account}/>
          <Collections isMyAccount={isMyAccount} account={account}/>
          <NftLists isMyAccount={isMyAccount} account={account}/>
        </>
      ): (
        <div className='page-loading'>  
          <Spinner />
        </div>
      )}
      
    </Suspense>
  );
};
export default Profile;
