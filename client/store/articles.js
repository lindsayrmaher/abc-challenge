import axios from 'axios'

const GET_ARTICLES = 'GET_ARTICLES'

const getArticles = (articles) => {
  return {
    type: GET_ARTICLES,
    articles
  }
}

export const fetchArticles = () => {
  return (dispatch) => {
    return axios.get('/')
      .then(res => (res.data))
      .then(articles => (dispatch(getArticles(articles))))
      .catch(err => console.error('error fetching articles', err))
  }
}

const reducer = (articles = [], action) => {
  switch (action.type) {
    case GET_ARTICLES:
      return action.articles
    default:
      return articles
  }
}

export default reducer
