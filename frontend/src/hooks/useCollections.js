import { useEffect, useState } from 'react'
import RestApi from '../utils/restApi'

const useCollections = (account, limit=-1) => {
  const [collections, setCollections] = useState([])
  
  useEffect(() => {
    const fetchCollections = async () => {
      RestApi.get('collections', {
        params: {
          account: account,
          limit: limit
        }
      }).then(res => {
          setCollections(res.data.collections)
      }).catch(e => {
          console.log(e)
          setCollections([])
      })
    }

    fetchCollections()
  }, [setCollections, account])

  return collections
}

export default useCollections