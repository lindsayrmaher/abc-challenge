import axios from 'axios'

// Action Types
const GET_COLLECTIONS = 'GET_COLLECTIONS'

// Action Creators
const getCollections = collections => ({type: GET_COLLECTIONS, collections})

// Thunks
export const fetchCollections = () => {
  return (dispatch) => {
    return axios.get('/api/collections')
      .then(res => (res.data))
      .then(collections => (dispatch(getCollections(collections))))
      .catch(err => console.error('error fetching collections', err))
  }
}

// Reducer
const reducer = (collections = [], action) => {
  switch (action.type){
    case GET_COLLECTIONS:
      return action.collections
    default:
      return collections
  }
}

export default reducer
