import React, {useState, useEffect} from 'react';
import {Avatar, QR, Box, Flex, Modal, Button, Card, Heading} from 'rimble-ui';
import {toast} from 'react-toastify';
import {Col, FormGroup, Label, Spinner} from 'reactstrap';
import ipfs from '../../utils/ipfsApi.js';
import { getDefaultAddres, getFactoryContractInstance } from '../../utils/web3';
import restApi from '../../utils/restApi.js';
import { DefaultAvatar } from '../../constants/index.js';

const CollectionModal = ({isOpen, closeModal}) => {
  const [collection_name, setCollectionName] = useState('');
  const [collection_symbol, setCollectionSymbol] = useState('');
  const [collection_desc, setCollectionDesc] = useState('');
  const [collectionImg, setCollectionImg] = useState(null);
  const [buffer, setBuffer] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {

  }, []);

  // Handle File Input
  const handleFileInput = (e) => {
    setCollectionImg(URL.createObjectURL(e.target.files[0]));
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
  // create Collection
  const createCollection = async (e) => {
    setIsProcessing(true);
    let image = collectionImg;
    if (buffer) {
      const result = await ipfs.files.add(Buffer.from(buffer));
      image = `https://ipfs.io/ipfs/${result[0].hash}`;
    }else {
        setIsProcessing(false);
        toast.error('Please select Collection Image');
        return;
    }
    console.log(image)

    if(!collection_name || !collection_symbol) {
        setIsProcessing(false);
        toast.error('Please input valid Name and Symbol!');
        return;
    }

    try {
      const factoryContract = getFactoryContractInstance();
      const userAddress = await getDefaultAddres();
    
      const tx = await factoryContract.methods
        .createCollection(
          collection_name,
          collection_symbol
        )
        .send({from: userAddress});
      console.log('=== factory new collection TxHash ===', tx);
      await restApi.get('collections', {
        address: tx.events.CollectionCreated.returnValues.collection_address,
        name: collection_name,
        symbol: collection_symbol,
        description: collection_desc,
        image: image,
        creator: userAddress,
        owner: userAddress,
        txHash: tx.transactionHash,
        status: 'private',
        date: Date.now(),
      })
      toast.success('Collection created successfully');
      setIsProcessing(false);
      closeModal();
    } catch (err) {
      setIsProcessing(false);
      let message = err.message
        ? err.message
        : `Transaction Failed. Please make sure you have sufficient balance and Minimum Balance`;
      toast.error(message);
      console.error(err);
      return;
    }
  };
  return (
    <>
      <Modal isOpen={isOpen}>
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
            onClick={e => closeModal()}
          />

          <Box px={4}>
            <Heading.h3 p={4}>Create Collection</Heading.h3>
            <FormGroup className="d-flex align-items-center justify-content-center my-2">
              <Avatar
                  size="100px"
                  src={collectionImg || DefaultAvatar}
                  className="mx-auto text-center"
              />
              <Label for="exampleCustomFileBrowser" className="btn btn-primary">Collection Img</Label>
              <input
                  type="file"
                  id="exampleCustomFileBrowser"
                  name="customFile"
                  className="position-absolute invisible"
                  onChange={handleFileInput}
              />
            </FormGroup>
            <FormGroup row className="my-2">
              <Label for="exampleEmail" sm={12} size="lg">
                Name *
              </Label>
              <Col sm={12}>
                <div className="group-input">
                  <input
                    type="text"
                    placeholder="Collection Name"
                    className="form-air"
                    value={collection_name}
                    onChange={(e) => setCollectionName(e.target.value)}
                  />
                </div>
              </Col>
            </FormGroup>
            <FormGroup row className="my-2">
              <Label for="exampleEmail" sm={12} size="lg">
                Symbol *
              </Label>
              <Col sm={12}>
                <div className="group-input">
                  <input
                    type="text"
                    placeholder="Collection Symbol"
                    className="form-air"
                    value={collection_symbol}
                    onChange={(e) => setCollectionSymbol(e.target.value)}
                  />
                </div>
              </Col>
            </FormGroup>
            <FormGroup row className="my-2">
              <Label for="exampleEmail" sm={12} size="lg">
                Description
              </Label>
              <Col sm={12}>
                <div className="group-input">
                  <textarea
                    placeholder="A short description of your Collection"
                    className="form-air"
                    rows="2"
                    value={collection_desc}
                    onChange={(e) => setCollectionDesc(e.target.value)}
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
            <Button.Outline onClick={createCollection} borderColor={'#4e3fce'}>
              {isProcessing ? <Spinner size="sm" /> : 'Create Collection'}
            </Button.Outline>
          </Flex>
        </Card>
      </Modal>
    </>
  );
};

export default CollectionModal;
