import * as FirebaseService from './FirebaseService'

const createOrder = async(data) => {  
  return await FirebaseService.create('orders', data)
}

const getOrder = async(id) => {
    return await FirebaseService.get('orders', id)
}

export { createOrder, getOrder }