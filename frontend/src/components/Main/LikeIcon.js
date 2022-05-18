import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {toast} from 'react-toastify';
import { login } from "../../actions/user";
import restApi from '../../utils/restApi';

const LikeIcon = (props) => {
  const user = useSelector((state) => state.user);
  const web3 = useSelector((state) => state.web3);
  const dispatch = useDispatch();
  const [likes, setLikes] = useState([])
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if(web3.userAccount) {
      const isExistMyAccount = likes && likes.length > 0 && likes.findIndex(item => item.toLowerCase() === web3.userAccount.toLowerCase()) >= 0;
      setLiked(isExistMyAccount)
    }else {
      setLiked(false)
    }
  }, [web3.userAccount, likes])

  useEffect(() => {
    setLikes(props.likes || [])
  }, [props]);

  const onclick = async () => {
    if(props.onClick) {
      props.onClick();
      return;
    }
    if(!props.enabled || !props.collectionId || !props.tokenId) {
      return;
    }
    if(!web3 || !web3.userAccount) {
      toast.error('Error: Please confirm metamask connection and try again');
      return;
    }

    if(user && !user.token) {
      await login(dispatch, web3.userAccount, user.nonce)
    }

    restApi.post('item/like', {
      tokenId: props.tokenId,
      collectionId: props.collectionId,
    }).then(res => {
      const item = res.data.item;
      setLikes(item.likes)
    })
  }



  return (
    <>
      <span className='' style={{paddingRight: '2px'}}>{likes.length > 0 ? likes.length : ''}</span>
      <svg fill={liked ? '#7e45f9' : '#50505c'} onClick={onclick}
      viewBox="0 0 139 139" width={`${props.size || 20}px`} height={`${props.size || 20}px`}>
        <path d="M18.237,60.574l23.096,19.578l-7.183,29.438c-1.411,5.491,4.648,9.998,9.575,6.901L69.5,100.572l25.774,15.916  c4.79,2.955,10.844-1.408,9.576-6.902l-7.184-29.435l23.099-19.579c4.363-3.661,2.111-10.844-3.662-11.267l-30.282-2.255  L75.414,19.025c-2.112-5.211-9.577-5.211-11.832,0L52.175,47.051l-30.281,2.255C16.124,49.872,13.869,56.913,18.237,60.574z"/>
      </svg>
    </>
  );
}

export default LikeIcon;
