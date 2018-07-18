import React from 'react'

const Article = (props) => {
  return (
    <div>
      <h2>{props.articleInfo.title}</h2>
      <h3>{props.articleInfo.source.name}</h3>
      <p>{props.articleInfo.publishedAt}</p>
    </div>
  )
}

export default Article
