import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, QR, Box, Flex, Modal, Button, Card, Heading } from 'rimble-ui';
import { toast } from 'react-toastify';
import { Col, FormGroup, Label, Spinner } from 'reactstrap';
import { useClipboard } from 'use-clipboard-copy';
import { shortenHex } from '../../utils/helper';
import ipfs from '../../utils/ipfsApi.js';
import restApi from '../../utils/restApi';
import { setProfile } from '../../actions/user';
const Account = ({ isMyAccount, account }) => {
  const web3 = useSelector((state) => state.web3);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenProfile, setIsOpenProfile] = useState(false);
  const [profile_name, setProfileName] = useState(user.name);
  const [profile_bio, setProfileBio] = useState(user.bio);
  const [profile_twitter, setProfileTwitter] = useState(user.twitter);
  const [profile_telegram, setProfileTelegram] = useState(user.telegram);
  const [profile_instagram, setProfileInstagram] = useState(user.instagram);
  const [avatarImg, setAvartarImg] = useState(user.avatar);
  const [buffer, setBuffer] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (account) {
      restApi.get(`user/${account}`).then(response => {
        if (response) {
          const data = response.data.user;
          setProfileName(data.name ? data.name : user.name);
          setAvartarImg(data.avatar ? data.avatar : user.avatar);
          setProfileBio(
            data.description ? data.description : user.bio
          );
          setProfileTwitter(
            data.twitter ? data.twitter : user.twitter
          );
          setProfileTelegram(
            data.telegram ? data.telegram : user.telegram
          );
          setProfileInstagram(
            data.instagram ? data.instagram : user.instagram
          );
        }
      })
    }
  }, [account]);

  const clipboard = useClipboard({
    copiedTimeout: 1000, // timeout duration in milliseconds
  });

  const closeProfileModal = (e) => {
    e.preventDefault();
    setIsOpenProfile(false);
  };
  const openProfileModal = (e) => {
    e.preventDefault();
    setIsOpenProfile(true);
  };
  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  // Copy User Address from dashboard
  const handleClick = React.useCallback(() => {
    const url = `${account}`;
    clipboard.copy(url); // programmatically copying a value
  }, [clipboard.copy]);

  // Handle File Input
  const handleFileInput = (e) => {
    setAvartarImg(URL.createObjectURL(e.target.files[0]));
    const reader = new FileReader();
    reader.onabort = () => console.log('file reading was aborted');
    reader.onerror = () => console.log('file reading has failed');
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result;
      setBuffer(binaryStr);
    };
    reader.readAsArrayBuffer(e.target.files[0]);
  };
  // Update profile
  const updateProfile = async (e) => {
    setIsProcessing(true);
    let image = avatarImg;
    if (buffer) {
      const result = await ipfs.files.add(Buffer.from(buffer));
      image = `https://ipfs.io/ipfs/${result[0].hash}`;
    }

    const userAddress = `${web3.userAccount}`;
    dispatch(
      setProfile({
        name: profile_name,
        bio: profile_bio,
        avatar: image,
        twitter: profile_twitter,
        telegram: profile_telegram,
        instagram: profile_instagram,
      })
    );
    await restApi.post(`user/update`, {
      address: userAddress,
      name: profile_name,
      description: profile_bio,
      avatar: image,
      twitter: profile_twitter,
      telegram: profile_telegram,
      instagram: profile_instagram,
    })

    setIsOpenProfile(false);
    toast.success('User Profile has been updated');
    setIsProcessing(false);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <Avatar
              size="100px"
              src={avatarImg || ''}
              className="mx-auto text-center"
            />
            <h1 className="intro-hero__title">
              {isMyAccount ? 'My' : `${profile_name}'S`} PROFILE{' '}
              {isMyAccount ? <span
                className="pb-2"
                style={{ cursor: 'pointer' }}
                onClick={openProfileModal}
              >
                <svg
                  width="1em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      d="M16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 0 0-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 1 0-2.621-2.621z"
                      stroke="#626262"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 15v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h3"
                      stroke="#626262"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <rect
                    x="0"
                    y="0"
                    width="24"
                    height="24"
                    fill="rgba(0, 0, 0, 0)"
                  />
                </svg>
              </span> : null}
            </h1>
            <div>
              <span>
                {shortenHex(`${account}`, 7)}
              </span>
              <span
                className="button-text mx-1"
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
              >
                {!clipboard.copied ? (
                  <svg
                    color="inherit"
                    viewBox="0 0 24 24"
                    height="24px"
                    width="24px"
                    fill="currentcolor"
                    className="sc-kgAjT ciVWZA"
                  >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
                  </svg>
                ) : (
                  <svg
                    fill="currentcolor"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z" />
                  </svg>
                )}
              </span>
              <span
                className="button-text mx-1"
                style={{ cursor: 'pointer' }}
                onClick={openModal}
              >
                <svg
                  color="inherit"
                  viewBox="0 0 24 24"
                  height="24px"
                  width="24px"
                  fill="currentcolor"
                  className="sc-giadOv kMbFvz"
                >
                  <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"></path>
                </svg>
              </span>
            </div>
            <p className="my-3">{profile_bio}</p>
            <ul className="list-inline social-nav">
              <li className="list-inline-item">
                <a href={profile_twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={profile_telegram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href={profile_instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
            <a href="/marketplace">
              <i
                className="fas fa-chevron-left mr-3"
                aria-hidden="true"
              ></i>{' '}
              Back To Explorer
            </a>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen}>
        <Card width={'420px'} p={0} bg={'#08091A'} borderColor={'#7f81a2'} color={'#f5f5f5'}>
          <Button.Text
            icononly
            icon={'Close'}
            color={'moon-gray'}
            position={'absolute'}
            top={0}
            right={0}
            mt={3}
            mr={3}
            onClick={closeModal}
          />

          <Box p={4} mb={1}>
            <Heading.h3 px={4}>MY ADDRESS</Heading.h3>

            <Box p={4}>
              <QR
                value={account}
                size={300}
              />
            </Box>
            <Box px={4}>
              <Heading.h4>
                {shortenHex(`${account}`, 10)}
              </Heading.h4>
            </Box>
          </Box>

          <Flex
            px={4}
            py={3}
            borderTop={1}
            borderColor={'#4e3fce'}
            justifyContent={'flex-end'}
          >
            <Button.Outline onClick={closeModal} borderColor={'#4e3fce'}>OK</Button.Outline>
          </Flex>
        </Card>
      </Modal>
      <Modal isOpen={isOpenProfile} size="lg">
        <Card p={0} bg={'#08091A'} borderColor={'#7f81a2'} color={'#f5f5f5'} className="overflow-auto">
          <Button.Text
            icononly
            icon={'Close'}
            color={'moon-gray'}
            position={'absolute'}
            top={0}
            right={0}
            mt={3}
            mr={3}
            onClick={closeProfileModal}
          />

          <Box px={4}>
            <Heading.h3 p={4}>Edit Profile</Heading.h3>
            <Avatar
              size="100px"
              src={avatarImg}
              className="mx-auto text-center"
            />
            <FormGroup className="d-flex justify-content-center align-items-center my-2">
              <Label for="exampleCustomFileBrowser" className="btn btn-primary btn-block">User Avatar Img</Label>
              <input
                type="file"
                id="exampleCustomFileBrowser"
                name="customFile"
                className="position-absolute invisible"
                onChange={handleFileInput}
              />
            </FormGroup>
            <FormGroup row className="my-2">
              <Label for="exampleEmail" sm={4} size="lg">
                Name * :
              </Label>
              <Col sm={8}>
                <div className="group-input">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-air"
                    value={profile_name}
                    onChange={(e) => setProfileName(e.target.value)}
                  />
                </div>
              </Col>
            </FormGroup>
            <FormGroup row className="my-2">
              <Label for="exampleEmail" sm={4} size="lg">
                Bio * :
              </Label>
              <Col sm={8}>
                <div className="group-input">
                  <textarea
                    placeholder="A short description of your NFT"
                    className="form-air"
                    rows="2"
                    value={profile_bio}
                    onChange={(e) => setProfileBio(e.target.value)}
                  />
                </div>
              </Col>
            </FormGroup>
            <FormGroup row className="my-2">
              <Label for="exampleEmail" sm={4} size="lg">
                Social:
              </Label>
              <Col sm={8}>
                <span> Twitter </span>
                <div className="group-input">
                  <input
                    type="text"
                    placeholder="Social: Twitter"
                    className="form-air"
                    value={profile_twitter}
                    onChange={(e) => setProfileTwitter(e.target.value)}
                  />
                </div>
                <span> Telegram </span>
                <div className="group-input">
                  <input
                    type="text"
                    placeholder="Social: Telegram"
                    className="form-air"
                    value={profile_telegram}
                    onChange={(e) => setProfileTelegram(e.target.value)}
                  />
                </div>
                <span> Instagram </span>
                <div className="group-input">
                  <input
                    type="text"
                    placeholder="Social: Instagram"
                    className="form-air"
                    value={profile_instagram}
                    onChange={(e) => setProfileInstagram(e.target.value)}
                  />
                </div>
              </Col>
            </FormGroup>
          </Box>

          <Flex
            px={4}
            py={3}
            borderTop={1}
            borderColor={'#4e3fce'}
            justifyContent={'flex-end'}
          >
            <Button.Outline onClick={updateProfile} borderColor={'#4e3fce'}>
              {isProcessing ? <Spinner size="sm" /> : 'OK'}
            </Button.Outline>
          </Flex>
        </Card>
      </Modal>
    </>
  );
};

export default Account;
