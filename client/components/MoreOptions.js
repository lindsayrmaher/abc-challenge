import React from 'react'

const MoreOptions = (props) => {
  console.log(props.articleInfo.description)
  return (
    <div>
      <h4>More Article Info:</h4>
      <p>{props.articleInfo.description}</p>
      <img className="responsive-img" src={props.articleInfo.urlToImage} />
    </div>
  )
}

export default MoreOptions