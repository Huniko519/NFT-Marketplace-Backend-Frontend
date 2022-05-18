import { useEffect, useState } from 'react'
import RestApi from '../utils/restApi'

const useCategories = () => {
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        
        RestApi.get('categories').then(res => {
            setCategories(res.data.categories)
        }).catch(e => {
            console.log(e)
            setCategories([])
        })
      } catch (error) {
        console.log(error)
      }
    }

    fetchCategories()
  }, [setCategories])

  return categories
}

export default useCategories