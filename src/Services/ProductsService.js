import * as FirebaseService from './FirebaseService'

const getProducts = async(queryFilterArray) => {  
  if(queryFilterArray){
    return await FirebaseService.list('items', queryFilterArray)
  }else{
    return await FirebaseService.list('items')
  }
}

const getProduct = async(id) => {
    return await FirebaseService.get('items', id)
}

export { getProduct, getProducts }