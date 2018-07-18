import React, { Component } from 'react'
let date = require('date-and-time');

export default class Article extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedSource: ''
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    console.log(event)
    // this.setState({})
  }
  render() {
    let now = new Date(this.props.articleInfo.publishedAt)
    const newDate = date.format(now, 'YYYY/MM/DD HH:mm:ss')

    return (
      <div className="left-align article z-depth-1 hoverable">
        <h4>{newDate}</h4>
        <h2>{this.props.articleInfo.title}</h2>
        <a><h3>{this.props.articleInfo.source.name}</h3></a>
      </div>
    )
  }
}

// export default Article


// link the source name to the page with only that particular source.
// set the sourcemane selected as the url when searching
// pass the selectedName down to this component
// use that props to link to source page, display similar source articles


//generally, clean up unused components and stuff (ie router stuff)