import React from 'react'

const Article = (props) => {
  return (
    <div className="left-align">
      <h2>{props.articleInfo.title}</h2>
      <h3>{props.articleInfo.source.name}</h3>
      <p>{props.articleInfo.publishedAt}</p>
    </div>
  )
}

export default Article


// link the source name to the page with only that particular source.
// set the sourcemane selected as the url when searching
// pass the selectedName down to this component
// use that props to link to source page, display similar source articles